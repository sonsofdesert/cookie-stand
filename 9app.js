'use strict';
//create array of open store hours
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookiesPerHour = [];

var dailyLocationTotal = [];

var grandTotal = 0;

function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  this.randCustByHour = [];
  this.cookiesSoldByHour = [];
  this.totalCookies = 0;
  // everyLocation.push(this);

  this.calcRandCustByHour = function() {
    for(var i = 0; i < storeHours.length; i++) {
      this.randCustByHour.push(Math.floor((Math.random() * this.maxCustPerHour -
      this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  };
  this.calcCookiesSoldByHour = function() {
    this.calcRandCustByHour();
    for(var j = 0; j < storeHours.length; j++) {
      var randomNumber = (Math.round(this.avgCookieSoldPerHour)) * this.randCustByHour[j] + 1;
      this.cookiesSoldByHour.push(randomNumber);
      this.totalCookies = randomNumber + this.totalCookies;
      var locationTotal = randomNumber + this.totalCookies;
      this.totalCookies = locationTotal;
    }
    grandTotal = grandTotal + this.totalCookies;
  };
  this.renderHeader = function() {
    var header = document.getElementById('thead');
    var header_tr = document.createElement('tr');
    header.appendChild(header_tr);
    header.appendChild(document.createElement('th'));
    for(var i = 0; i < storeHours.length; i++) {
      var hour = storeHours[i];
      var th = document.createElement('th');
      var textNode = document.createTextNode(hour);
      header.appendChild(th);
      th.appendChild(textNode);
    }
    var header_total = document.createElement('th');
    header_total.appendChild(document.createTextNode('Daily Location Total'));
    header.appendChild(header_total);
  };
  this.renderTable = function() {
    var tbody = document.getElementById('tbody');
    var body_tr = document.createElement('tr');
    var theCell = document.createElement('td');
    var textEl = document.createTextNode(this.name);
    theCell.appendChild(textEl);
    body_tr.appendChild(theCell);
    for(var i = 0; i < this.cookiesSoldByHour.length; i++) {
      var cookiesSold = this.cookiesSoldByHour[i];
      var theCell2 = document.createElement('td');
      var textEl2 = document.createTextNode(cookiesSold);
      theCell2.appendChild(textEl2);
      body_tr.appendChild(theCell2);
    }
    var rowTotal = document.createElement('td');
    rowTotal.appendChild(document.createTextNode(this.totalCookies));
    body_tr.appendChild(rowTotal);
    tbody.appendChild(body_tr);
  };
  cookiesPerHour.push(this.cookiesSoldByHour);
}

var alkibeach = new MakeLocation('First and Pike', 2, 4, 3);
alkibeach.renderHeader();
alkibeach.calcCookiesSoldByHour();
alkibeach.renderTable();

var beans = new MakeLocation('SeaTac Airport', 44, 54, 13);
beans.calcCookiesSoldByHour();
beans.renderTable();

var beans1 = new MakeLocation('Seattle Center', 44, 54, 13);
beans1.calcCookiesSoldByHour();
beans1.renderTable();

var beans2 = new MakeLocation('Capitol Hill', 44, 54, 13);
beans2.calcCookiesSoldByHour();
beans2.renderTable();

var beans3 = new MakeLocation('Alki Beach', 44, 54, 13);
beans3.calcCookiesSoldByHour();
beans3.renderTable();

var tableFoot = function() {
  var trEl = document.createElement('tr');
  trEl.setAttribute('id','totalrow');
  var tfoot = document.getElementById('tfoot');
  var totalsTd = document.createElement('td');
  totalsTd.textContent = 'Totals';

  trEl.appendChild(totalsTd);

  for(var i = 0; i < storeHours.length; i++) {
    var tdEl = document.createElement('td');
    var total = 0;
    for(var j = 0; j < cookiesPerHour.length; j++) {
      total = total + cookiesPerHour[j][i];
    }
    tdEl.textContent = total;
    trEl.appendChild(tdEl);
  }
  var grandTotalCell = document.createElement('td');
  grandTotalCell.appendChild(document.createTextNode(grandTotal));
  trEl.appendChild(grandTotalCell);
  tfoot.appendChild(trEl);
};
tableFoot();

document.getElementById('createNewStore').addEventListener('click', function(event) {
  var elem = document.getElementById('totalrow');//part one of deleting the total row
  elem.parentElement.removeChild(elem);//part Two of deleting the total row
  var newStoreName = document.getElementById('storename').value;
  var newStoreMin = document.getElementById('mincust').value;
  var newStoreMax = document.getElementById('maxcust').value;
  var newStoreAvg = document.getElementById('avgcook').value;
  event.preventDefault(); //gotta have it. prevents page reload

  var beansNew = new MakeLocation(newStoreName, newStoreMin, newStoreMax, newStoreAvg);
  beansNew.calcCookiesSoldByHour();
  beansNew.renderTable();
  tableFoot();//recreates the total row after the new location is added
});
