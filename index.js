// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function(drv){
    return drv.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(driver, revenue) {
  return driversWithRevenueOver.map(function(drv){
    return drv.name
  })
}

function exactMatch(driver) {

}

function exactMatchToList(driver){

}
