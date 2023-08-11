//************ Question 1 ************//

// function date (){
//     document.write(new Date());
// }
// date();



//************ Question 2 ************//

// function greet(){
//     var firstName = prompt("enter first name");
//     var lastName = prompt("enter last name");
//     var fullName = firstName  + " " + lastName;
//     document.write(fullName);
// }
// greet();


//************ Question 3 ************//

// function sum(){
//     var num1 = +prompt("enter a number");
//     var num2 = +prompt("enter a number");
//     var sum = num1 + num2;
//     return sum;
// }

// document.write(sum());


//************ Question 4 ************//

// function cal(num1, num2, opr){
//     if(opr === "+"){
//         return num1 + num2 ;
//     }
//     else if (opr === "-"){
//         return num1 - num2 ;
//     }
//     else if (opr === "*"){
//         return num1 * num2 ;
//     }
//     else if (opr === "/"){
//         return num1 / num2 ;
//     }
//     else if (opr === "%"){
//         return num1 % num2 ;
//     }
//     else if (opr === "**"){
//         return num1 ** num2 ;
//     }
//     else{
//         return "invalid operator";
//     }
// }

// document.write("<br>" + cal(12 , 6, "+"));
// document.write("<br>" + cal(12 , 6, "-"));
// document.write("<br>" + cal(12, 6, "*"));
// document.write("<br>" + cal(12, 6, "/"));
// document.write("<br>" + cal(12, 6, "%"));
// document.write("<br>" + cal(12, 6, "**"));
// document.write("<br>" + cal(12, 6, "&"));


//************ Question 6 ************//

// function factorial (fact){
//     var num = fact;
//     for(var i = 1; i < fact; i++){
//         num *= i
//     }
//     return num;
// }
// document.write(factorial(+prompt("enter a number")));


//************ Question 7 ************//

// function counting(startNum,endNum){
    
//     for(var i = startNum; i <= endNum; i++){
//         document.write(i + "<br>");
//     }
// }
// counting(+prompt("Enter starting value:"), +prompt("Enter End value:"));


//************ Question 8 ************//

// function hypotenuse(){
//     var base = prompt("base");
//     var perp = prompt("perpendicular");
//     var hyp = (base ** 2) + (perp ** 2);
//     // console.log(hyp);
//     function square(){
//         return Math.sqrt(hyp)
//     }
//     return "Hypotenous = " + square();
//     }
// document.write(hypotenuse());


//************ Question 9 ************//

// var height = 10;
// function rectangle(width, height){
//     return width * height;
// }
// document.write("The area of rectangle is : " + rectangle(6, height));


//************ Question 10 ************//

// function palindrome(word){
//     var check = "";
//     for(var i = word.length -1 ; i >= 0; i--){
//         check += word[i]
//     }
//     if(check === word){
//         alert("this word is : " + word + " palindrome");
//     }else{
//         alert("this word is not a palindrome");
//     }
// }

// document.write("palindrome word is : " + palindrome(prompt("enter a word to check it`s a palindrome")))



//************ Question 11 ************//

// function capitalize(sen){
//     var words = sen.split(" ");
//     var arr = []
//     for(var i = 0; i < words.length; i++){
//         var result = words[i][0].toUpperCase() + words[i].slice(1);
//         arr.push(result);
//         // document.write(result.join(""));
//     }
//     document.write("Example String : " + sen + "</br>");
//     document.write("Expacted Output : " + arr.join(" "));
// }
// capitalize(prompt("Enter a four words string"));


//************ Question 12 ************//

// function longestWord(sen){
//     var words = sen.split(" ");
//     var long = words[0];
//     for(var i = 0; i < words.length; i++){
//         if(words[i].length > long.length){
//             long = words[i];
//         };
//     }

//     document.write("User Enter Words is : " + sen + "</br>");
//     document.write("The longest word is : " + long);

// }
// longestWord(prompt("Enter a word to check in which word is longest"));