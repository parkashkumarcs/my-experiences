
var body = document.getElementById('body').innerHTML;
// alert(body);
var data = document.getElementById('data').innerHTML;
// alert(data)


function printNow(){
    document.getElementById('body').innerHTML = data;
    // alert(body);
    window.print();
    document.getElementById('body').innerHTML = body;
}
