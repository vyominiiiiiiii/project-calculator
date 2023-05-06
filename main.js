var date=new Date();
console.log(date);
document.getElementById("date").innerHTML=date;

//var day=date.getDay();
//console.log(day);
//function one(){
   // console.log(1);
//var x=1;
//document.getElementById("userInput").innerHTML=1;
//}

var id=" ";

function typeId(num){
id=num;
   switch(id){
       
   case "one":
   console.log(1);
   document.getElementById("userInput").value+=1;
   break;
   
   case "two":
   console.log(2);
   document.getElementById("userInput").value+=2;
   break;
   
   case "three":
   console.log(3);
   document.getElementById("userInput").value+=3;
   break;
   
   case "four":
   console.log(4);
   document.getElementById("userInput").value+=4;
   break;
   
   case "five":
   console.log(5);
   document.getElementById("userInput").value+=5;
   break;
   
   case "six":
   console.log(6);
   document.getElementById("userInput").value+=6;
   break;
   
   case "seven":
   console.log(7);
   document.getElementById("userInput").value+=7;
   break;
   
   case "eight":
   console.log(8);
   document.getElementById("userInput").value+=8;
   break;
   
   case "nine":
   console.log(9);
   document.getElementById("userInput").value+=9;
   break;
   
   case "zero":
   console.log(0);
   document.getElementById("userInput").value+=0;
   break;
   
   default:
   console.log("None");
   
   }
   
   }

var userInput=Number(document.getElementById("userInput").value);
 var operation="";



 function square(){

   operation="square";
   userInput=Number(document.getElementById("userInput").value);
   calculation();

}

 function squareRoot(){

   operation="squareRoot";
   userInput=Number(document.getElementById("userInput").value);
   calculation();

}


function cube(){

   operation="cube";
   userInput=Number(document.getElementById("userInput").value);
   calculation();

}


function calculation(){

   switch(operation){

   case "square":
   console.log(userInput*userInput);
   document.getElementById("userInput").value=userInput*userInput;
   break;

   case "squareRoot":
      console.log(Math.sqrt(userInput));
      document.getElementById("userInput").value=Math.sqrt(userInput);
      break;

      
    case "cube":
    console.log(userInput*userInput*userInput);
   document.getElementById("userInput").value=userInput*userInput*userInput;
   break;
      

   default:
   console.log("Oops");

   }

}

var operatorId="";

var z="";

function division(){

document.getElementById("userInput").value+="÷";
console.log("÷");
operatorId="division";

}

function multiplication(){

   document.getElementById("userInput").value+="×";
   console.log("×");
   operatorId="multiplication";
   
   }

function addition(){

document.getElementById("userInput").value+="+";
console.log("+");
operatorId="addition";
   
   }

function subtraction(){

document.getElementById("userInput").value+="-";
console.log("-");
operatorId="subtraction";
   
   }




