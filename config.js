export const config = {
    /**
     * 打中金狗的数量 (小于该值剔除)
     */
    goldAmount: 30,
    /**
     * 打中垃圾的数量 (大于该值剔除)
     */
    trashAmount: 50,
    /**
     * 如果你希望筛选出的地址必须mint到了某些项目，可以填写在
     * 这里，如果不需要则保持空数组即可
     */
    indispensableAddress: [],
    /**
     * 如果你使用的工具可以帮你筛选单笔mint数量，可以设置这个参数，
     * 把单笔mint数量大于某个值的项目剔除，不算在垃圾项目当中，不
     * 需要则设置为-1
     */
    mintAmountPerTransaction: 3
}