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

//---------------------------------------------------------------------------------------------------------------------//

// function isfizzBuzz(arg){
//     if (typeof arg !== 'number'){
//         return ('Nan - Not a Number! Please Input Number ')
//     }

//     if ((arg % 3 == 0 ) && ( arg % 5 == 0)){
//         return 'fizzBuzz';
//     }

//     if (arg %3 == 0){
//         return 'fizz' ;
//     }

//     if(arg %5 == 0){
//         return 'Buzz';
//     }
//    else{
//     return ('given input number');
//    }
// }

// let check= isfizzBuzz(12);
// console.log(check);

// let check1= isfizzBuzz(15);
// console.log(check1);

// let check2= isfizzBuzz(12);
// console.log(check2);

// let check3= isfizzBuzz(2);
// console.log(check3);

// let check4= isfizzBuzz(10);
// console.log(check4);

//---------------------------------------------------------------------------------------------------------------------//

// speed limit chcek:-

// function isspeedlimit(arg){
//     if (arg < 70 ){
//         return 'Good safe Driving'
//     }

//     if (arg > 70 ){
//         let pp = 0;
//         pp = (arg-70)/5;
//         console.log(pp);
//      if (pp >= 10){
//         return 'License is suspended'
//      }
//       else{
//         return 'your speed limit crossd by penaltiy point '+ pp;

//       }  
//     }
// }

// let check = isspeedlimit(59);
// console.log(check);

//---------------------------------------------------------------------------------------------------------------------//

// function isoddevennumber(curlimit){
//     for (let i = curlimit; i < 10; i++){
//         if ((i % 2)==0){
//             return('even number');
//         }
//         else {
//             return('odd number');
//         }
//     }

// }

// let check= isoddevennumber (4);
// console.log(check);

//---------------------------------------------------------------------------------------------------------------------//

// const valuesArray = [0,5,'',undefined, false,true];

// let truthycount= 0;
// let falsycount= 0;

// function Checkcounttruthyfalsy(CurArray){
    
//     for(let values of CurArray){
//         if(values){
//             truthycount++;
//         }
//         else {
//             falsycount++;
//         }   
//     }
// }

// Checkcounttruthyfalsy(valuesArray);
// console.log(truthycount);
// console.log(falsycount);

//---------------------------------------------------------------------------------------------------------------------//
// Object:-

// function showNumberproperties(CurObj){
//     for(let key in CurObj){
//         console.log(typeof(CurObj[key]));
//         if (typeof(CurObj[key]) === 'number'){
//             console.log(key,':',CurObj[key]);
//         }
//     }
// }

// const person = {
//     name:'Ahsan',
//     age: 22,
//     height:5.5,
//     country:'india',
//     designation: 'web developer'
// }

// showNumberproperties(person);

//---------------------------------------------------------------------------------------------------------------------//

// sumof multiple numbers limit check:-

// function SumofMultipleNumbers(CurLimit){
//     let SumofMultiplevalue = 0;

//     for(let i=1; i <= CurLimit; i++){
//         if(i % 4 === 0 || i % 5 === 0){
//             console.log(i);
//             SumofMultiplevalue +=i;
//         }
//     }

//     console.log (`SumofMultiplevalue of 3 & 5 upto ${CurLimit} and digit is:`, SumofMultiplevalue); 
// }

// SumofMultipleNumbers(10);

//---------------------------------------------------------------------------------------------------------------------//
// password pattern:-

// function SumofNestedValue(){

//     let Rows = 5;
//     for (let i=1; i <= 5; i++)
//     {
//         let pattern = '';
//         for (let l=0 ; l<i ; l++){
//             pattern+= '*';
//         }
//         pattern+='';
//         console.log(pattern);
//     }
// }

// SumofNestedValue();

//---------------------------------------------------------------------------------------------------------------------//
//  javascript help to change html and css code:- Text Change

//  var head = document. getElementById('header-title');
//  console.log(head);
//  headertitle.textContent = 'ansari ahsan'

//---------------------------------------------------------------------------------------------------------------------//

// javascript help to change html and css code :- Button Text Change and background change:-

// var head = document.getElementById('changetext');
// console.log(head);

// function doAction(value){
//     // alert(value);
//     document.getElementById('changetext').innerText = "Sale end !!!!!";
//     head.style.backgroundColor = 'red';
//     head.style.fontFamily = 'calibri';
//     head.style.fontSize = '100px';
// }
//---------------------------------------------------------------------------------------------------------------------//
// javascript help to change html and css code :- click button paragraph and image change:-

var change = document.getElementById('changeAll');
console.log(change);


function doEasy(value){
    // alert(value);
    document.getElementById('changeAll').innerText = "Hello All";
    change.style.backgroundColor = 'purple ';
    document.getElementById('textchanged1').innerText = "i'm  developer" ;
    document.getElementById('textchanged2').innerText = "i'm  developer hi eceryvtvygtvcdexergtfdesdrtghbvces4uhgres45hyvcszrthjuybgvfedtybt" ;
    document.getElementById("photochange").src = "images (1)/ahsan.jpeg";
}

//---------------------------------------------------------------------------------------------------------------------//

// Query selector:-

// var header = document.querySelector('#changetext');
// header.style.borderBottom = 'solid 10px yellow' 
// header.style.fontSize = '40px'
// header.style.backgroundColor = 'black'
// header.style.border = '4px solid red'

//---------------------------------------------------------------------------------------------------------------------//

// this use:-

// var fName = "ahsan"       yeh nahi lega

// var user = {

//     fName: "ahsan",
//     lName: "ansari",
//     email: "ahsau@123gmail.com",
//     role: "Admin",
//     isFbLogin: true,
//     CourseList: [],
//     buyCourse: function (CourseName){
//         this.CourseList.push(CourseName);
//     },
//     getCourseCount: function(){
//         return `${this.fName} ${this.lName}  has enrolled for ${this.CourseList.length} Courses`;
//     }
// }

// console.log(user.fName);
// console.log(user.lName);
// console.log(user.email);
// console.log(user.role);
// console.log(user.isFbLogin);
// user.buyCourse("c++");
// user.buyCourse("java");
// user.buyCourse("python");
// console.log(user.getCourseCount());

//---------------------------------------------------------------------------------------------------------------------//
// darkmode
// const themeToggleBtn = document.querySelector('.btn-toggle');

// const theme = localStorage.getItem('theme');

// theme && document.body.classList.add('darkmode');


// themeToggleBtn.addEventListener('click',() =>{
//     document.body.classList.toggle('darkmode');
//     if(document.body.classList.contains('darkmode')){
//         localStorage.setItem('theme','Darkmode');
//     }else{
//         localStorage.removeItem('theme');
//     }
// });
//---------------------------------------------------------------------------------------------------------------------//

var a = document.querySelector("body")
var b = document.querySelector(".Toggle-ball")
var sunimg =document.querySelector(".sunimage")
var moonimg =document.querySelector(".moonimage")
var navtxt = document.querySelector(".navtxt")
var navtxt1 = document.querySelector(".navtxt1")
var navtxt2 = document.querySelector(".navtxt2")
var navtxt3 = document.querySelector(".navtxt3")
var navtxt4 = document.querySelector(".navtxt4")
var togglebtn =document.querySelector(".btn-toggle")
var homepg =document.querySelector("#home")
var head1 =document.querySelector(".header")
var btncolor =document.querySelector(".btn-color")
var shopbtn =document.querySelector(".shopbutton")
var bgcolorchange =document.querySelector(".bg-color")
var chgbtn =document.querySelector(".changebtn")  
var submitbtn =document.querySelector(".submitbutton")
var secfeature =document.querySelector("#features")
var secproduct =document.querySelector("#product")
var clafeatures =document.querySelector(".features") 
var secnav =document.querySelector("#navbar")
var secabout =document.querySelector("#about")

var flag = 0;

b.addEventListener("click", function(){
    if (flag == 0){
        a.style.backgroundColor ="black"
        a.style.color ="white"
        b.style="transform:translateX(80%)"
        b.style.background="white"
        moonimg.style.visibility ="visible"
        sunimg.style.visibility = "hidden"
        navtxt.style.color ="white"
        navtxt1.style.color ="white"
        navtxt2.style.color ="white"
        navtxt3.style.color ="white"
        navtxt4.style.color ="white"
        togglebtn.style.background= "linear-gradient(180deg,#777,#3a3a3a)"
        homepg.style.background= "black"
        homepg.style.border= "1px solid white"
        head1.style.color="white"
        btncolor.style.backgroundColor="black"        
        btncolor.style.border="1px solid white"
        shopbtn.style.backgroundColor="black"
        shopbtn.style.border="1px solid white"
        bgcolorchange.style.backgroundColor="black"
        bgcolorchange.style.border="1px solid white"
        chgbtn.style.backgroundColor="black"
        submitbtn.style.backgroundColor="black"
        secfeature.style.border="1px solid white"
        secproduct.style.border="1px solid white" 
        clafeatures.style.border="1px solid white"
        secnav.style.border="1px solid white"
        secabout.style.border="1px solid white"
        localStorage.setItem('theme','Dark-mode');

        flag= 1
    }else{
        a.style.backgroundColor = "transparent"
        b.style="transform:translateX(-3%)"
        a.style.color = "black"
        sunimg.style.visibility= "visible"
        moonimg.style.visibility = "hidden"
        navtxt.style.color ="gray"
        navtxt1.style.color ="gray"
        navtxt2.style.color ="gray"
        navtxt3.style.color ="gray"
        navtxt4.style.color ="gray"
        togglebtn.style.background= "whitesmoke"
        homepg.style.backgroundColor= "white"
        homepg.style = "opacity:10px"
        head1.style.color="gray"
        btncolor.style.backgroundColor="blue" 
        bgcolorchange.style.backgroundColor="blue"
        shopbtn.style.backgroundColor="blue"
        chgbtn.style.backgroundColor="blue"
        submitbtn.style.backgroundColor="blue"
        localStorage.setItem('theme','Light-mode');

        flag=0
    }
})