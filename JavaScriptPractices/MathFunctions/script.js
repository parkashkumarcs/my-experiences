
var number = 12;
var number1 = 15;
var division = number / number1;
document.write("<div>" + Math.sqrt(number + number1) + "</div>");
document.write("<div>" + Math.sqrt(division) + "</div>");
document.write("<div>" + Math.ceil(division) + "</div>");
document.write("<div>" + Math.min(number, number1) + "</div>");
document.write("<div>" + Math.max(number, number1) + "</div>");
document.write("<div>" + Math.floor(12* (Math.random(number))) + "</div>");
document.write("<div>" + Math.pow(number, 2) + "</div>");
document.write("<hr class = 'horizontalLine'>");

//this key return the rafer object either global or local or own object.
var Student = {
    firstName:'Parkash',
    lastName: 'Kumar',
    Gradaution: true,
    CGPA: 2.4,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

document.write("<h1>" + Student.fullName() + "</h1>");
document.write("<h1>" + Student.Gradaution + "</h1>")
document.write("<h1>" + Student.CGPA + "</h1>")

document.write("<button onclick = 'removeMe(this)'>" + 'Remove me' + "</button>")
function removeMe(elem){
    elem.style.display = 'none';
}
