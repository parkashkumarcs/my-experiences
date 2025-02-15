
var number=0;


function increament(){
    if(number>0){
        document.getElementById('countNum').style.color = 'green';
    }
    if(number==0){
        document.getElementById('countNum').style.color = 'gray';
    }
    document.getElementById('countNum').innerHTML= number;
    number = number+1;
}
function decreament(){
    if(number<0){
        document.getElementById('countNum').style.color = 'red';
    }
    if(number==0){
        document.getElementById('countNum').style.color = 'gray';
    }
    document.getElementById('countNum').innerHTML= number;
    number = number - 1;
}
function resetButton(){
    number=0;
    if(number==0){
        document.getElementById('countNum').style.color = 'gray';
    }
    document.getElementById('countNum').innerHTML=number;
}

document.getElementById('btn1').addEventListener('click',increament);
document.getElementById('btn2').addEventListener('click',decreament);


/*
function incButton(){
    if(number>0){
        document.getElementById('countNum').style.color = 'green';
    }
    if(number==0){
        document.getElementById('countNum').style.color = 'gray';
    }
    document.getElementById('btn2').addEventListener("click",increament()) = number;

}

function decButton(){
    if(number<0){
        document.getElementById('countNum').style.color = 'red';
    }
    if(number==0){
        document.getElementById('countNum').style.color = 'gray';
    }
    document.getElementById('btn1').addEventListener("click",decreament()) = number;
}

*/