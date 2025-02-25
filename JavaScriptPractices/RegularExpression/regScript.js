
var dataPrint = document.getElementsByClassName('data')[0];
var dataPrint1 = document.getElementsByClassName('data')[1];
var dataPrint2 = document.getElementsByClassName('data')[2];
var dataPrint3 = document.getElementsByClassName('data')[3];
var dataPrint4 = document.getElementsByClassName('data')[4];
var dataPrint5 = document.getElementsByClassName('data')[5];

var pattern1 = /[0-9]/gm;
var pattern2 = /parkash/gm
var string = 'par12kash45kumar9';
var string1 = 'I am Parkash Kumar and parkash is nick name';
var counter=0;
var strSum;

for(let i = 0; i<string.length;i++){
    let isCheck = pattern1.exec(string); //This exec method return the matched string
    strSum= strSum + isCheck;
    
}
let  myName1 = pattern2.test(string1) //return true or false values
let  myNam2 = pattern2.toString(string1) //Return converted regular expression

dataPrint.innerText = strSum;
dataPrint1.innerText = myName1;
dataPrint2.innerText = myNam2;

// Now let use the customized regular expression from sites

var pattern3 = new RegExp('park','gm');
var pattern4 = new RegExp('parkash','gm');
var pattern5 = new RegExp('[a-z]k[0-9]','ig');
var string2 = "ku23mar12park234a3s4h2";
var another = pattern3.exec(string1);
var another1 = pattern4.test(string1);
var another2 = pattern5.exec(string2);
dataPrint3.innerText = another;
dataPrint4.innerText = another1;
dataPrint5.innerText = another2;

