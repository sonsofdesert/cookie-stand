// 'use strict';
// //create array of open store hours
// var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//
// //first and pike location
// var firstAndPike = {
//   name: 'First and Pike',
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiesSoldPerHour: 6.3,
//   randCustByHour: [],
//   cookiesSoldByHour: [],
//   totalCookies: 0,
//
//   calcRandCustByHour: function() {
//     for(var i = 0; i < storeHours.length; i++) {
//       this.randCustByHour.push(Math.floor((Math.random() * this.maxCustPerHour -
//       this.minCustPerHour + 1)) + this.minCustPerHour);
//       console.log(this.randCustByHour[i]);
//     }
//   },
//   calcCookiesSoldByHour: function() {
//     firstAndPike.calcRandCustByHour();
//     console.log('this is the average cookie number: ' + this.avgCookiesSoldPerHour);
//     for(var j = 0; j < storeHours.length; j++) {
//       var randomNumber = (Math.round(this.avgCookiesSoldPerHour)) * this.randCustByHour[j] + 1;
//       console.log('this is the random for cookies by hour ' + randomNumber);
//       this.cookiesSoldByHour.push(randomNumber);
//       console.log(this.cookiesSoldByHour);
//     }
//   },
//   render: function() {
//     var firstAndPike1 = document.getElementById('first-and-pike');
//     console.log(firstAndPike1);
//     firstAndPike1.textContent = this.name;
//     var firstLocationEle = document.getElementById('firstLocation');
//     firstAndPike.calcCookiesSoldByHour();
//     console.log(firstLocationEle);
//     for(var k = 0; k < storeHours.length; k++) {
//       this.totalCookies += this.cookiesSoldByHour[k];
//       var sales = document.createElement('li');
//       sales.textContent = storeHours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//       firstLocationEle.appendChild(sales);
//     }
//     console.log('this is the sum of the cookies', this.totalCookies);
//     var totalCookiesSold = document.createElement('li');
//     totalCookiesSold.textContent = 'Total: ' + this.totalCookies + ' cookies';
//     firstLocationEle.appendChild(totalCookiesSold);
//   }
// };
// firstAndPike.calcCookiesSoldByHour();
// firstAndPike.calcRandCustByHour();
// firstAndPike.render();
//
// //second location
// var seaTacAirport = {
//   name: 'SeaTac Airport',
//   minCustPerHour: 3,
//   maxCustPerHour: 24,
//   avgCookiesSoldPerHour: 1.2,
//   randCustByHour: [],
//   cookiesSoldByHour: [],
//   totalCookies: 0,
//
//   calcRandCustByHour: function() {
//     for(var i = 0; i < storeHours.length; i++) {
//       this.randCustByHour.push(Math.floor((Math.random() * this.maxCustPerHour -
//       this.minCustPerHour + 1)) + this.minCustPerHour);
//       console.log(this.randCustByHour[i]);
//     }
//   },
//   calcCookiesSoldByHour: function() {
//     seaTacAirport.calcRandCustByHour();
//     console.log('this is the average cookie number: ' + this.avgCookiesSoldPerHour);
//     for(var j = 0; j < storeHours.length; j++) {
//       var randomNumber = (Math.round(this.avgCookiesSoldPerHour)) * this.randCustByHour[j] + 1;
//       console.log('this is the random for cookies by hour ' + randomNumber);
//       this.cookiesSoldByHour.push(randomNumber);
//       console.log(this.cookiesSoldByHour);
//     }
//   },
//   render: function() {
//     var seaTacAirport1 = document.getElementById('seatac-airport');
//     seaTacAirport1.textContent = this.name;
//     var secondLocationEle = document.getElementById('secondLocation');
//     seaTacAirport.calcCookiesSoldByHour();
//     console.log(secondLocationEle);
//     for(var k = 0; k < storeHours.length; k++) {
//       this.totalCookies += this.cookiesSoldByHour[k];
//       var sales = document.createElement('li');
//       sales.textContent = storeHours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//       secondLocationEle.appendChild(sales);
//     }
//     console.log('this is the sum of the cookies', this.totalCookies);
//     var totalCookiesSold = document.createElement('li');
//     totalCookiesSold.textContent = 'Total: ' + this.totalCookies + ' cookies';
//     secondLocationEle.appendChild(totalCookiesSold);
//   },
// };
// seaTacAirport.calcCookiesSoldByHour();
// seaTacAirport.calcRandCustByHour();
// seaTacAirport.render();
//
// // //third location
// var seattleCenter = {
//   name: 'Seattle Center',
//   minCustPerHour: 11,
//   maxCustPerHour: 38,
//   avgCookiesSoldPerHour: 3.7,
//   randCustByHour: [],
//   cookiesSoldByHour: [],
//   totalCookies: 0,
//
//   calcRandCustByHour: function() {
//     for(var i = 0; i < storeHours.length; i++) {
//       this.randCustByHour.push(Math.floor((Math.random() * this.maxCustPerHour -
//       this.minCustPerHour + 1)) + this.minCustPerHour);
//       console.log(this.randCustByHour[i]);
//     }
//   },
//   calcCookiesSoldByHour: function() {
//     seattleCenter.calcRandCustByHour();
//     console.log('this is the average cookie number: ' + this.avgCookiesSoldPerHour);
//     for(var j = 0; j < storeHours.length; j++) {
//       var randomNumber = (Math.round(this.avgCookiesSoldPerHour)) * this.randCustByHour[j] + 1;
//       console.log('this is the random for cookies by hour ' + randomNumber);
//       this.cookiesSoldByHour.push(randomNumber);
//       console.log(this.cookiesSoldByHour);
//     }
//   },
//   render: function() {
//     var seattleCenter1 = document.getElementById('seattle-center');
//     seattleCenter1.textContent = this.name;
//     console.log('this is seattle centers number ' + seattleCenter1);
//     var thirdLocationEle = document.getElementById('thirdLocation');
//     seattleCenter.calcCookiesSoldByHour();
//     console.log(thirdLocationEle);
//     for(var k = 0; k < storeHours.length; k++) {
//       this.totalCookies += this.cookiesSoldByHour[k];
//       var sales = document.createElement('li');
//       sales.textContent = storeHours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//       thirdLocationEle.appendChild(sales);
//     }
//     console.log('this is the sum of the cookies', this.totalCookies);
//     var totalCookiesSold = document.createElement('li');
//     totalCookiesSold.textContent = 'Total: ' + this.totalCookies + ' cookies';
//     thirdLocationEle.appendChild(totalCookiesSold);
//   }
// };
// seattleCenter.calcCookiesSoldByHour();
// seattleCenter.calcRandCustByHour();
// seattleCenter.render();
//
// //fourth location
// var capitolHill = {
//   name: 'Capitol Hill',
//   minCustPerHour: 20,
//   maxCustPerHour: 38,
//   avgCookiesSoldPerHour: 2.3,
//   randCustByHour: [],
//   cookiesSoldByHour: [],
//   totalCookies: 0,
//
//   calcRandCustByHour: function() {
//     for(var i = 0; i < storeHours.length; i++) {
//       this.randCustByHour.push(Math.floor((Math.random() * this.maxCustPerHour -
//       this.minCustPerHour + 1)) + this.minCustPerHour);
//       console.log(this.randCustByHour[i]);
//     }
//   },
//   calcCookiesSoldByHour: function() {
//     capitolHill.calcRandCustByHour();
//     console.log('this is the average cookie number: ' + this.avgCookiesSoldPerHour);
//     for(var j = 0; j < storeHours.length; j++) {
//       var randomNumber = (Math.round(this.avgCookiesSoldPerHour)) * this.randCustByHour[j] + 1;
//       console.log('this is the random for cookies by hour ' + randomNumber);
//       this.cookiesSoldByHour.push(randomNumber);
//       console.log(this.cookiesSoldByHour);
//     }
//   },
//
//   render: function() {
//     var capitolHill1 = document.getElementById('capitol-hill');
//     capitolHill1.textContent = this.name;
//     var fourthLocationEle = document.getElementById('fourthLocation');
//     capitolHill.calcCookiesSoldByHour();
//     console.log(fourthLocationEle);
//     for(var k = 0; k < storeHours.length; k++) {
//       this.totalCookies += this.cookiesSoldByHour[k];
//       var sales = document.createElement('li');
//       sales.textContent = storeHours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//       fourthLocationEle.appendChild(sales);
//     }
//     console.log('this is the sum of the cookies', this.totalCookies);
//     var totalCookiesSold = document.createElement('li');
//     totalCookiesSold.textContent = 'Total: ' + this.totalCookies + ' cookies';
//     fourthLocationEle.appendChild(totalCookiesSold);
//   }
// };
//
// capitolHill.calcCookiesSoldByHour();
// capitolHill.calcRandCustByHour();
// capitolHill.render();
// //
//
// // //5th location
// var alki = {
//   name: 'Alki',
//   minCustPerHour: 2,
//   maxCustPerHour: 16,
//   avgCookiesSoldPerHour: 4.7,
//   randCustByHour: [],
//   cookiesSoldByHour: [],
//   totalCookies: 0,
//
//   calcRandCustByHour: function() {
//     for(var i = 0; i < storeHours.length; i++) {
//       this.randCustByHour.push(Math.floor((Math.random() * this.maxCustPerHour -
//       this.minCustPerHour + 1)) + this.minCustPerHour);
//       console.log(this.randCustByHour[i]);
//     }
//   },
//   calcCookiesSoldByHour: function() {
//     alki.calcRandCustByHour();
//     console.log('this is the average cookie number: ' + this.avgCookiesSoldPerHour);
//     for(var j = 0; j < storeHours.length; j++) {
//       var randomNumber = (Math.round(this.avgCookiesSoldPerHour)) * this.randCustByHour[j] + 1;
//       console.log('this is the random for cookies by hour ' + randomNumber);
//       this.cookiesSoldByHour.push(randomNumber);
//       console.log(this.cookiesSoldByHour);
//     }
//   },
//
//   render: function() {
//     var alki1 = document.getElementById('alki-one');
//     alki1.textContent = this.name;
//     var fifthLocationEle = document.getElementById('fifthLocation');
//     alki.calcCookiesSoldByHour();
//     console.log(fifthLocationEle);
//     for(var k = 0; k < storeHours.length; k++) {
//       this.totalCookies += this.cookiesSoldByHour[k];
//       var sales = document.createElement('li');
//       sales.textContent = storeHours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//       fifthLocationEle.appendChild(sales);
//     }
//     console.log('this is the sum of the cookies', this.totalCookies);
//     var totalCookiesSold = document.createElement('li');
//     totalCookiesSold.textContent = 'Total: ' + this.totalCookies + ' cookies';
//     fifthLocationEle.appendChild(totalCookiesSold);
//   }
// };
//
// alki.calcCookiesSoldByHour();
// alki.calcRandCustByHour();
// alki.render();
