'use strict';
//create array of open store hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//first and pike location
var firstAndPike = {
  //creating my key value pairs inside of my object they are called properties
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hours
  // calcRandCustByHour: function() {
  //   for(var i = 0; i < hours.length; i++) {
  //   this.randCustByHour.push(math.floor(math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
  //   console.log(this.randCustByHour[i]);
  //}
};
//second location
var seaTacAirport = {
  name: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesSoldPerHour: 1.2,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
};

//third location
var seattleCenter = {
  name: 'Seattle Center'
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesSoldPerHour: 3.7,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
};

//fourth location
var capitolHill = {
  name: 'Capitol Hill'
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesSoldPerHour: 2.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
};

//5th location
var alki = {
  name: 'Alki'
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesSoldPerHour: 4.7,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
}
