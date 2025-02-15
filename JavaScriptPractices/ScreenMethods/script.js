
function screenMethods(){
    var screenHeight=screen.availHeight;
    var screenWidth=screen.availWidth;
    var screenColorDep=screen.colorDepth;
    var screenH=screen.height;
    var screenPixDep=screen.pixelDepth;
    var screenW=screen.width; 
    document.getElementsByTagName('span')[0].innerText=screenHeight;
    document.getElementsByTagName('span')[1].innerText=screenWidth;
    document.getElementsByTagName('span')[2].innerText=screenColorDep;
    document.getElementsByTagName('span')[3].innerText=screenH;
    document.getElementsByTagName('span')[4].innerText=screenPixDep;
    document.getElementsByTagName('span')[5].innerText=screenW;
}