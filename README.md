## 脚本说明
&nbsp;&nbsp;&nbsp;&nbsp;该脚本用来筛选NFT图狗高胜率地址，利用可跟踪地址交易的工具来跟着图狗王打土狗🐶！
&nbsp;&nbsp;&nbsp;&nbsp;另外推销下自己的freemint-tracker机器人，个人认为比目前市面所有产品都要完善且<b>速度更快</b>。我自己玩自动化打图狗已经很久了，踩的坑也很多，已经尽力做到可以不错失金狗的情况下筛选掉垃圾项目，尤其最近图狗市场越来越火热，伴随的垃圾项目也越来越多，大部分产品的过滤功能也并不完备，gas烧起来还是很伤的。
&nbsp;&nbsp;&nbsp;&nbsp;有兴趣了解freemint-tracker或者对本仓库代码有问题的可以[twitter](https://twitter.com/xof2021)来dm我，或者加我的wechat：FOX394
<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);" 
    src="https://github.com/TimGrey998/img/blob/main/freemint-tracker.png">
    <br>
</center>

### 使用说明

1. 将有不错利润的项目和无利润项目的合约地址分别填入`glodDogs.txt`和`trashDogs.txt`，换行符隔开

2. `config.js`中根据注释配置参数

3. 将.env.example的.example后缀去掉，填入alchemy的key

4. 脚本将会从链上获取这些logs，第一次运行时间会较长，因为log都将保存到本地。获取完成后会对logs进行分析，最后得出高胜率地址<b>(Alchemy的api规定log返回值不可以超过10000条，所以当超过10000条时将采用分片下载，时间会更长一些，所以第一次运行需要耐心等待)</b>
<b>关于api的问题如果有更好的解决方案请提给我～</b>

5. logs将将会保存在`goldDogLogs`和`trashDogLogs`目录下

6. 可以使用`node getWinRate 地址`来查询单个地址的胜率

### 控制台运行

``` shell

// 筛选高胜率地址
node findKing

// 查询单个地址胜率
node getWinRate

```
