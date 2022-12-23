
$(".dropdown-select").on("click",function(){
  let elem=$(".dropdown-list");
  if(elem.hasClass("active")==true){
    elem.removeClass("active");
  }else{
    elem.addClass("active");
  }
});

$(".dropdown-list a").on("click",function(){
  $(".dropdown-list").removeClass("active");
  $(".kalku").removeClass("show")
  let href=$(this).attr("data-href");
  let elem=$(href);
  if(elem.hasClass("show")==true){
    elem.removeClass("show");
  }else{
    elem.addClass("show");
  }

});



 
// KALKULATOR:
let integer = 0;


$("#kalku1 #increment").on("click", function(){
  integer += 1;
  $("#kalku1 .number").html(integer);
});

$("#kalku1 #decrement").on("click", function(){
  integer -= 1;
  $("#kalku1 .number").html(integer);
});

$("#kalku2 #increment").on("click", function(){
  integer += 1;
  $("#kalku2 .number").html(integer);
});

$("#kalku2 #decrement").on("click", function(){
  integer -= 1;
  $("#kalku2 .number").html(integer);
});

$("#kalku3 #increment").on("click", function(){
  integer += 1;
  $("#kalku3 .number").html(integer);
});

$("#kalku3 #decrement").on("click", function(){
  integer -= 1;
  $("#kalku3 .number").html(integer);
});
$("#kalku4 #increment").on("click", function(){
  integer += 1;
  $("#kalku4 .number").html(integer);
});

$("#kalku4 #decrement").on("click", function(){
  integer -= 1;
  $("#kalku4 .number").html(integer);
});

////////////dodawanie ćwiczenia/////////////
let EXER = ""
const add=localStorage.getItem("name");

if(load){
	EXER=JSON.parse(load);
	$("#other").html(" "+EXER);
}

// $("#additional  #add").on("click", function(){
//   EXER.push("#addexercise");
//   $("#other").html(""+EXER);
//   localStorage.setItem("name",JSON.stringify(EXER));
//   "#other" = "";
// });

// if("#additional  #add").on("click", function(){
//    $("#kalku4")
//     (elem.hasClass("show")==true)
// });
  


// WRZUCANIE DO SETA:

// WCZYTYWANIE DANYCH DO SETS:
let SETS = []
const load=localStorage.getItem("sets");
if(load){
	SETS=JSON.parse(load);
	$("#sets").html("Your sets: "+SETS);
}

$("#kalku1  #done").on("click", function(){
  SETS.push(integer);
  $("#sets").html("Your sets: "+SETS);
  localStorage.setItem("sets",JSON.stringify(SETS));
  integer = 0;
});

///////////kalku2//////
let SETS2 = []
const load2=localStorage.getItem("sets2");
if(load){
	SETS2=JSON.parse(load);
	$("#sets2").html("Your sets: "+SETS2);
}

$("#kalku2  #done").on("click", function(){
  SETS2.push(integer);
  $("#sets2").html("Your sets: "+SETS2);
  localStorage.setItem("sets2",JSON.stringify(SETS2));
   integer = 0;
});

//////////////////kalku3///////////////
let SETS3= []
const load3=localStorage.getItem("sets3");
if(load){
	SETS3=JSON.parse(load);
	$("#sets3").html("Your sets: "+SETS3);
}

$("#kalku3  #done").on("click", function(){
  SETS3.push(integer);
  $("#sets3").html("Your sets: "+SETS3);
  localStorage.setItem("sets3",JSON.stringify(SETS3));
   integer = 0;
///////////////////////////////////////////////////////////
});
let SETS4= []
const load4=localStorage.getItem("sets4");
if(load){
	SETS4=JSON.parse(load);
	$("#sets4").html("Your sets: "+SETS3);
}

$("#kalku4  #done").on("click", function(){
  SETS4.push(integer);
  $("#sets4").html("Your sets: "+SETS4);
  localStorage.setItem("sets4",JSON.stringify(SETS4));
   integer = 0;

});


$(".kalku  #reset").on("click", function(){
  SETS=[]
  SETS2=[]
  SETS3=[]
  SETS4=[]
$(".kalku .number").html(integer=0)
$(".kalku #sets").html("Your sets: ")
$(".kalku #sets2").html("Your sets: ")
$(".kalku #sets3").html("Your sets: ")
$(".kalku #sets4").html("Your sets: ")
  
});


// const sets = JSON.parse(localStorage.getItem("number"));
// console.log(number);





// let wynik=localStorage.getItem("number")
// if(first!=null){
//   get("#first").innerHTML = first;
// }


// get("#SCORE").innerHTML="";
// const wyniki=localStorage.getItem("wyniki");
// if(wyniki!=null){
//   game.points=JSON.parse(wyniki);
//   game.points.forEach(function(value,i){
//     get("#SCORE").innerHTML+=value;
//   });
// }

// localStorage.setItem("wyniki", JSON.stringify(game.points));


