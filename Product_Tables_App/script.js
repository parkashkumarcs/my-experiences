var numb;
var startN;
var tableN;
var endN;
var cls;
var cls1;
var cls2;
var cls3;
var tableData = '';
function validation(num){
    numb = num.value;
    if(isNaN(numb) || numb[0]=='-' || numb[0]=='+'){
        numb=0;
        document.getElementsByClassName('check')[0].style.color = 'red';
        document.getElementsByClassName('check')[0].innerHTML = "Invalid Input!";
    }else{
        document.getElementsByClassName('check')[0].innerHTML = "";
        cls = function (){
            num.value = '';
        }
        cls1();
        cls2();
        cls3();
    }
    
}
function startNum(st){
    startN = st.value;
    if(isNaN(startN) || startN[0]=='-' || startN[0]=='+'){
        startN=0;
        document.getElementsByClassName('check')[1].style.color = 'red';
        document.getElementsByClassName('check')[1].innerHTML = "Invalid Input!";
    }else{
        document.getElementsByClassName('check')[1].innerHTML = "";
        cls1 = function (){
            st.value = '';
        }
        cls();
    }
}
function tableNum(tb){
    tableN = tb.value;
    if(isNaN(tableN) || tableN[0]=='-' || tableN[0]=='+'){
        tableN=0;
        document.getElementsByClassName('check')[2].style.color = 'red';
        document.getElementsByClassName('check')[2].innerHTML = "Invalid Input!";
    }else{
        document.getElementsByClassName('check')[2].innerHTML = "";
        cls2 = function (){
            tb.value = '';
        }
        cls();
    }
}
function endNum(en){
    endN = en.value;
    if(isNaN(endN) || endN[0]=='-' || endN[0]=='+'){
        endN=0;
        document.getElementsByClassName('check')[3].style.color = 'red';
        document.getElementsByClassName('check')[3].innerHTML = "Invalid Input!";
    }else{
        document.getElementsByClassName('check')[3].innerHTML = "";
        cls3 = function (){
            en.value = '';
        }
        cls();
    }
}
var arr;
function process(){
    arr = '';
    if(numb>0){
        document.getElementById('tableNumber').innerHTML = "Table Number " + numb;
        let parentDiv = document.getElementById('dis');
        for(var j = 0; j<10;j++){
            let newDiv = document.createElement("div");
            arr=parseInt(j+1) + " x " + numb + " = " + (parseInt(j+1)*parseInt(numb));
            newDiv.innerText = arr;
            parentDiv.appendChild(newDiv);
        }
        tableData =parentDiv.innerText;
    }
}
function customProcess(){
    arr = '';
    let diff = (parseInt(endN)-parseInt(startN));
    document.getElementById('tableNumber').innerHTML = "Table Number " + tableN;
    let parentDiv = document.getElementById('dis');
    for(var j = 0; j<=diff;j++){
        let newDiv = document.createElement("div");
        arr = parseInt(j+parseInt(startN)) + " x " + tableN + " = " + ((parseInt(j+parseInt(startN)))*parseInt(tableN));
        newDiv.innerText = arr;
        parentDiv.appendChild(newDiv);
    }
    tableData = parentDiv.innerText;
}

function clearContents(){
    let parentDiv = document.getElementById("dis");
    let childDivs = parentDiv.querySelectorAll("div");
    tableData = childDivs.forEach(div => {
        div.innerText = ""; 
    });
    numb = '';
    startN = '';
    tableN = '';
    endN = '';
    cls();
    cls1();
    cls2();
    cls3();
    document.getElementById('tableNumber').innerHTML = "Table Number?";
    location.origin()
}
function allCls(){
    cls1();
    cls2();
    cls3();
}
var body = document.getElementById('body').innerHTML;
function printTable(){
    document.getElementById('body').innerText = tableData;
    window.print();
    document.getElementById('body').innerHTML = body;

}