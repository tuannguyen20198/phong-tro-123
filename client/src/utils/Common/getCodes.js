import { getNumbersArea,getNumbersPrice } from "./getNumbers"

export const getCodePrice = (totals) => {
  let arr = []
  return totals?.map(item => {
    let arrMaxMin =getNumbersPrice(item.value)
    if (arrMaxMin.length === 1) arr.push(arrMaxMin[0])
    let sortedArr = arr.sort()

    return totals?.map(item=>({
      ...item,
      min: sortedArr.indexOf(arrMaxMin[0]) === 0 ? 0 : arrMaxMin[0],
      max: sortedArr.indexOf(arrMaxMin[0]) === 0 ? arrMaxMin[0] : sortedArr.indexOf(arrMaxMin[0]) === 1 ? 999999 : arrMaxMin[1]
    }))
  })
}
export const getCodeArea = (totals) => {
  let arr = []
  return totals?.map(item => {
    let arrMaxMin =getNumbersArea(item.value)
    if (arrMaxMin.length === 1) arr.push(arrMaxMin[0])
    let sortedArr = arr.sort()

    return totals?.map(item=>({
      ...item,
      min: sortedArr.indexOf(arrMaxMin[0]) === 0 ? 0 : arrMaxMin[0],
      max: sortedArr.indexOf(arrMaxMin[0]) === 0 ? arrMaxMin[0] : sortedArr.indexOf(arrMaxMin[0]) === 1 ? 999999 : arrMaxMin[1]
    }))
    
  })
}

