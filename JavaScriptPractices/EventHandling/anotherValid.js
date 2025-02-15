var empty;
var check = false;
 function valid(elem){
    
    if (isNaN(elem.value)){
        document.getElementById('values').innerText = "Enter Numbers only!"
        document.getElementById('values').style.color = 'red';
        check = false;
    }
    else{
        if(elem.value.length > 11){
            document.getElementById('values').innerText = "Phone Number must be 11 digits!"
            document.getElementById('values').style.color = 'red';
            check = false;
        }
        else if(elem.value.length == 11){
            empty = elem.value.length;
            var lengthNumber = elem.value;
            var firstDigit = lengthNumber[0];
            var secondDigit = lengthNumber[1];
            var thirdDigit = lengthNumber[2];
            // alert(lengthNumber)
            if(firstDigit == 0 && secondDigit == 3 && 
                (thirdDigit == 4 || thirdDigit == 3 || thirdDigit == 0 || thirdDigit == 1 || thirdDigit == 7) ){
                document.getElementById('values').innerText = "Valid Number!"
                document.getElementById('values').style.color = 'green';
                check = true;
            }
        }else{
            if(empty == 0){
                document.getElementById('values').innerText = "Field Empty!"
                document.getElementById('values').style.color = 'red';
                check = false;
            }
            else{
                document.getElementById('values').innerText = "Invalid Number!"
                document.getElementById('values').style.color = 'red';
                check = false;
            }
        }
        
    }
 }
 function message(){
    if(check == true){
        document.getElementById('submitMessage').style.color = 'green';
        document.getElementById('submitMessage').innerText = "Successfully Submitted!";
    }
    else{
        document.getElementById('submitMessage').style.color = 'red';
        document.getElementById('submitMessage').innerText = "Failed to Submitted!";
    }
    if(empty == 0){
        document.getElementById('values').innerText = "Field Empty!"
        document.getElementById('values').style.color = 'red';
    }
 }
function submitValid(){
    message();
}