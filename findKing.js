import { findKing } from "./utils.js"

console.clear()
/**
 * 
 * @description 通过logs来获取mint地址，再遍历所有地址来统计每个对应地址mint到的金狗和垃圾项目的数量，通过设置后面两个参数
 *              来剔除一些垃圾地址。
 *              超过10000条返回值的合约地址会采用分片请求，等待时间会稍长一些。
 *
 * @running     通过node findKing 运行脚本
 * 
 * @param {*} goldenDogsMinters 金狗地址
 * @param {*} badDogs 垃圾地址
 * @param {*} mintedAmount 打中金狗的数量 (小于该值剔除)
 * @param {*} trashAmount 打中垃圾的数量 (大于该值剔除)
 * @returns
 */

// Example
findKing(
  [
    "0x3ae7f1ce5c272b0e33a39760a5801287f04e7a32", // Pet Rocks
    "0x01AE9df9CC72eD928c6F34aa74a3449e8D5ab134", // OmniBird
    "0x89dd93b942de8338441e7B66cd17aB369db4157c", // cool kids
    "0xF25f4F4f6517101dC947D1C0370571eBDD25f14a", // Lilium art
    "0x075AD4d55B9A7A746fB05cc8523b50acC9f62358", // Goji Bear
  ],
  [
    "0xb61ed6e9776529aa29ce5b9afdf2c41857f47f59", // OMNI DOOR
    "0xfee8d0abe3b894b4242f667251be353ed57845da", // Masayuki
    "0xfc18972fc295f4f139f3f64799e4a70b702b7ec3", // QR Pixels
    "0x9c5df2ead85f097fd63a1145204c5a9df2e2374a", // Poor Unlucky Bears
    "0x2910312a1e3e4cdf3c33dfbc88d1e1d7a22e2bbf", // Wired Beast
  ],
  4,
  3
)
