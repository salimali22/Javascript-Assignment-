// // Assignment 21-25

// // Task 1
// var firstName = prompt("Enter your First Name:");
// var lastName = prompt("Enter your Last Name:");
// var fullName = firstName + lastName ;
// alert("Hello "+fullName);

// // Task 2
// var str = prompt("Enter your favorite mobile phone model");
// document.write("<br><br>My Favorite phone is: "+str);
// document.write("<br><br>Length of String is: "+str.length);

// // Task 3
// var a = "Pakistani";
// document.write("<br><br>String: "+a);
// document.write("<br><br>Index of 'n' is: "+a.indexOf('n',0));

// // Task 4
// var b = "Hello World";
// document.write("<br><br>String: "+b);
// document.write("<br><br>Last index of 'l' is: "+b.lastIndexOf('l'));

// // Task 5
// var b = "Pakistani";
// document.write("<br><br>String: "+b);
// document.write("<br><br>Character at index 3 is: "+b[3]);

// // Task 6
// var firstName = prompt("Enter your First Name:");
// var lastName = prompt("Enter your Last Name:");
// var fullName = firstName.concat(" ",lastName) ;
// alert("Hello "+fullName);

// // Task 7
// var city = "Hyderabad";
// document.write("<br><br>City: "+city);
// document.write("<br><br>After Replacement: "+city.replace("Hyder","Islam"));

// // Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("<br><br>Message: "+message);
// document.write("<br><br>After Replacement: "+message.split("and").join("&"));

// // Task 9
// var d = "472";
// document.write("<br><br> Value: "+d);
// document.write("<br> Type: "+ typeof d);
// d = +d;
// document.write("<br> Value: "+d);
// document.write("<br> Type: "+ typeof d);

// // Task 10
// var random = prompt("Enter any random entry to convert in Uppercase");
// document.write("<br><br> User input: "+random);
// document.write("<br><br> Upper Case: "+random.toUpperCase());

// // Task 11
// var random = prompt("Enter any random entry to convert in tittle case");
// document.write("<br><br> User input: "+random);
// var ran = random.slice(0,1);
// var dom = random.slice(1);
// document.write("<br><br> Upper Case: "+ran.toUpperCase()+dom.toLowerCase());

// // Task 12
// var num = 35.36 ;
// var num = num.toString();
// document.write("<br><br> Number: "+num);
// document.write("<br>Result: "+ num.replace(".",""));

// // Task 13
// var user = prompt("Enter your user name");
// if(user.indexOf("@") != -1 || user.indexOf("!") != -1 || user.indexOf(",") != -1 || user.indexOf(".") != -1){
//     alert("Please enter valid user name");
// }

// // Task 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order = prompt("What do you want to order");
// var index = A.indexOf(order.toLowerCase());
// if(index == -1){
//      document.write("<br><br> We are sorry."+order+" is <b>not available</b> in our bakery")
// }
// else{
//      document.write("<br><br> "+order+" is <b>available</b> at index " +index+" in our bakery")

// }

// // Task 15
// var passwoed = prompt("Enter the Password");
// var passw=  /^[A-Za-z]\w{7,14}$/;
// document.write("<br><br>Enter password: "+passwoed);
// document.write("<br><br>Enter password: "+passwoed.charCodeAt(0));
// if(passwoed.match(passw)){
//     document.write("<br>Correct Password");
// } else if (passwoed.charCodeAt(0) >= 48 && passwoed.charCodeAt(0) <= 57){
//     document.write("<br>Password can not begin with number");

// }
// else{
//     document.write("<br>Password length is not valid");
// }
// document.write("<br>Please enter valid password");

// // Task 16
// document.write("<br><br>");
// var university = "University of Karachi";
// var uni = university.split("");
// alert(uni);
// while(uni.length !== 0){
//     document.write("<br> "+uni.shift());
// }

// // Task 17
// var usr = prompt("Enter any random String");
// document.write("<br><br>User Input: "+usr);
// document.write("<br><br>Last character of Input: "+usr[usr.length-1]);

// // Task 18
// var string = "The quick brown fox jumps over the lazy dog";
// document.write("<br><br>Text: "+string);


// var string = "The quick brown fox jumps over the lazy dog".toLowerCase();
// var flg = 0;
// var ind = 0;
// while(string.indexOf("the",ind) != -1){
// if(string.indexOf("the",ind) != -1){
//     flg++;
//     ind = string.indexOf("the",ind) + 1;
// }}
// document.write("<br>There are "+flg + " occurence(s) of the word 'the'");

// // Assignment 26-30

// // Task 1
// var p_number = +prompt("Enter any positive number");
// document.write("<br><br>number: "+p_number);
// document.write("<br>round off value: "+Math.round(p_number));
// document.write("<br>floor value: "+Math.floor(p_number));
// document.write("<br>ceil value: "+Math.ceil(p_number));

// // Task 2
// var p_number = +prompt("Enter any negative number");
// document.write("<br><br>number: "+p_number);
// document.write("<br>round off value: "+Math.round(p_number));
// document.write("<br>floor value: "+Math.floor(p_number));
// document.write("<br>ceil value: "+Math.ceil(p_number));

// // Task 3
// var a_num = +prompt("Enter any number for absolute: ");
// document.write("<br><br>The absolute value of "+ a_num + " is "+Math.abs(a_num));

// // Task 4
// document.write("<br><br>random dice value: "+Math.round((Math.random()*5)+1));

// // Task 5
// var random  = +Math.round((Math.random())+1)
// document.write("<br><br> "+random);
// if(random % 2 == 0){
//     document.write("<br>random coin value: Heads");
// }
// else{
//     document.write("<br>random coin value: Tails");
// }

// // Task 6
// document.write("random number between 1 and 100: "+Math.round((Math.random()*99)+1));

// // Task 7
// var weight = prompt("Enter your weight in kilograms ");
// document.write("<br><br>The weight of user is "+parseFloat(weight) + " kilograms");

// // Task 8
// var secret_number  = +Math.round((Math.random()*9)+1);
// var guess  = +prompt("Enter the number between 1 and 10");
// if(guess === secret_number){
//     alert("Congratulation");
// }
// else{
//     alert("Try Again!");
// }


// // Assignment 31-34

// // Task 1
// var rightNow = new Date();
// document.write("<br><br> "+rightNow)

// // Task 2
// var month = ["Janurary","Feburary","March","April","May","June","July","August","September","October","November","December"];
// var rightNow = new Date();
// document.write("<br><br>Current month: "+month[rightNow.getDay()]);

// // Task 3
// var rightNow = new Date();
// var datestring = rightNow.toString();
// alert("Today is "+datestring.slice(0,3));

// // Task 4
// var rightNow = new Date();
// if(rightNow.getDay() === 6 || rightNow.getDay() === 0 ){
//     document.write("<br><br>It's Fun day");
// }

// // Task 5
// var rightNow = new Date();
// if(rightNow.getDate() < 16){
//     document.write("<br><br>First fifteen days of the month");
// }
// else{
//     document.write("<br><br>Last days of the month");
// }

// // Task 6
// var rightNow = new Date();
// var sec = rightNow.getTime();
// var minute = sec / 60000 ;
// document.write("<br><br>Current Date: "+rightNow);
// document.write("<br><br>Elapsed milliseconds since Janurary 1, 1970: "+sec);
// document.write("<br><br>Elapsed minutes since Janurary 1, 1970: "+minute);

// // Task 7
// var rightNow = new Date();
// if(rightNow.getHours()<12){
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }

// // Task 8
// var laterDate = new Date("December 31, 2020");
// document.write("Later date: "+laterDate);

// // Task 9
// var ramadan = new Date("June 18, 2015");
// var rightNow = new Date();
// var milli  = rightNow.getTime() - ramadan.getTime() ;
// alert(parseInt(milli / (1000*60*60*24)) + " days have passed since 1st Ramadan, 2015");

// // Task 10
// var begginning = new Date("Janurary 01, 2015 ");
// var refernce = new Date("December 05, 2015 22:50:16");
// document.write("<br><br>Our rerfernce date: "+refernce);
// document.write("<br>"+ (Math.ceil(( refernce.getTime() - begginning.getTime()) / 60000 )) +" seconds had passed since beginning of 2015");

// // Task 11
// var rightNow = new Date();
// var hour = rightNow.getHours();
// hour--;
// var time = rightNow.toString();
// rightNow.setHours(hour) ;
// document.write("<br><br>current date: "+time);
// document.write("<br>1 hour ago, it was "+rightNow);

// // Task 12
// var rightNow = new Date();
// var year = rightNow.getFullYear();
// year -= 100;
// var time = rightNow.toString();
// rightNow.setFullYear(year) ;
// alert("current date: "+time);
// alert("100 years back, it was "+rightNow);

// // Task 13
// var age = +prompt("Enter your age till december 31:") ;
// var rightNow = new Date();
// var year = rightNow.getFullYear();
// year -= age;
// rightNow.setFullYear(year) ;
// document.write("<br><br>Your age is "+age);
// document.write("<br> Your birth year is "+rightNow.getFullYear())

// // Task 14
// var month = ["Janurary","Feburary","March","April","May","June","July","August","September","October","November","December"];
// var customer_name = prompt("Enter the customer name");
// var curr = new Date();
// var no_units = 410;
// var charges = 16;
// var late = charges*no_units + 350;
// var normal = charges*no_units
// document.write("<br><br><h1>K-Electric Bill</h1><br>");
// document.write("<br>Customer Name: "+customer_name);
// document.write("<br>Month: "+ month[curr.getMonth()]);
// document.write("<br>Number of units: "+no_units);
// document.write("<br>Charges per unit: "+charges);

// document.write("<br><br>Net Amount Payable(within Due Date): "+normal);
// document.write("<br>Late payment Surcharge: 350");
// document.write("<br>Gross Amount Payable(after Due Date): "+late);

// // Assignment 35-38

// // Task 1
// function current_time(){
//     var curr_time = new Date();
//     document.write("<br><br> "+curr_time);
// }

// current_time();

// // Task 2
// function greetings(first,last){
//     alert("Hello "+ first+" "+last);
// }

// greetings("Salim","Ali");

// // Task 3
// function sum(num1 , num2){
//     return num1+num2;
// }
// var number_1 = +prompt("Enter first number for addition");
// var number_2 = +prompt("Enter second number for addition");
// document.write("<br><br>Addition of "+number_1+" and "+number_2+ " is "+sum(number_1,number_2))

// // Task 4
// function calculator(num1, num2, operator){
// if(operator == "+"){
//     document.write("<br><br>")
//     document.write(firstNumber+ operator + secNumber + " = "+(firstNumber+secNumber))
// }
// else if(operator == "-"){
//      document.write("<br><br>")
//     document.write(firstNumber+ operator + secNumber + " = "+(firstNumber-secNumber))
// }
// else if(operator == "*"){
//      document.write("<br><br>")
//     document.write(firstNumber+ operator + secNumber + " = "+(firstNumber*secNumber))
// }
// else if(operator == "/"){
//      document.write("<br><br>")
//     document.write(firstNumber+ operator + secNumber + " = "+(firstNumber/secNumber))
// }
// else if(operator == "%"){
//      document.write("<br><br>")
//     document.write(firstNumber+ operator + secNumber + " = "+(firstNumber%secNumber))
// }
// else{
//      document.write("<br><br>")
//     document.write("Invalid Choice")
// }
// }
// var firstNumber = +prompt("Enter first number");
// var secNumber = +prompt("Enter second number");
// var operator = prompt("Enter operator +,-,*,/ or %");
// calculator(firstNumber,secNumber, operator);

// // Task 5
// function square(a){
//  return a*a ;
// }
// var sq = +prompt("Enter number for square");
// document.write("<br><br> Square of "+sq + " is "+square(sq));

// // Task 6
// function factorial(b){
//     if(b == 0 || b === 1){
//         return 1
//     }
//     return b * factorial(b-1);
// }
// var fact = +prompt("Enter number for Factorial");
// document.write("<br><br> Factorial of "+fact + " is "+factorial(fact));

// // Task 7
// function count(start, end){
// document.write("<br><br>")
//     for(var i = start; i<= end; i++){
//         document.write(i+"<br>");
//     }
// }
// var st = +prompt("Enter number of start of counting");
// var en = +prompt("Enter number of end of counting");
// count(st, en);

// // Task 8
// function calculateHypotenuse(prepen, base){
//     function calculateSquare(c){
//         return c*c;
//     }
//     return calculateSquare(prepen) + calculateSquare(base);
// }
// document.write("Hypotenuse is "+ calculateHypotenuse(2,2));

// // Task 9
// function area_rectangle(width, height){
//     document.write("<br><br>Area of rectangle at widht: "+width+ " and height: "+height+ " is "+width*height);
// }
// var w = +prompt("Enter width for Area of rectangle");
// var h = +prompt("Enter height for Area of rectangle");
// area_rectangle(2,2);
// area_rectangle(w,h);

// // Task 10
// function check_palindrome(string){
//     var rev_string = string.split("");
//     rev_string = rev_string.reverse();
//     rev_string = rev_string.join("");
//     if(string === rev_string){
//         document.write("<br><br> "+string+" is palindrome");
//     }
//     else{
//         document.write("<br><br> "+string+" is not palindrome");
        
//     }
// }
// check_palindrome("madam")

// // Task 11
// function first_capital(string_1){
//    var string_2 =  string_1.split(" ");
//    for (var i =0; i< string_2.length; i++){
//    var ran = string_2[i].slice(0,1);
// var dom = string_2[i].slice(1);
// string_2[i] = ran.toUpperCase()+dom.toLowerCase()
// }
// return string_2.join(" ");
// }
// var example = "the quick brown fox";
// document.write("<br><br> EXAMPLE STRING: " +example);
// document.write("<br><br> EXPECTED OUTPUT: " + first_capital(example));

// // Task 12
// function longest(string_1){
//    var string_2 =  string_1.split(" ");
//    for (var i =0; i< string_2.length -1; i++){
//     longest = string_2[i];
//     if(string_2[i].length < string_2[i+1].length){
//         longest = string_2[i+1];
//     }
// }
// return longest;
// }
// var eg = "Web Development Tutorial";
// document.write("<br><br> EXAMPLE STRING: " +eg);
// document.write("<br><br> EXPECTED OUTPUT: " + longest(eg));

// // Task 13
// function count_letter(string, letter){
// var flg = 0;
// var ind = 0;
// while(string.indexOf(letter,ind) != -1){
// if(string.indexOf(letter,ind) != -1){
//     flg++;
//     ind = string.indexOf(letter,ind) + 1;
// }}
// return flg;
// }
// var stg = "JSResourceS.com";
// var lett = '0'
// document.write("<br><br>Occurence of  "+lett+ " in "+stg+" is "+count_letter("JSResourceS.com","o"));

// // Task 14
// function calcCircumference( r){
// document.write("<br><br>The circumference is: "+ 2*3.142*r) ;
// }

// function area(r){
//     document.write("<br><br>The area is: "+ r*3.142*r) ;
// }
// area(1);