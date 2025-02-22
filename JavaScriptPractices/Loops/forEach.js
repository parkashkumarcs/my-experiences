
var arr = ["😂", "😎", "😘", "(❁´◡`❁)", '🐈‍⬛'];

arr.forEach(display);

function display(item, index){
    document.write(index + ": I am today very " + item + "<br>");
    document.write("<style> body{color: blue; font-size: 30px; text-align: center; transition: 1s;  } </style>");

}