
var getPassword1 = document.getElementById('password1');
var getPassword2 = document.getElementById('password2');
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
var flag;
function matchPassword(currentValue){
    
    let string = currentValue.value;
    let string2 = getPassword1.value;
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
    if(flag == 1){
        // alert(flag)
        return true;
    }
    if(flag == 0){
        // alert(flag)
        return false;
    }
}