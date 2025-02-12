
function studentName(){
    var userName=document.getElementsByName('userName')[0].value;
    document.getElementsByName('userName')[0].value="";
    document.getElementsByTagName('h1')[1].innerHTML=userName;
}
function runMe(){

    setTimeout(
        function(){
            document.getElementsByTagName('h1')[2].innerHTML="Hi, It's Me an Event:)";
            // alert('Its Me Event:)')
        },2000
    )

    /*setInterval is continue callback function which work in given time interval e.g. milliseconds */
    // setInterval(
    //     function(){
    //         document.getElementsByTagName('h1')[2].innerHTML="Hi, It's Me an Event:)";
    //         alert('Its Me Event:)')
    //     },2000
    // )
}

function showTime(){
    var day = new Date();
    var hours = day.getHours();
    var minutes = day.getMinutes();
    var seconds = day.getSeconds();
    var session = "PM";
    if(hours > 12){
        hours = hours - 12;
    }
    if(hours >= 12){
        session = "AM";
    }
    hours= hours < 10 ? "0" + hours : hours;
    minutes= minutes < 10 ? "0" + minutes : minutes;
    seconds= seconds < 10 ? "0" + seconds : seconds;
    var time = hours + " : " + minutes + " : " + seconds + " " + session;
    document.getElementsByTagName('h1')[3].innerHTML = time; 
    setTimeout(showTime,1000);

}

function sizeChange(){
    document.getElementsByTagName('h1')[4].style.fontSize = "50px";
    document.getElementsByTagName('h1')[4].style.backgroundColor = "#643220";
    document.getElementsByTagName('h1')[4].style.color = "white";
    document.getElementsByTagName('h1')[4].style.border = "5px solid yellow";
    document.getElementsByTagName('h1')[4].style.borderRadius = "10px";
    document.getElementsByTagName('h1')[4].style.width = "400px";
    document.getElementsByTagName('h1')[4].style.textAlign = "center";
    document.getElementsByTagName('h1')[4].style.boxShadow = "5px 5px 5px gray";
    document.getElementsByTagName('h1')[4].style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
    document.getElementsByTagName('h1')[4].style.cursor = "pointer";
    document.getElementsByTagName('h1')[4].style.transition = "1s";


}
function reset(){
    document.getElementsByTagName('h1')[4].style.fontSize = "";
    document.getElementsByTagName('h1')[4].style.backgroundColor = "aquamarine";
    document.getElementsByTagName('h1')[4].style.color = "";
    document.getElementsByTagName('h1')[4].style.border = "";
    document.getElementsByTagName('h1')[4].style.borderRadius = "";
    document.getElementsByTagName('h1')[4].style.width = "";
    document.getElementsByTagName('h1')[4].style.textAlign = "";
    document.getElementsByTagName('h1')[4].style.boxShadow = "";
    document.getElementsByTagName('h1')[4].style.fontFamily = "";
}