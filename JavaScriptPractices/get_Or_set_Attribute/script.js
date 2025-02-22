

function startAnimaiton(){
    var parentDIv = document.getElementById('main');
    var childDiv = parentDIv.children;
    for(let index = 0; index < childDiv.length; index++){
        let getClass = childDiv[index].getAttribute("class");
        if(getClass === 'noAnimation'){
            childDiv[index].setAttribute("class","animation");  
        }
    }
    // let getClass = childDiv[0].getAttribute("class");
    // alert(getClass);
}
function stopAnimaiton(){
    var parentDIv = document.getElementById('main');
    var childDiv = parentDIv.children;
    for(let index = 0; index < childDiv.length; index++){
        let getClass = childDiv[index].getAttribute("class");
        // alert(getClass);
         if(getClass === 'animation'){
            childDiv[index].setAttribute("class","noAnimation");
              
        }
    }   
}