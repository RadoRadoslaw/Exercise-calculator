
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

  let href=$(this).attr("data-href");
  let elem=$(href);
  if(elem.hasClass("active")==true){
    elem.removeClass("active");
  }else{
    elem.addClass("active");
  }

});





 
// KALKULATOR:
let integer = 0;

$("#kalku #increment").on("click", function(){
  integer += 1;
  $("#kalku #number").html(integer);
});

$("#kalku #decrement").on("click", function(){
  integer -= 1;
  $("#kalku #number").html(integer);
});

// WRZUCANIE DO SETA:

// WCZYTYWANIE DANYCH DO SETS:
let SETS = []

const load=localStorage.getItem("sets");
if(load){
	SETS=JSON.parse(load);
	$("#sets").html("Your sets: "+SETS);
}

$("#kalku #done").on("click", function(){
  SETS.push(integer);
  $("#sets").html("Your sets: "+SETS);
  localStorage.setItem("sets",JSON.stringify(SETS));
  integer = 0;
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


