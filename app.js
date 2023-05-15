///qustn 1

var num1=11;
var newNum1= num1++;

console.log("the value of num1++ is:"+newNum1);

var num2=11;
var newNum2= ++num1;

console.log("the value of ++num2 is:"+newNum2);

var num3=11;
var newNum3= num3--;

console.log("the value of num3-- is:"+newNum3);

var num4=11;
var newNum4= --num1;

console.log("the value of --num4 is:"+newNum4);
console.log("the value of num is :"+ 10);

// qustn 2

var a=2;
var b=1;
 var result= --a - --b + ++b + b--;


 console.log("a= "+ a);
 console.log("b= "+ b);
 console.log("result "+ result);

 //qustn 3
 var userInput=prompt("ENTER YOUR NAME");
 var greed="WELCOME TO MY WEBSITE";
 alert(greed);

 //qustn 4
 var num1 = prompt("Enter Number", "0");
var num1 = parseInt(num1); 
var i = 0;
document.write('<table border="1" cellspacing="0">');
for (i = 1; i < 10; i++) {
  document.write("<tr><td>" + num1 + " x " + i + " = " + num1 * i + "</td></tr>");
}

// qustn 5
var book1="english";
var priceBook1=100;
var SubMarks1=parseInt(prompt("enter your marks obtained first sub"));

var book2="urdu";
var priceBook2=100;
var SubMarks2=parseInt(prompt("enter your marks obtained second sub"));

var book3="math";
var priceBook3=100;
var SubMarks3=parseInt(prompt("enter your marks obtained third sub"));

var total= SubMarks1+ SubMarks2+ SubMarks3;
console.log(total)

var per1=priceBook1/SubMarks1*100;
console.log(per1);
var per2=priceBook2/SubMarks2*100;
console.log(per2);
var per3=priceBook3/SubMarks3*100;
console.log(per3);

var pertotal= per1+per2+per3;
console.log(pertotal);


var marks=document.write("<table><tr><th>subject</th></tr>"+"<tr><td>"+book1+"</td></tr>"+SubMarks1)
