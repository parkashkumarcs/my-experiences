
var dataPrint = document.getElementsByClassName('data')[0];
var dataPrint1 = document.getElementsByClassName('data')[1];
var dataPrint2 = document.getElementsByClassName('data')[2];
var dataPrint3 = document.getElementsByClassName('data')[3];
var dataPrint4 = document.getElementsByClassName('data')[4];

var pattern1 = /[0-9]/gm;
var pattern2 = /parkash/gm
var string = 'par12kash45kumar9';
var string1 = 'I am Parkash Kumar and parkash is nick name';
var counter=0;
var strSum;

for(let i = 0; i<string.length;i++){
    let isCheck = pattern1.exec(string);
    strSum= strSum + isCheck;
    
}
let myName = pattern2.exec(string1)

dataPrint.innerText = strSum;
dataPrint1.innerText = myName;
