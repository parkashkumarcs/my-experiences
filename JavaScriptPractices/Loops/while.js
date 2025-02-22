var times = 0;
var parent_Div = document.getElementById('container');
var child_Div = parent_Div.children;

while(times<=10){
    times++;
   let new_Div = document.createElement('div');
   new_Div.innerText = "While loop run " + times + " time";
   parent_Div.appendChild(new_Div);
   new_Div.style.color = 'green';
   new_Div.style.fontSize = '30px';
   new_Div.style.backgroundColor = 'black';
   new_Div.style.textAlign = 'center';
}