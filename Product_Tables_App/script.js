var numb;
var startN;
var tableN;
var endN;

function validation(num){
    // numb = 0;
    // startN = 0;
    // tableN = 0;
    // endN = 0;
    numb = num.value;
    if(isNaN(numb) || numb[0]=='-' || numb[0]=='+'){
        numb=0;
        document.getElementById('check').style.color = 'red';
        document.getElementById('check').innerHTML = "Invalid Input!";
    }else{
        document.getElementById('check').innerHTML = "";
    }

}
function startNum(st){
    // numb = 0;
    // startN = 0;
    // tableN = 0;
    // endN = 0;
    startN = st.value;
    if(isNaN(startN) || startN[0]=='-' || startN[0]=='+'){
        startN=0;
        document.getElementById('check').style.color = 'red';
        document.getElementById('check').innerHTML = "Invalid Input!";
    }else{
        document.getElementById('check').innerHTML = "";
    }
}
function tableNum(tb){
    // numb = 0;
    // startN = 0;
    // tableN = 0;
    // endN = 0;
    tableN = tb.value;
    if(isNaN(tableN) || tableN[0]=='-' || tableN[0]=='+'){
        tableN=0;
        document.getElementById('check').style.color = 'red';
        document.getElementById('check').innerHTML = "Invalid Input!";
    }else{
        document.getElementById('check').innerHTML = "";
    }
}
function endNum(en){
    // numb = 0;
    // startN = 0;
    // tableN = 0;
    // endN = 0;
    endN = en.value;
    if(isNaN(endN) || endN[0]=='-' || endN[0]=='+'){
        endN=0;
        document.getElementById('check').style.color = 'red';
        document.getElementById('check').innerHTML = "Invalid Input!";
    }else{
        document.getElementById('check').innerHTML = "";
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
    }
}
function customProcess(){
    arr = '';
    let diff = (parseInt(endN)-parseInt(startN));
    // let count = diff-10;
    // let additional=0;
    // alert(diff)
    document.getElementById('tableNumber').innerHTML = "Table Number " + tableN;
    // if(startN > 0 && tableN > 0 && endN > 0){
    let parentDiv = document.getElementById('dis');
    for(var j = 0; j<=diff;j++){
        let newDiv = document.createElement("div");
        arr = parseInt(j+parseInt(startN)) + " x " + tableN + " = " + ((parseInt(j+parseInt(startN)))*parseInt(tableN));
        newDiv.innerText = arr;
        parentDiv.appendChild(newDiv);
        // childDivs[0].innerHTML = "Table Number "+tableN;
        // arr=parseInt(j+parseInt(startN)) + " x " + tableN + " = " + ((parseInt(j+parseInt(startN)))*parseInt(tableN));
        // childDivs[j+1].innerText = arr;
    }
    // }
    // else{
    //     let parentDiv = document.getElementById('dis');
    //     let childDivs = parentDiv.children;
    //     childDivs[0].innerHTML = "Table Number "+tableN;
    //     if(startN > 0 && tableN > 0 && endN > 0){
    //         for(var j = 0; j<=diff;j++){
    //             arr=parseInt(j+parseInt(startN)) + " x " + tableN + " = " + ((parseInt(j+parseInt(startN)))*parseInt(tableN));
    //             childDivs[j+1].innerText = arr;
    //         }
    //     }
    // }
    // alert(tableN)
    
    
}

function clearContents(){
    let parentDiv = document.getElementById("dis");
    let childDivs = parentDiv.querySelectorAll("div");

    childDivs.forEach(div => {
        div.innerText = ""; 
    });

}