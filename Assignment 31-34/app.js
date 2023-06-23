// Question 1

// var date = new Date();
// document.write(date);


// Question 2

// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date();
// var now = date.getMonth();
// document.write(month[now]);


// Question 3

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// document.write(days[theDay]);


// Question 4

// var date = new Date ();
// var getDay = date.getDay();
// if (getDay === 0 || date === 6) {
//     alert("It's Fun Day")
// }
// else{
//     alert("It's not a Fun Day");
// };


// Question 5

// var currentDate = new Date();
// var currentDay = currentDate.getDate();
// if (currentDay <= 15) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// };


// Question 6

// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since Jan 1, 1970: " + diffMin);


// Question 7

// var date = new Date();
// var hours = date.getHours();
// if (hours < 12) {
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// };


// Question 8

// var laterDate = new Date(2020, 11, 31);
// document.write(laterDate);


// Question 9

// var pastDate = new Date(2015, 5, 18);
// var currentDate = new Date();
// var time = currentDate.getTime() - pastDate.getTime();
// var daysPassed = Math.floor(time / (1000 * 3600 * 24));
// alert(daysPassed + " days have passed since 1st Ramadan 2015");


// Question 10

// var referenceDate = new Date();
// referenceDate.setFullYear(2015, 0, 1);
// var timeDifference = (referenceDate.getTime() - new Date("January 1, 1970").getTime()) / 1000;
// document.write("On reference date: " + referenceDate + "<br>" + timeDifference + " seconds have passed since beginning 2015");


// Question 11

// var currentDate = new Date();
// document.write("Current Date: " + currentDate);
// currentDate.setHours(currentDate.getHours() - 1);
// document.write("<br>" + "1 hour ago, it was " + currentDate);


// Question 12

// var currentDate = new Date();
// document.write("Current Date: " + currentDate);
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// document.write("<br>" + "100 years back, it was " + currentDate);


// Question 13

// var age = prompt("Enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// document.write("Your birth year is: " + birthYear);


// Question 14

// var userName = "ABC Customer";
// var month = "February";
// var units = 410;
// var chargeUnit = 16;
// var latePayment = 350;

// var netPay = units * chargeUnit;
// var grossPay = netPay + latePayment;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name: " + "<b>" + userName + "</b><br>");
// document.write("Month: " + "<b>" + month + "</b><br>");
// document.write("Number of Units: " + "<b>" +  units + "</b><br>");
// document.write("Charges per Unit: " + "<b>" +  chargeUnit.toFixed(2) + "</b><br><br>");
// document.write("Net Amount Payable (within Due Date): " + "<b>" +  netPay.toFixed(2) + "</b><br>");
// document.write("Late Payment Surcharge: " + "<b>" +  latePayment.toFixed(2) + "</b><br>");
// document.write("Gross Amount Payable (after Due Date): " + "<b>" +  grossPay.toFixed(2) + "</b>");