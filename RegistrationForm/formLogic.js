
var getPassword1 = document.getElementById('password1');
var getPassword2 = document.getElementById('password2');
var fullName = '';
var userName = '';
var pass1 = '';
var length4 = '';
// alert(length3)
// alert(length3.length)
function togglePassowd(){
    // alert('Working')
    let extractPaaword1 = getPassword1.getAttribute('type');
    let extractPaaword2 = getPassword2.getAttribute('type');
    // alert(extractPaaword1)
    // alert(extractPaaword2)
    // alert(getPassword1.value)
    if(extractPaaword1 === 'password'){
        getPassword1.setAttribute('type', 'text');
        document.getElementById('toggleMessage').innerHTML = 'Hide Password';
    }
    else{
        getPassword1.setAttribute('type', 'password');
        document.getElementById('toggleMessage').innerHTML = 'Show Password';
    }

    if(extractPaaword2 === 'password'){
        getPassword2.setAttribute('type', 'text');
        document.getElementById('toggleMessage').innerHTML = 'Hide Password';
    }
    else{
        getPassword2.setAttribute('type', 'password');
        document.getElementById('toggleMessage').innerHTML = 'Show Password';
    }

}
var flag =0;
let pass2Data = getPassword2.value;
length4 = pass2Data.length;
// alert(length4)
var notMatch = document.getElementById('error');
function matchPassword(currentValue){

    let isSpace = pattrn.test(currentValue.value);
    let string = currentValue.value;
    let string2 = getPassword1.value;
    length4 = string.length;
    if(string.length > 0 && string2.length > 0){
        if(getPassword1.value === string){
            notMatch.innerHTML = 'passowrd matched';
            notMatch.style.color = 'green';
            flag = 1;
        }
        else if(isSpace){
            notMatch.innerText = 'Space is not allowed!';
        }
        else{
            notMatch.innerHTML = "passowrd doesn't match!";
            notMatch.style.color = 'red';
            flag = 0;
        }
    }
    else{
        notMatch.innerHTML = '&nbsp';
        flag = 0;
    }
}
function register(){
    let length1 = fullName.length;
    let length2 = userName.length;
    let length3 = pass1.length;
    // alert(length3)
    // alert(length4)
    if(length1 > 0 && length2 > 0 && length3 > 0 && length4 > 0){
        if(flag == 1){
            // alert(flag)
            alert("Successfully Submited!")
            return true;
        }
    }else{
        if(length1 == 0){
            let changeColor = document.getElementById('field1');
            // alert('color')
            let ca = changeColor.getAttribute('class');
            // alert(ca)
            if(ca === 'input'){
                changeColor.setAttribute('class', 'errorField');
                // alert(changeColor.getAttribute('class'))
            }
        }
        if(length2 == 0){
            let changeColor = document.getElementById('field2');
            // alert('color')
            let ca = changeColor.getAttribute('class');
            // alert(ca)
            if(ca === 'input'){
                changeColor.setAttribute('class', 'errorField');
                // alert(changeColor.getAttribute('class'))
            }
        }
        if(length3 == 0){
            // alert('color')
            let ca = getPassword1.getAttribute('class');
            // alert(ca)
            if(ca === 'input'){
                getPassword1.setAttribute('class', 'errorField');
                // alert(getPassword1.getAttribute('class'))
            }
        }
        if(length4 == 0){
            // alert('color')
            let ca = getPassword2.getAttribute('class');
            // alert(ca)
            if(ca === 'input'){
                getPassword2.setAttribute('class', 'errorField');
                // alert(getPassword2.getAttribute('class'))
            }
        }
        
    }
    
    if(flag == 0){
        // alert(flag)
        return false;
    }
}


function required1(vl){
    fullName = vl.value;
}
var pattrn = /\s/;
var errorSpace1 = document.getElementsByClassName('spaceError1')[0];
function required2(data){
    let isSpace = pattrn.test(data.value);
    // alert(isSpace)
    if(isSpace){
        errorSpace1.innerText = 'Space is not allowed!';
    }
    else{
        errorSpace1.innerText = '';
    }
    userName = data.value;
}
var errorSpace2 = document.getElementsByClassName('spaceError2')[0];
function required3(vl){
    pass1 = vl.value;
    let isSpace = pattrn.test(vl.value);
    // alert(isSpace)
    if(isSpace){
        errorSpace2.innerText = 'Space is not allowed!';
    }
    else{
        errorSpace2.innerText = '';
    }
}
/*
    The following code logic for Caps lock button. When a user click the caps lock button
    then in form page at right corner show the message to warn!
*/
var caps = false;
var warning = document.getElementsByClassName('capsMessage')[0];
window.addEventListener('keyup', event =>{
   caps = event.getModifierState('CapsLock');
   if (caps == true){
    warning.innerHTML = "WARNING! Capslock ON!";
    }else{
        warning.innerHTML = "";
    }
})

