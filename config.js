export const config = {
    /**
     * @ch 起始区块高度，项目地址中最早期项目的起始区块即可，合理控制该值可提高计算速度
     * @eh start block number of getting logs, please insure this value contains
     * all the minting logs of your projects
     */
    fromBlock: 14850000,
    /**
     * @ch 打中金狗的数量 (小于该值剔除)
     * @en the amount of successfully minted highly profitable projects 
     * (if an account doesn't reach this limit, it won't be counted in the result)
     */
    goldAmount: 5,
    /**
     * @ch 打中垃圾的数量 (大于该值剔除)
     * @en the amount of successfully minted non-profitable projects 
     * (if the amount of projects an account minted has exceed this value, it will not be counted in the result)
     */
    trashAmount: 5,
    /**
     * @ch 如果你希望筛选出的地址必须mint到了某些项目，可以填写在
     * 这里，如果不需要则保持空数组即可
     * @en if you want the final generated address must have minted some
     * specific projects, you can paste the address into this array
     */
    indispensableAddress: [],
    /**
     * @ch 如果你使用的工具可以帮你筛选单笔mint数量，可以设置这个参数，
     * 把单笔mint数量大于某个值的项目剔除，不算在垃圾项目当中，不
     * 需要则设置为-1
     * @en if you are using a bot can follow the freemint transactions
     * and filtrate the transactions which the amount of nfts was minted 
     * exceeds a specific value, then this param will be very useful, 
     * if the mint amount per transaction exceed this param, it won't be
     * counted in the crappy projects.This will help you to get more accurate
     * data, please set it to -1 if you don't need this
     */
    mintAmountPerTransaction: -1
}