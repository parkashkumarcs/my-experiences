


var skill=["OOp", "HTML", "CSS", "Javascript"];
skill[4]="C++";
skill[5]="Python";
skill[6]="Javax";

for(var index=0; index<7;index++){
   document.getElementsByClassName('val')[index].innerHTML=skill[index];
    // document.write(skill[index])
}
var count=6;
while(count>=0){
    document.write("<div class='myDiv'>" + skill[count] + "</div>");
    count--;
}

// skill.forEach(extract);
// function extract(itme, index, array){
//     document.write(itme + ": " + index +"<br>");
//     alert(array[index]);
// }

var tool=["VS Code", "Mongoose", "Browser"];
var merged=tool.concat(skill);

for(var i=0; i<merged.length;i++){
    document.write("<br>" + merged[i]);
}

var nums=[1,2,3,4,5];
var Stack=nums;
// document.write("<br>" + Stack);
document.getElementById('display').innerText=Stack;
function pop(){
    Stack.pop();
    document.getElementById('display').innerText=Stack;
    // document.write(Stack);
}
function push(){
    var newValue = prompt("enter value :");
    Stack.push(newValue);
    document.getElementById('display').innerText=Stack;
    // document.write(Stack);
}
function slice(){
    var sl = Stack.slice(1,2);
    document.getElementById('display').innerText=sl;
}
function reverse(){
    Stack.reverse();
    document.getElementById('display').innerText=Stack;
}

function shift(){
    var sh = Stack.shift();
    document.getElementById('display').innerText=sh;
}
f

// skill.forEach(extract);
// function extract(item, index, )




function cal(){
    var operand1=document.getElementById('operand1').value;
    var operand2=document.getElementById('operand2').value;
    var operator=document.getElementById('operator').value;
    // alert(operand1);
    // alert(operand2);
    if(operator=='+'){
        var result=parseInt(operand1) + parseInt(operand2);
    }
    else if(operator=='-'){
        var result=parseInt(operand1) - parseInt(operand2);
    }
    else if(operator=='*'){
        var result=parseInt(operand1) * parseInt(operand2);
    }
    else if(operator=='/'){
        var result=parseInt(operand1) / parseInt(operand2);
    }
    document.getElementById('result').innerHTML=result;

}




// let myBoolean=true;

// console.log(myBoolean);
// const firstNumber=10;
// const secondNumber=30;
// console.log("Sum of two numbers is "+(firstNumber+secondNumber));
// var thirdNumber="sdj";
// thirdNumber=firstNumber;
// console.log(thirdNumber)
// const myFuction=function(){
//     var name="Parkash";
//     if(true){
//         console.log(name)
//     }
//     return name
// }
// let anotherName = myFuction();
// console.log(anotherName);
// const array=[10, 'Kumar', true, {add:'abc', mail:"@gmail.com"}, [12,'PK']];
// console.log(anotherName+" "+array[1]);
// console.log(array[3].add);
// console.log(array[4][1]);

// const myObjects={
//     student_Name:'Parkash Kumar',
//     CGPA: 2.4,
//     Specilaization:"MERN Stack Developer",
//     skills:{
//         webDevelopment:"JavaScript, HTML, CSS, MERN Stack(mongoDB, React.js e.g.)",
//         softwareDevelopment:"Java, C++, Python, Assembly",
//         ML:"Python, matLab"
//     },
//     Instituate:"Sukkur IBA University"
// }
// console.log(myObjects.Instituate);
// console.log(myObjects.skills.softwareDevelopment);
// console.log(myObjects.skills.webDevelopment);

// // Let's create a simple calculator only using javascript.
// const var1 = 10, var2=20, operator='%';

// const calculator=function(prop1,prop2,operator){
//     var results = 0;
//     if(operator=='+'){
//         results = " sum is " + (Number(prop1) + Number(prop2));
//     }
//     else if(operator=='-'){
//         results = " sub is " + (Number(prop1) - Number(prop2));
//     }
//     else if(operator=='*'){
//         results = " mult is " + (Number(prop1) * Number(prop2));
//     }
//     else if(operator=='/'){
//         results = " div is " + (Number(prop1) / Number(prop2));
//     }
//     else if(operator=='%'){
//         results = " mod is " + (Number(prop1) % Number(prop2));
//     }
//     else{
//         results='Error!';
//     }
//     return results;
// }

// console.log("The results of " + calculator(var1, var2, operator));
