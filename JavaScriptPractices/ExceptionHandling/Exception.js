
function testMe(){
    try{
        var msg = "parkash";
        // msg = 23;
        // when msg has integer value it wil through an exception as msg.toUpperCase is not function.
        var uperCase =  msg.toUpperCase();
        document.getElementById('printData').innerHTML = uperCase;
        // alertw("I am not Exception");
        // var x = 3;
        // var y = a;
        // x = parseInt(x);
        // y = parseInt(y);
        // alert(x + y);
        // x = Math.pow(x,2);
        // y = Math.pow(y,2);
        // alert(y);
        // var formula;
        // formula = Math.sqrt(parseInt(x + y));
        // document.getElementById('printData').innerHTML = formula;
        // document.getElementById('printData').innerHTML = 24 / 0; //different as we studied in OOp concept
    }
    catch(err){
        alert('it is')
        document.getElementById('printError').innerHTML = err;
    }
    
}
var stName = '?';
var callMe;
var noException = true;
function getName(val){
    stName = val.value;
    if(isNaN(stName)){
        document.getElementById('valid').innerHTML = 'Valid Name';
        document.getElementById('valid').style.color = 'green';
    }
    else{
        if(stName.length){
            try{
                throw "Exception don't include number in index 0!"
            }
            catch(userError){
                stName = userError;
                // document.getElementById('valid').innerHTML = userError;
                // document.getElementById('valid').style.color = 'red';
                noException = false;
            }
            finally{
                alert('Warning! your input is not valid');
            }
        }
        else{
            document.getElementById('valid').innerHTML = '';
        }
    }
   callMe = function(){
        val.value = '';
    }
}
function studentData(){
    if(noException){
        document.getElementById('valid').innerHTML = '';
        document.getElementById('studentName').innerHTML ="You name is " + stName;
        document.getElementById('studentName').style.color = 'green';

    }else{
        document.getElementById('studentName').innerHTML = stName;
        document.getElementById('studentName').style.color = 'red';
    }
}
 
function callClear(){
    callMe();
    stName = '?';
    document.getElementById('studentName').innerHTML ='';
}