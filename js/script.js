
//java 

function dev_html(){
  document.getElementById('html').innerHTML='> JavaScript.';

}
// function dev_css(){
//    document.getElementById('css').innerHTML='> Cascading Style Sheets.'

// }
// function dev_cms(){
//    document.getElementById('cms').innerHTML='> Content management system.'

// }
//ex_2
function ad(){
  document.getElementById("ng").src="images/bbb.png"; 
  

}
function adn(){
  document.getElementById("ng").src="images/ggg.png"; 
  

}
//ex_3
function t_color(){
  document.getElementById("color").style.color="red";
} 
//ex_4
function show(){
  document.getElementById("text").style.display="block";
} 
function hide(){
  document.getElementById("text").style.display="none";
} 
//ex_5
function dw(){
  document.write("WELCOME");
} 
//ex_6
function wa(){
 window.alert("Thank you..");
} 
//ex_7
function ld(){
 document.getElementById("td").innerHTML= 
 Date();

}
//ex_8
function fs(){
 document.getElementById("f_a").style.fontSize='50px';

} 
//ex_9
function clog(){
  console.log("cosole");
} 
//ex_10
  var number1 = 308;
  var number2 = 308;
  a = number1 + number2;

function va(){
  document.getElementById("v_a").innerHTML=
  a;
} 


//ex_11

  let nam1 , nam2 , result;
  nam1 =100;
  nam2 =308;
  b = nam1+nam2;

function lv(){
  document.getElementById("l_a").innerHTML=
  b;
} 
  
 //ex_12

 const po1 = 210;
 const po2 = 111;
 c = po1 + po2;

function cv(){
 document.getElementById("c_a").innerHTML=
 c;
} 

 //ex_13

 const dd1 = 'ssb ';
 const pi = 616;
 d = dd1 + pi;

function dt(){
 document.getElementById("d_a").innerHTML=
 d;
} 
 //ex_14

 const aa = 222;


function ao(){
 document.getElementById("a_a").innerHTML=
 aa;
}
 //ex_15

 let  jjj = 111;
 let  kkk = 333;
 let lll = jjj + kkk;


function aao(){
 document.getElementById("a_aa").innerHTML=
 lll;
}  
 //ex_16

 let  mmm = 5;
 let  ooo = 5;
 let m1 = mmm * ooo;


function mo(){
 document.getElementById("m_o").innerHTML=
 m1;
} 
 //ex_17

 var  aa1 = 55;
 var  aa2 = 5;
 var aoo = aa2 += aa1;


function aaa(){
 document.getElementById("aaa_o").innerHTML=
 aoo;
}
//ex_18

 let  co1 = 'A';
 let  co2 = 'B';
 let coo = co1 < co2;


function co(){
 document.getElementById("c_o").innerHTML=
 coo;
}
//ex_19
let  A1 = 3;
let  A2 = 100;
let  AA2 = (100 + 50) *A1;


function Ao(){
document.getElementById("A_o").innerHTML=
AA2;
}
//ex_20
let  as1 = 2 + 2 ;
let  as2 = "<br> 9" + 9;
let  as3 = "<br>Hello" + 5;
let  as4 =  as1 + as2 + as3;


function As(){
document.getElementById("A_s").innerHTML=
as4;
}
//ex_21
let  do1 = 200;
let  do2 = 2;
let  do3 =  do1 / do2 ;


function doo(){
document.getElementById("d_o").innerHTML=
do3;
}
//ex_22
let  so1 = 100;
let  so2 = 40;
let  so3 =  so1 - so2 ;


function so(){
document.getElementById("s_o").innerHTML=
so3;
}
//ex_23
function count(){
 document.getElementsByClassName("p")[1].innerHTML ="hello";
 
}
//ex_24
function bcount(){
 var info = document.getElementsByTagName("button")
 alert(info.length); 
}
//ex_25
let e = 0;
function ecount(){
 document.getElementById('ev').innerHTML= e += 1;
}
//ex_26
function onbe(){
 return "Write something clever here...";



}
//ex_27
function onbl(){
 let bl = document.getElementById('fname')
 bl.value = bl.value.toUpperCase();
}
//ex_28
function dc(){
 var c = document.getElementById('car').value;
 document.getElementById('s_car').innerHTML = "You selected: " + c;
}
//ex_29
function oc(){
 document.getElementById('o_c').innerHTML = "You copied text!";

}
//ex_30
function occ(){
 document.getElementById('o_cc').innerHTML = "You cutted text!";

}
//ex_31
function od(){
 document.getElementById('o_d').innerHTML = "Hello";

}
//ex_32
function dragStart(event) {
 event.dataTransfer.setData("Text", event.target.id);
}

function dragEnter(event) {
 if (event.target.className == "droptarget") {
   document.getElementById("demo").innerHTML = "Entered the dropzone";
   event.target.style.backgroundColor = "pink";
 }
}

function dragLeave(event) {
 if (event.target.className == "droptarget") {
   document.getElementById("demo").innerHTML = "Left the dropzone";
   event.target.style.backgroundColor = "";
 }
}

function allowDrop(event) {
 event.preventDefault();
}

function drop(event) {
 event.preventDefault();
 const data = event.dataTransfer.getData("Text");
 event.target.appendChild(document.getElementById(data));
}
//ex_33
function od(){
 document.getElementById('o_dd').innerHTML = "The audio has ended";
}
//ex_34
function er(){
 document.getElementById('e_r')
 alert("The image could not be loaded.");

}
//ex_35
function of(x){
 document.getElementById('e_r')
 x.style.background ="pink";

}
//ex_36
function oi() {
 let text = document.getElementById("myInput").value;
 document.getElementById("o_i").innerHTML = "You wrote: " + text;
}
//ex_38
function ol() {
 alert("Meta data for video loaded");
}
//ex_39
function mouseDown() {
 document.getElementById("myP").style.color = "red";
}

function mouseUp() {
 document.getElementById("myP").style.color = "blue";
}
//ex_40
function bigImg(x) {
 x.style.height = "64px";
 x.style.width = "64px";
}

function normalImg(x) {
 x.style.height = "32px";
 x.style.width = "32px";
}
//ex_41
function om(e) {
 let x = e.clientX;
 let y = e.clientY;
 let coor = "Coordinates: (" + x + "," + y + ")";
 document.getElementById("o_m").innerHTML = coor;
}

function clearCoor() {
 document.getElementById("o_m").innerHTML = "";
}
//ex_42
function op() {
 alert("Welcome!");
}
//ex_43
function opp() {
 document.getElementById("o_pp").innerHTML = "You pasted text!";
}
//ex_44
function pv() {
 document.getElementById("v_p").innerHTML = "The video was paused.";
}
//ex_45
function opv() {
 document.getElementById("ov_p").innerHTML  += "The video is playing. ";
}
//ex_46
function or() {
 alert("The form was reset");
}
//ex_47
function os() {
 var x = document.getElementById("my");
 document.getElementById("o_ss").innerHTML = "You are searching for: " + x.value;
}
//ex_48
function ose() {
 alert("You selected some text!");
}
//ex_49
function ot() {
 alert("The ontoggle event occured");
}
//ex_50
function ov() {
 document.getElementById("o_v").innerHTML += "The volume has been changed! ";
}


