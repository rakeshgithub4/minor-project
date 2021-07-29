function fun(){
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1 = document.getElementById('b1').value;
    b2 = document.getElementById('b2').value;
    b3 = document.getElementById('b3').value;
    b4 = document.getElementById('b4').value;
    b5 = document.getElementById('b5').value;
    b6 = document.getElementById('b6').value;
    b7 = document.getElementById('b7').value;
    b8 = document.getElementById('b8').value;
    b9 = document.getElementById('b9').value;

    if((b1 == 'x' || b1 =='X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X')){
        document.getElementById('pa').innerHTML = "Player X won";
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        document.getElementById('b1').style.backgroundColor = "green";
        document.getElementById('b2').style.backgroundColor = "green";
        document.getElementById('b3').style.backgroundColor = "green";
        
    }
    else if((b4 == 'x' || b4 =='X') && (b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 == 'X')){
        document.getElementById('pa').innerHTML = "Player X won";
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        document.getElementById('b4').style.backgroundColor = "green";
        document.getElementById('b5').style.backgroundColor = "green";
        document.getElementById('b6').style.backgroundColor = "green";
        
    }
    else if((b7 == 'x' || b7 =='X') && (b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X')){
        document.getElementById('pa').innerHTML = "Player X won";
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b7').style.backgroundColor = "green";
        document.getElementById('b8').style.backgroundColor = "green";
        document.getElementById('b9').style.backgroundColor = "green";
        
    }
    else if((b1 == 'x' || b1 =='X') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X')){
        document.getElementById('pa').innerHTML = "Player X won";
        document.getElementById('b2').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        document.getElementById('b1').style.backgroundColor = "green";
        document.getElementById('b4').style.backgroundColor = "green";
        document.getElementById('b7').style.backgroundColor = "green";
        
    }
    else if((b2 == 'x' || b2 =='X') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X')){
        document.getElementById('pa').innerHTML = "Player X won";
        document.getElementById('b4').disabled = true;
        document.getElementById('b1').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b9').disabled = true;
        document.getElementById('b5').style.backgroundColor = "green";
        document.getElementById('b2').style.backgroundColor = "green";
        document.getElementById('b8').style.backgroundColor = "green";
        
    }
    else if((b3 == 'x' || b3 =='X') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X')){
        document.getElementById('pa').innerHTML = "Player X won";
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b1').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b6').style.backgroundColor = "green";
        document.getElementById('b9').style.backgroundColor = "green";
        document.getElementById('b3').style.backgroundColor = "green";
        
    }
    else if((b1 == 'x' || b1 =='X') && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X')){
        document.getElementById('pa').innerHTML = "Player X won";
        document.getElementById('b4').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b1').style.backgroundColor = "green";
        document.getElementById('b5').style.backgroundColor = "green";
        document.getElementById('b9').style.backgroundColor = "green";
        
    }
    else if((b3 == 'x' || b3 =='X') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X')){
        document.getElementById('pa').innerHTML = "Player X won";
        document.getElementById('b4').disabled = true;
        document.getElementById('b1').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        document.getElementById('b5').style.backgroundColor = "green";
        document.getElementById('b7').style.backgroundColor = "green";
        document.getElementById('b3').style.backgroundColor = "green";
        
    }
    else if((b1 == 'y' || b1 =='Y') && (b2 == 'y' || b2 == 'Y') && (b3 == 'y' || b3 == 'Y')){
        document.getElementById('pa').innerHTML = "Player Y won";
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        document.getElementById('b1').style.backgroundColor = "green";
        document.getElementById('b2').style.backgroundColor = "green";
        document.getElementById('b3').style.backgroundColor = "green";

    }
    else if((b4 == 'y' || b4 =='Y') && (b5 == 'y' || b5 == 'Y') && (b6 == 'y' || b6 == 'Y')){
        document.getElementById('pa').innerHTML = "Player Y won";
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        document.getElementById('b4').style.backgroundColor = "green";
        document.getElementById('b5').style.backgroundColor = "green";
        document.getElementById('b6').style.backgroundColor = "green";
        
    }
    else if((b7 == 'y' || b7 =='Y') && (b8 == 'y' || b8 == 'Y') && (b9 == 'y' || b9 == 'Y')){
        document.getElementById('pa').innerHTML = "Player Y won";
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b7').style.backgroundColor = "green";
        document.getElementById('b8').style.backgroundColor = "green";
        document.getElementById('b9').style.backgroundColor = "green";
    
    }
    else if((b1 == 'y' || b1 =='Y') && (b4 == 'y' || b4 == 'Y') && (b7 == 'y' || b7 == 'Y')){
        document.getElementById('pa').innerHTML = "Player Y won";
        document.getElementById('b2').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        document.getElementById('b1').style.backgroundColor = "green";
        document.getElementById('b4').style.backgroundColor = "green";
        document.getElementById('b7').style.backgroundColor = "green";

    }
    else if((b2 == 'y' || b2 =='Y') && (b5 == 'y' || b5 == 'Y') && (b8 == 'y' || b8 == 'Y')){
        document.getElementById('pa').innerHTML = "Player Y won";
        document.getElementById('b4').disabled = true;
        document.getElementById('b1').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b9').disabled = true;
        document.getElementById('b5').style.backgroundColor = "green";
        document.getElementById('b2').style.backgroundColor = "green";
        document.getElementById('b8').style.backgroundColor = "green";
        
    }
    else if((b3 == 'y' || b3 =='Y') && (b6 == 'y' || b6 == 'Y') && (b9 == 'y' || b9 == 'Y')){
        document.getElementById('pa').innerHTML = "Player Y won";
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b1').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b6').style.backgroundColor = "green";
        document.getElementById('b9').style.backgroundColor = "green";
        document.getElementById('b3').style.backgroundColor = "green";
        
    }
    else if((b1 == 'y' || b1 =='Y') && (b5 == 'y' || b5 == 'Y') && (b9 == 'y' || b9 == 'Y')){
        document.getElementById('pa').innerHTML = "Player Y won";
        document.getElementById('b4').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b1').style.backgroundColor = "green";
        document.getElementById('b5').style.backgroundColor = "green";
        document.getElementById('b9').style.backgroundColor = "green";
        
    }
    else if((b3 == 'y' || b3 =='Y') && (b5 == 'y' || b5 == 'Y') && (b7 == 'y' || b7 == 'Y')){
        document.getElementById('pa').innerHTML = "Player Y won";
        document.getElementById('b4').disabled = true;
        document.getElementById('b1').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        document.getElementById('b5').style.backgroundColor = "green";
        document.getElementById('b7').style.backgroundColor = "green";
        document.getElementById('b3').style.backgroundColor = "green";
        
    }
    else if((b1 == 'X' || b1 == 'Y') && (b2 == 'X' || b2 == 'Y') && (b3 == 'X' || b3 =='Y') &&
            (b4 == 'X' || b4 == 'Y') && (b5 == 'X' || b5 == 'Y') && (b6 == 'X' || b6 == 'Y') && 
            (b7 == 'X' || b7 == 'Y') && (b8 == 'X' || b8 == 'Y') && (b9 == 'X' || b9 == 'Y'))   {
                document.getElementById('pa').innerHTML = "Match Tie";
                
    }
    else {
        if(flag == 1){
            document.getElementById('pa').innerHTML = "Player X turn";
            
        }
        else {
            document.getElementById('pa').innerHTML = "Player Y turn";
            
        }
    }
}

function reset(){
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById('b2').value = '';
    document.getElementById('b3').value = '';
    document.getElementById('b4').value = '';
    document.getElementById('b5').value = '';
    document.getElementById('b6').value = '';
    document.getElementById('b7').value = '';
    document.getElementById('b8').value = '';
    document.getElementById('b9').value = '';
}

flag = 1;
function fun_1(){
    if(flag == 1){
        document.getElementById('b1').value = 'X';
        document.getElementById('b1').disabled = true;
        document.getElementById("paragraph").innerHTML = "Now Player X is at (1,1) posistion";
        flag = 0;
    }
    else {
        document.getElementById('b1').value = 'Y';
        document.getElementById('b1').disabled = true;
        document.getElementById("paragraph").innerHTML = "Now Player Y is at (1,1) posistion";
        flag = 1;
    }
}
function fun_2(){
    if(flag == 1){
        document.getElementById('b2').value = 'X';
        document.getElementById('b2').disabled = true;
        document.getElementById("paragraph").innerHTML = "Now Player X is at (1,2) posistion";
        flag = 0;
    }
    else {
        document.getElementById('b2').value = 'Y';
        document.getElementById('b2').disabled = true;
        document.getElementById("paragraph").innerHTML = "Now Player Y is at (1,2) posistion";
        flag = 1;
    }
}
function fun_3(){
    if(flag == 1){
        document.getElementById('b3').value = 'X';
        document.getElementById('b3').disabled = true;
        document.getElementById("paragraph").innerHTML = "Now Player X is at (1,3) posistion";
        flag = 0;
    }
    else {
        document.getElementById('b3').value = 'Y';
        document.getElementById('b3').disabled = true;
        document.getElementById("paragraph").innerHTML = "Now Player 3 is at (1,3) posistion";
        flag = 1;
    }
}
function fun_4(){
    if(flag == 1){
        document.getElementById('b4').value = 'X';
        document.getElementById('b4').disabled = true;
        document.getElementById("paragraph").innerHTML = "Now Player X is at (2,1) posistion";
        flag = 0;
    }
    else {
        document.getElementById('b4').value = 'Y';
        document.getElementById('b4').disabled = true;
        document.getElementById("paragraph").innerHTML = "Now Player Y is at (2,1) posistion";
        flag = 1;
    }
}
function fun_5(){
    if(flag == 1){
        document.getElementById('b5').value = 'X';
        document.getElementById('b5').disabled = true;
        document.getElementById("paragraph").innerHTML = "Now Player X is at (2,2) posistion";
        flag = 0;
    }
    else {
        document.getElementById('b5').value = 'Y';
        document.getElementById('b5').disabled = true;
        document.getElementById("paragraph").innerHTML = "Now Player Y is at (2,2) posistion";
        flag = 1;
    }
}
function fun_6(){
    if(flag == 1){
        document.getElementById('b6').value = 'X';
        document.getElementById('b6').disabled = true;
        document.getElementById("paragraph").innerHTML = "Now Player X is at (2,3) posistion";
        flag = 0;
    }
    else {
        document.getElementById('b6').value = 'Y';
        document.getElementById('b6').disabled = true;
        document.getElementById("paragraph").innerHTML = "Now Player Y is at (2,3) posistion";
        flag = 1;
    }
}
function fun_7(){
    if(flag == 1){
        document.getElementById('b7').value = 'X';
        document.getElementById('b7').disabled = true;
        document.getElementById("paragraph").innerHTML = "Now Player X is at (3,1) posistion";
        flag = 0;
    }
    else {
        document.getElementById('b7').value = 'Y';
        document.getElementById('b7').disabled = true;
        document.getElementById("paragraph").innerHTML = "Now Player Y is at (3,1) posistion";
        flag = 1;
    }
}
function fun_8(){
    if(flag == 1){
        document.getElementById('b8').value = 'X';
        document.getElementById('b8').disabled = true;
        document.getElementById("paragraph").innerHTML = "Now Player X is at (3,2) posistion";
        flag = 0;
    }
    else {
        document.getElementById('b8').value = 'Y';
        document.getElementById('b8').disabled = true;
        document.getElementById("paragraph").innerHTML = "Now Player Y is at (3,2) posistion";
        flag = 1;
    }
}
function fun_9(){
    if(flag == 1){
        document.getElementById('b9').value = 'X';
        document.getElementById('b9').disabled = true;
        document.getElementById("paragraph").innerHTML = "Now Player X is at (3,3) posistion";
        flag = 0;
    }
    else {
        document.getElementById('b9').value = 'Y';
        document.getElementById('b9').disabled = true;
        document.getElementById("paragraph").innerHTML = "Now Player Y is at (3,3) posistion";
        flag = 1;
    }
}
