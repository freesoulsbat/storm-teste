function itsProfit (arrayArgs) {
    let lowestPriceAndDay = [arrayArgs[0],0]
    let biggestPriceAndDay = [arrayArgs[0],0]
    for(let i = 0; i < arrayArgs.length; i++){
        if(lowestPriceAndDay[0] > arrayArgs[i]){
            lowestPriceAndDay[0] = arrayArgs[i]
            lowestPriceAndDay[1] = i
        }
        if(biggestPriceAndDay[0] <= arrayArgs[i]){
            biggestPriceAndDay[0] = arrayArgs[i]
            biggestPriceAndDay[1] = i
        }
        if(lowestPriceAndDay[1] < biggestPriceAndDay[1]){
            return biggestPriceAndDay[0] - lowestPriceAndDay[0]
        }
    }
    return 0
}
console.log(itsProfit([1,0,5,11]))