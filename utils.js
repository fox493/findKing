import { LoadingAnimation } from "./Loading.js"
import { printBanner } from "./banner.js"
import { ethers } from "ethers"
import fs from "fs"

const loader = new LoadingAnimation("calulating...")

/**
 *
 * @param {*} goldenDogsMinters 金狗地址
 * @param {*} badDogs 垃圾地址
 * @param {*} mintedAmount 打中金狗的数量
 * @param {*} trashAmount 打中垃圾的数量
 * @returns
 */
let provider = new ethers.providers.WebSocketProvider(
  "wss://eth-mainnet.alchemyapi.io/v2/0VLC-GIqTGf6nONLhfoddPQAZvCFeLFx"
)


export async function findKing(
  goldenDogs = [],
  badDogs = [],
  mintedAmount,
  trashAmount
) {
  printBanner(
    `Monitoring Info`,
    [
      {
        label: "🐶 Golden Project Amount ",
        content: `${goldenDogs.length}`,
      },
      {
        label: "🖤 Bad Project Amount ",
        content: `${badDogs.length}`,
      },
      {
        label: "🌕 Least Golden Amount ",
        content: `${mintedAmount}`,
      },
      {
        label: "🌑 Most Trash Amount ",
        content: `${trashAmount}`,
      },
    ],
    80
  )
  loader.start()
  let goldenDogsMinters = await getDogLogs(goldenDogs)
  let badDogsMinters = await getDogLogs(badDogs)
  loader.stop()
  let dogsMintersData = []
  for (let minters of goldenDogsMinters) {
    for (let minter of minters) {
      let _minterIndex = dogsMintersData.findIndex((el) => el.minter == minter)
      if (_minterIndex > 0) dogsMintersData[_minterIndex].goldenAmount++
      else {
        dogsMintersData.push({
          minter,
          goldenAmount: 1,
          badAmount: 0,
        })
      }
    }
  }

  for (let minters of badDogsMinters) {
    for (let minter of minters) {
      let _minterIndex = dogsMintersData.findIndex((el) => el.minter == minter)
      if (_minterIndex > 0) {
        dogsMintersData[_minterIndex].badAmount++
      }
    }
  }
  dogsMintersData.map((minter, index) => {
    if (minter.goldenAmount < mintedAmount) delete dogsMintersData[index]
    if (minter.badAmount >= trashAmount) delete dogsMintersData[index]
  })
  dogsMintersData.sort(
    (minter1, minter2) => minter2.goldenAmount - minter1.goldenAmount
  )
  console.log("---------------------------------------------------")
  console.log(dogsMintersData)
  console.log(`✅ Finish!`)
  process.exit(0)
}

const getDogLogs = async (dogs) => {
  if (!dogs) return
  let DogsMinters = []
  for (let i = 0; i < dogs.length; i++) {
    let address = dogs[i]
    let prjMinters = []
    let logs = await getLogs(address)
    // console.log(logs)
    console.log(
      `getting logs of address ${i}:${dogs[i]}, logs' length: ${logs.length}`
    )
    if (logs) {
      for (let log of logs) {
        let add = "0x" + log.topics[2].slice(26)
        if (!prjMinters.includes(add)) prjMinters.push(add)
      }
      DogsMinters.push(prjMinters)
    }
  }
  return DogsMinters
}

const getLogs = async (address) => {
  let logs = []
  let path = `./dogLogs/${address}.json`
  if (fs.existsSync(path)) logs = await readFromLocale(address)
  else {
    try {
      logs = await provider.getLogs({
        address,
        fromBlock: 14400000,
        topics: [
          null,
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          null,
          null,
        ],
      })
      writeToLocale(address, logs)
    } catch (error) {
      if (error.code == "-32602") {
        logs = await fragment(address)
        writeToLocale(address, logs)
      }
    }
  }
  return logs
}
const fragment = async (address) => {
  let fromBlock = 14400000
  let toBlock = await provider.getBlockNumber()
  let logs = []
  while (fromBlock + 4001 < toBlock) {
    fromBlock += 2001
    let _logs = await provider.getLogs({
      fromBlock: fromBlock,
      toBlock: fromBlock + 2000,
      address,
      topics: [
        null,
        "0x0000000000000000000000000000000000000000000000000000000000000000",
        null,
        null,
      ],
    })
    logs = [...logs, ..._logs]
  }
  logs = [
    ...logs,
    ...(await provider.getLogs({
      fromBlock: fromBlock + 2001,
      toBlock,
      address,
      topics: [
        null,
        "0x0000000000000000000000000000000000000000000000000000000000000000",
      ],
    })),
  ]
  return logs
}

const readFromLocale = async (address) => {
  return new Promise((resolve) => {
    let path = `./dogLogs/${address}.json`
    let logs = []
    fs.readFile(path, (err, data) => {
      if (err) console.error(err)
      logs = JSON.parse(data)
      resolve(logs)
    })
  })
}

const writeToLocale = (address, logs) => {
  let path = `./dogLogs/${address}.json`
  fs.writeFile(path, JSON.stringify(logs, null, 4), () => {
    console.log(`successful writting in locale`)
  })
}
