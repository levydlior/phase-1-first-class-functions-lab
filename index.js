// Code your solution in this file!
function returnFirstTwoDrivers(array){
    const newArray = [...array].slice(0,2)
    
    return newArray
}

function returnLastTwoDrivers(array) {
    let newArray = [...array]
    const arrayLengthMinusTwo = newArray.length-2
    const arrayLength = newArray.length
     return newArray.slice(arrayLengthMinusTwo, arrayLength)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x) {
    function returnedNumber(x) {
      return Math.abs(x * x)
    }
    return returnedNumber
}

const something = function (x) {
    return createFareMultiplier(x) 
}
function fareDoubler(something){
    return something * 2
}

const anotherVar = function (x) {
    return createFareMultiplier(x)
}
function fareTripler(anotherVar){
    return anotherVar * 3
}
   

function selectDifferentDrivers(array, aFunc){
    if (aFunc === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(array)
    }else{
        return returnLastTwoDrivers(array)
    }
}