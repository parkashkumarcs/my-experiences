
var newDate= new Date();

function currentDate(){
    document.getElementsByClassName('data')[0].innerHTML=newDate;
}
function getYear(){
    document.getElementsByClassName('data')[1].innerHTML=newDate.getFullYear();
}
function getMonth(){
    var months=['January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September',
        'Octumber', 'November', 'December']
    document.getElementsByClassName('data')[2].innerHTML=months[newDate.getMonth()];
}
function getDate(){
    document.getElementsByClassName('data')[3].innerHTML=newDate.getDate();
}
function getHours(){
    document.getElementsByClassName('data')[4].innerHTML=newDate.getHours();
}
function getMinutes(){
    document.getElementsByClassName('data')[5].innerHTML=newDate.getMinutes();
}
function getSeconds(){
    document.getElementsByClassName('data')[6].innerHTML=newDate.getSeconds();
}
function getMilliSecods(){
    document.getElementsByClassName('data')[7].innerHTML=newDate.getMilliseconds();
}
function getTime(){
    document.getElementsByClassName('data')[8].innerHTML=newDate.getTime();
}
function getDay(){
    var days=['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];
    document.getElementsByClassName('data')[9].innerHTML=days[newDate.getDay()];
}