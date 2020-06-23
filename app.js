
// chapter 21 - 25
// task 1
var first = prompt("Enter your first Name : ");
var sec = prompt("Enter last name :");
var fullName = first + sec ;
document.write('Have a good day ' + fullName);



// task 2
var sam = prompt("enter your fvrt phone model :");
var b =  sam.length;
document.write("My favrt phone is : " + sam);
document.write("<br> length of string : " + b);


// task 3
var i = "Pakistani";
var b = i.indexOf('n');

document.write(i);
document.write("<br> Index of 'n' : " + b);


// Task 4

var b = "Hello World";
var c = b.lastIndexOf("l");

document.write(b);
document.write("<br> Index of 'l' : " + c);


// Task 5

var i = "Pakistani";
var b = i.charAt(3);

document.write(i);
document.write("<br> Character at index 3 : " + b);



// task 6


var first = prompt("Enter your first Name : ");
var sec = prompt("Enter last name :");
var fullName = first.concat(sec) ;
document.write('Have a good day ' + fullName);








// Task 7

var d = "Hyderabad";
var c = d.replace("Hyder","Islam");
document.write("City : " + d );
document.write("<br>After replacement : " + c );


// Task 8
var message = "Ali and Sami are best frinds.They play cricket and football together.";
var rep = message.replace(/and/g, "&");
document.write(rep);


// Task 9
var value = "472" ;
var t = typeof value;
document.write("Value : " + value);
document.write(" <br> Type : " + t);
document.write("<br> Value : " + value);
var type =typeof parseInt(value);
document.write("<br> Type : " + type);



// task 10       incomplete

var u = prompt("enter any thing in small letter :");
var c = u.toUpperCase();

document.write("User input :" + u);
document.write(" <br> Upper Case :" + c);


// task 11

var u = prompt("enter any thing in small letter :");
var c = u.();

document.write("User input :" + u);
document.write(" <br> Upper Case :" + c);

















// Task 17
var input = prompt("Enter a string :");
var l = input.charAt(input.length - 1 );
document.write("User input : "+input);
document.write(" <br> Last character of input :  "+l);





// task 18

var v =  "The quick brown fox jumps over the lazy dog . ";
// var c = v.toUpperCase();?
var i =v.
document.write("Text : "+v);
document.write(" <br> There are  "+ i + " occurrences of word 'the' ");
