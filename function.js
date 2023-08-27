// function checkAge(age){
// if (age >=18){
//     return true;
// }
// else{
//     return confirm('Do You have permission form your parents?');
// }
// }

// let age = prompt(' How Old are you?',18);
//     if (checkAge (age)){
//         alert('Access granted');
//     }
//     else{
//         alert('Access denied');
//     }

//---------------------------------------------------------------------------------------------------------------------//

// function sum(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function mul(a,b){
//     return a*b;
// }
// function divi(a,b){
//     return a/b;
// }

// let firstNum = prompt ('please enter first number');
// let secNum = prompt ('please enter second number');
// firstNum = Number(firstNum);
// secNum = Number(secNum);

// let additionresult = sum(firstNum ,secNum);
// let substractionresult = sub(firstNum ,secNum);
// let multipilcationresult = mul(firstNum ,secNum);
// let divisionresult = divi(firstNum ,secNum);

// alert("the Result of addition is=" + additionresult);
// alert("the Result of substraction is" + substractionresult);
// alert( "the Result of multiplication is" +multipilcationresult);
// alert("the Result of division is" +divisionresult);

//---------------------------------------------------------------------------------------------------------------------//

// function showMessage(){
//     var message = "Hello I am Ahsan" //local variable
//     alert ( message );
// }

// showMessage(); //hello I'm ahsan
// alert(message); 

//---------------------------------------------------------------------------------------------------------------------//

// var greeter = "hey hi"; //global 
// var times = 4;

// if (times > 3){
//     var greeter = "hey hi ahsan"; //redefined
// }
// console.log(greeter); // hey hi ahsan

//---------------------------------------------------------------------------------------------------------------------//
//  var greeter = "hey hi"; //global
//  var times = 4;

//  if (times > 3){
//     var greeter = "hey hi ahsan"; //redefined
// }
 
// function showMessage(){
//     var greeter = "hey hi ansari"; //redefined
//       console.log(greeter)
// }

// console.log(greeter); //hey hi ahsan
// showMessage();
// console.log(greeter); // hey hi ansari

//---------------------------------------------------------------------------------------------------------------------//

// let hello = "hii"; 
// hello = "hey hii"; //global
// let times = 4 ;

// if (times > 3){
//     let hello1 = "hi bro" + hello  ; 
//     console.log(hello1);
// }
// console.log(hello);
// //---------------------------------------------------------------------------------------------------------------------//
// console.log('1-swapping-variables');

// let var1 = "one";
// let var2 = "two";

// console.log('before swap in var1 :',var1);
// console.log('before swap in var2 :',var2);


// let tempvar = var1;
// var1 = var2;
// var2 = tempvar;

// console.log('After swap in var1', var1);
// console.log('After swap in var2', var2);

//---------------------------------------------------------------------------------------------------------------------//

// function findMaxNumberLong(num1 , num2){
// // 1. long syntax
// if(num1>num2){
//     return num1
// } 
// else if (num1==num2){                        //...numbers are equal
//     alert("Number are equal")
// }
// else
// {
//     return num2
// }
// }

// function findMaxNumberShort(num1 , num2){
//     // 2. short syntax 
//     if(num1 > num2) return num1;
//     else if (num1==num2){                        //...numbers are equal
//         alert("Number are equal")
//     }
//     else return num2;  
// }

// function findMaxNumberternaryShort(num1 , num2){
//  // 3.ternary short syntax
// return (num1 > num2) ? num1 : num2;
// }

// let checkMax1 = findMaxNumberLong(10,10);                            //...numbers are equal
// console.log('Max Number from Long Syntax :', checkMax1);

// let checkMax2 = findMaxNumberShort(25,25);                        //...numbers are equal
// console.log('Max Number from Long Syntax :', checkMax2);

// let checkMax3 = findMaxNumberternaryShort(100,100);
// console.log('Max Number from Long Syntax :', checkMax3);

//---------------------------------------------------------------------------------------------------------------------//

// function isLandscapePortrait(width , height){
//     if(width>height){
//         return "Landscape";
//     }
//     else{
//         return "portrait";
//     }
// }

// // function isportrait(height, width){
// //     return (height > width);
// // }

// let checkWidthHeight1 = isLandscapePortrait(1024, 400);
// console.log('Landscape:',checkWidthHeight1);

// let checkWidthHeight2 = isLandscapePortrait(300,900 );
// console.log('portrait:',checkWidthHeight2);