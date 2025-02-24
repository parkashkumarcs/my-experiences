
var getPassword1 = document.getElementById('password1');
var getPassword2 = document.getElementById('password2');
var fullName = '';
var userName = '';
var length3 = '';
var length4 = '';
var passData = getPassword1.value;

// alert(length3)
// alert(length3.length)
function togglePassowd(){
    // alert('Working')
    let extractPaaword1 = getPassword1.getAttribute('type');
    let extractPaaword2 = getPassword2.getAttribute('type');
    passData = getPassword1.value;
    length3 = passData.length;
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
length3 = passData.length;
length4 = pass2Data.length;
alert(length4)
function matchPassword(currentValue){
    let string = currentValue.value;
    let string2 = getPassword1.value;
    length4 = string.length;
    if(string.length > 0 && string2.length > 0){
        if(getPassword1.value === string){
            document.getElementById('error').innerHTML = 'passowrd matched';
            document.getElementById('error').style.color = 'green';
            flag = 1;
        }
        else{
            document.getElementById('error').innerHTML = "passowrd doesn't match!";
            document.getElementById('error').style.color = 'red';
            flag = 0;
        }
    }
    else{
        document.getElementById('error').innerHTML = '&nbsp';
        flag = 0;
    }
}
function register(){
    let length1 = fullName.length;
    let length2 = userName.length;
    alert(length3)
    alert(length4)
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
function required2(vl){
    userName = vl.value;
}