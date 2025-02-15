
var tab;
function openTab(){
   tab = window.open("https://www.linkedin.com/in/parkashkumar/", "width: 500px", "height: 500px")
}
function closeTab(){
    tab.close(tab);
}

// Code for History.html
var countSiteVisited;
function siteCount(){
    countSiteVisited=window.history.length;
    document.getElementsByTagName('h1')[0].innerText=countSiteVisited;

}