## findKing

该脚本用来筛选NFT图狗高胜率地址

### 使用说明

将有不错利润的项目和无利润项目的合约地址分别填入`glodDogs.txt`和`trashDogs.txt`，换行符隔开
`findKing.js`中根据comment修改参数
脚本将会从链上获取这些logs，第一次运行时间会较长，因为log都将保存到本地。获取完成后会对logs进行
分析，最后得出高胜率地址
logs将将会保存在`goldDogLogs`和`trashDogLogs`目录下

### 控制台运行

``` shell

筛选高胜率地址
node findKing

查询单个地址胜率
node getWinRate

```
