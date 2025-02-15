
var store=0;
var count=0;
var check=false;
var firstTime=false;
var valided=false;
var cls = false;
function valid(data){
    store = data.value;
    // document.write(parseInt(store));
    // var Inttype=(store);
    // var concat;
    if(store[0]==0 && store[1]==3 && (store[2]==0 || store[2]==4 || store[2]==3 || store[2]==1)){
        check=true;
    }
    count=0;
    for(var i=0; i<11;i++){
        for(var j=0;j<10;j++){
            if(store[i]==j){
                // concat =concat +store[i];
                count++;
            }
        }
    }
    console.log(count);
    console.log(check);
    console.log(firstTime);

    if(store.length>11 && firstTime==true){
        check=false;
        valided=false;

        document.getElementById('values').style.color = 'red';
        document.getElementById('values').innerText = "Phone number must be 11 digits!"
    }
    else if(store.length<=0 && firstTime==true){
        check=false;
        valided=false;
        document.getElementById('values').style.color = 'red';
        document.getElementById('values').innerText = "Field Required to fill!"
    }
    else if(count==11 && check==true){
        check=false;
        firstTime=false;
        valided=true;
        document.getElementById('values').style.color = 'green';
        document.getElementById('values').innerText = "valid number!"
    }
    else if(firstTime==true ){
        check=false;
        valided=false;
        document.getElementById('values').style.color = 'red';
        document.getElementById('values').innerText = "Not valid number!"
    } 
//     document.getElementById('values').innerText = concat;
//    if(typeof(concat)==typeof(parseInt(21)) count==11){
//         document.getElementById('values').innerText = typeof(store);
        
        
//     }
//     document.getElementById('values').style.color = 'red';
//     document.getElementById('values').innerText = "Phone number must be 11 digits!"
}

function submitValid(){
    if(count > 11){
        firstTime=true;
        document.getElementById('values').style.color = 'red';
        document.getElementById('values').innerText = "Phone number must be 11 digits!"
    }
    else if(store.length<=0){
        firstTime=true;
        document.getElementById('values').style.color = 'red';
        document.getElementById('values').innerText = "Field Required to fill!"
    }
    else{
        firstTime=true;
        document.getElementById('values').style.color = 'red';
        document.getElementById('values').innerText = "Not valid number!"
    } 
    if(valided==true){
        
        document.getElementById('submitMessage').style.color = 'green';
        document.getElementById('submitMessage').innerText = "Submitted Successfully!";
        document.getElementById('ok').value='';        
        check=false;
        firstTime=false;
    }
    store=0;
    count=0;
}
