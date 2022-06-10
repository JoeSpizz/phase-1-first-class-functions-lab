// Code your solution in this file!
const returnFirstTwoDrivers = function (driversArray) {
   let drivers = driversArray.slice(0,2)
   return drivers
}

const returnLastTwoDrivers = function (driverArray) {
    let drivers = driverArray.slice(driverArray.length-2)
    return drivers
 }

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 function createFareMultiplier(fare){
     return function(fare){
         return fare * fare
     }
 }

 const fareMultiBase = createFareMultiplier(fare)
 
 function fareDoubler (fareMultiBase) {
     return fareMultiBase * 2
 }

 function fareTripler (fareMultiBase) {
     return fareMultiBase * 3
 }

 function selectDifferentDrivers (driverArray, cb){
     return cb(driverArray)
 }