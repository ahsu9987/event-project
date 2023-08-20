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

let hello = "hii"; 
hello = "hey hii"; //global
let times = 4 ;

if (times > 3){
    let hello1 = "hi bro" + hello  ; 
    console.log(hello1);
}
console.log(hello);