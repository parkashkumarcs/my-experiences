var hrs = 0;
var mint = 0;
var sec = 0;
var clearTime;

function start(){
    sec++;
    var check=false;
    if(sec == 60){
        sec = 0;
        check=true
        mint++;
    }
    if(mint == 60){
        sec = 0;
        mint = 0;
        check=true;
        hrs++;
    }
   
    if(hrs>0 && check==true){
        sec = sec < 10 ? "0" + sec : sec;
        mint = mint < 10 ? "0" + mint : mint;
        hrs = hrs < 10 && mint >= 60 ? "0" + hrs : hrs;
        var timeFormate = hrs + "hr : " + mint + "min : " + sec + "sec";
    }
    if(mint>0){
        sec = sec < 10 ? "0" + sec : sec;
        mint = mint < 10 && check==true ? "0" + mint : mint;
        var timeFormate = "0" + hrs + "hr : " + mint + "min : " + sec + "sec";
    }
    else{
        sec = sec < 10 ? "0" + sec : sec;
        var timeFormate = "0" + hrs + "hr : " + "0" + mint + "min : " + sec + "sec";
    }
    document.getElementById('setTime').innerHTML=timeFormate;
    document.getElementById('card').style.backgroundColor = 'rgb(27, 1, 29)';
    document.getElementById('setTime').style.color = 'rgb(25, 235, 36)';
    document.getElementById('setTime').style.transition = '0.3s';
    document.getElementById('setTime').style.backgroundColor = 'rgb(39, 18, 27)';
    document.getElementById('start').style.pointerEvents = "none";
    document.getElementById('start').style.backgroundColor='rgb(25, 235, 36)';
    document.getElementById('stop').style.backgroundColor= '';
    clearTime = setTimeout(start, 1000);
}

function stop(){
    clearTimeout(clearTime);
    document.getElementById('start').style.pointerEvents = "all";
    document.getElementById('start').style.backgroundColor='';
    document.getElementById('stop').style.backgroundColor= 'rgb(236, 14, 14)';
    document.getElementById('setTime').style.color = 'rgb(236, 14, 14)';
    document.getElementById('setTime').style.transition = '0.3s';
    document.getElementById('setTime').style.backgroundColor = 'rgb(255, 255, 255)';
}
function reset(){

    document.getElementById('setTime').style.color = 'rgb(255, 255, 255)';
    document.getElementById('setTime').style.transition = '0.3s';
    document.getElementById('setTime').style.backgroundColor = 'rgb(155, 155, 155)';
    document.getElementById('start').style.backgroundColor='';
    document.getElementById('stop').style.backgroundColor= '';
    document.getElementById('card').style.backgroundColor = '';
    hrs = 0;
    mint = 0;
    sec = 0;
    var timeFormate = "0" + hrs + "hr : " + "0" + mint + "min : " + "0" + sec + "sec";
    document.getElementById('setTime').innerHTML=timeFormate;
    document.getElementById('start').style.pointerEvents = "all";
    clearTimeout(clearTime);
    // location.reload(); 
    // document.getElementById('card').innerHTML = "";    
    // document.getElementById("card").style= "";
}