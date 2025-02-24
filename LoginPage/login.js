
 var pass = document.getElementById('password');
function togglePassword(){
    // alert(pass)
    let type = pass.getAttribute('type');
    // alert(type);
    if(type === 'password'){
        pass.setAttribute('type', 'text');
        document.getElementById('message').innerHTML = 'Hide Password';
    }else{
        pass.setAttribute('type', 'password');
        document.getElementById('message').innerHTML = 'Show Password';
    }
}

