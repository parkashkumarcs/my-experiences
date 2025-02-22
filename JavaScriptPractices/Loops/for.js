
for(var i = 1; i<=10;i++){
    for(var j = 1; j<=i; j++){
        document.write("*" + " ");    
    }
    document.write("<br>");
    
}
for(var i = 10; i>=1;i--){
    for(var j = 1; j<=i; j++){
        document.write("*" + " ");    
    }
    document.write("<br>");
    
}
document.write("<br><br>");
var matrix = [['*','*','*','*'],['*','*','*','*'],['*','*','*','*'],['*','*','*','*']]
for(var i = 0; i<4;i++){
    for(var j = 0; j<4; j++){
        document.write(matrix[i][j] + " &nbsp &nbsp &nbsp");    
    }
    document.write("<br><br>");
    
}

document.write("<br><br>");
document.write("Only diagonal<br>");
// I have used logic as when i equal to j then print else print only space.
for(var i = 0; i<4;i++){
    for(var j = 0; j<4; j++){
        if(i==j){
            // alert(i + " " + j)
            document.write(matrix[i][j] + " &nbsp &nbsp &nbsp");
        }
        else{
            document.write(" &nbsp &nbsp &nbsp &nbsp");
        }
            
    }
    document.write("<br><br>");
    
}
document.write("<br><br>");
document.write("after remove the diagonal<br>");
// after remove the diagonal
for(var i = 0; i<4;i++){
    for(var j = 0; j<4; j++){
        if(i!=j){
            // alert(i + " " + j)
            document.write(matrix[i][j] + " &nbsp &nbsp &nbsp");
        }
        else{
            document.write(" &nbsp &nbsp &nbsp");
        }
            
    }
    document.write("<br><br>");
    
}

document.write("<br><br>");
document.write("Above the diagonal<br>");
// Remove the below diagonal values when i<j
/*
        00  01  02  03
            11  12  13
                22  23
                    33

*/

for(var i = 0; i<4;i++){
    for(var j = 0; j<4; j++){
        if(i==j || i<j ){
            // alert(i + " " + j)
            document.write(matrix[i][j] + " &nbsp &nbsp &nbsp");
        }
        else{
            document.write(" &nbsp &nbsp &nbsp &nbsp ");
        }
            
    }
    document.write("<br><br>");
    
}
document.write("<br><br>");
document.write("Below The Diagonal<br>");
// after remove the above diagonal values when i>j
/*
        00  
        10  11  
        20  21  22  
        30  31  32  33

*/

for(var i = 0; i<4;i++){
    for(var j = 0; j<4; j++){
        if(i==j || i>j ){
            // alert(i + " " + j)
            document.write(matrix[i][j] + " &nbsp &nbsp &nbsp");
        }
        else{
            document.write(" &nbsp &nbsp &nbsp &nbsp ");
        }
            
    }
    document.write("<br><br>");
    
}

document.write("<br><br>");
document.write("after remove the boundary values of matrix 4x4 <br>");
// after remove the boundary values
/*
        11  12
        21  22

        Remove the following index to make above pattern
        00  01  02  03
        10          13
        20          23
        30  31  32  33

*/

for(var i = 0; i<4;i++){
    for(var j = 0; j<4; j++){
        
        let str = i + "" +j;
        if(str == '11' || str == '12' || str == '21' || str == '22'){
            document.write(matrix[i][j] + " &nbsp &nbsp &nbsp");
        }
        else{
            // alert(i+j)
            document.write(" &nbsp &nbsp &nbsp &nbsp ");
        }
            
    }
    document.write("<br><br>");
    
} 

document.write("after remove the central values of matrix 4x4 <br>");
// after remove the central values
/*
        00  01  02  03
        10          13
        20          23
        30  31  32  33

        Remove the following index to make above pattern
        11  12
        21  22

*/

for(var i = 0; i<4;i++){
    for(var j = 0; j<4; j++){
        
        let str = i + "" +j;
        if(str == '11' || str == '12' || str == '21' || str == '22'){
            // alert(str)
            document.write(" &nbsp &nbsp &nbsp &nbsp ");
        }
        else{
            // alert(i+j)
            document.write(matrix[i][j] + " &nbsp &nbsp &nbsp");

        }
            
    }
    document.write("<br><br>");
    
}