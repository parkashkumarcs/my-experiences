/**
 * Let's begin our journey to learn the ES6 concepts. Before we start our journey first we must know 
 * about the previous concepts of javascript and versions? And what is the new version released of 
 * javascript.
 * Later we learn the latest version of JS after ES6 concepts fully covered.
 * 
 * What is history of Javascript?
 * The first time introduce the javascript in 1995 by Brendan Eich at Netscape Communication. 
 * The first original name of javascript was 'Mocha', later it renamed as LiveScript. And now finall
 * name is 'JavaScript' because for marketing purposes, to ride on the popularity Java.
 * What is major purpose of JavaScript?
 * It is used to add the interactivity to web pages in Netscape Navigator browser.
 * The first version was created in 1995 within 10 days.
 * Microsoft company created own JScript technology which support JavaScript-like functionality
 * in internet explore browser.
 * To avoid the contradiction, the ECMA International introduced the new version as ES standarlized as 
 * ECMAScript in 1997. Later they released more versions in each year.
 * 
 * Versions from the initial periods to the current era:
 * ES1 or ES2: (1997)
 * ES3: More firmely adopted and formed as a Modern JavaScript basis(1999)
 * ES4: (2000-2007). In this duration period they updated minimal features such as JQuery etc.
 * ES5: (2009) More advanced Modern JavaScript. Added the Node.js to server side development.
 * ES6: (2015-present). A massive transformation in JavaScript. This is our main topic we will 
 * start to learn.
 * After this version. They yearly changed the versions such as ES7, ES8, Vue, Angular etc....
 * 
 */

// So let's begin Now...Sit back and relaxed:))))

// 1) Variables
/**
 * Early we learnt variables in programming languanges such as C++, Java, Python. We declare the 
 * variables as 
 * int a;
 * float b;
 * string c;
 * double d;
 * char a;
 * etc...
 * which are very case sensitive, means if you are declaring the int variable and assigning the
 * string or characters it won't works because the data type matter in these programming languages.
 * We call these data type variables as Homogeneous data type....We can create the 
 * hetrogenous variables using the other techniques. But in javascript is totally changed
 *
 * So how this looks like? Let's understand by code:)
 */

// 1) 'let' variable declaration:
    // It is block scope level decalaration unlike var variable.

// create a variable for get element by id to display up coming contents in the custom console:))
const display = document.getElementById('display');

let name = "Parkash"; // String
let age = 25;       // int
let grade = 'A';    // character
let cgpa = 2.43;    // float or double

// console.log(name, age, grade, cgpa)

// display.innerText = name;
// display.innerText = age;
// display.innerText = grade;
// display.innerText = cgpa;

