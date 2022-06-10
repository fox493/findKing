[中文](https://github.com/TimGrey998/findKing/blob/main/README-CN.md) / English
<div align="center">
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);" 
    src="https://github.com/TimGrey998/img/blob/main/priview.png">
    <br>
    <p style="opacity: 0.8"><b>Find the king of freemint</b></p>
    <p style="opacity: 0.8">This is a script can help you find the high win rate accounts of freemint</p>
</div>

## Introduction
&nbsp;&nbsp;&nbsp;&nbsp;This script is used to find the high win rate address of free mint (means there is a considerable profit can be taken), then you can use some tracker bot to follow this address to send the transaction.

&nbsp;&nbsp;&nbsp;&nbsp;In addition, I want to recommend my freemint-tracker bot, <b>it's better than most of the similar product, more complete, and faster.</b> I've been play this freemint thing for a long time, to be honest I encountered a lot of problems and lost a lot of gas fee, so I kept on optimizing the strategy to filtrate the crappy project, while not missing those high profit project.

&nbsp;&nbsp;&nbsp;&nbsp;If you got any interest in my freemint-tracker bot or any issue with this repo, you can contact me through [twitter](https://twitter.com/xof2021) , my Discord: <b>foxof.eth#5195</b>, or my Wechat: <b>FOX394</b>.
<div align="center">
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);" 
    src="https://github.com/TimGrey998/img/blob/main/freemint-tracker.png">
    <br>
    <p style="opacity: 0.6;font-size: small;">freemint-tracker repo</p>
</div>

## Config

1. Put the addresses of those project with nice profit into `goldDogs.txt`(sorry the name sounds a little wired, its kinda Chinese another name of those freemint project), and put those crap into `trashDogs.txt`, <b>don't forget the line break</b>.

2. Fill the `config.js` according to the comment.

3. Rename the `.env.example` file to `.env`, and paste your alchemy api key bewteen the quotes.

4. The script will request logs from the block chain, and it will take a while if it's your first time running this script. Once it's done, the script will analyze the logs and generate the high win rate addresses.<b>(Alchemy has a limit on the amount of the returned logs, so when the logs exceeds 10000, we have to partially request those logs, it will takes longer, please be patient)</b>

5. Logs will be stored into `goldDogLogs` and `trashDogLogs` directories, respectively.

6. run the script

## How to run

``` shell

// generate addresses on the basis of configuration
node findKing

// get the win rate of a specific address
node getWinRate "address here"

```
