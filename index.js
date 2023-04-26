const drivers= ['Antonia','Nuru','Amari','Mo']
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier (value){
    return function(fare){
        return fare*value
    }
}
   
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
   return returnFirstTwoDrivers(drivers)
}