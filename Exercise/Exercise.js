
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
let add = document.getElementById("increment");

let remove = document.getElementById("decrement");

let int = document.getElementById("number");

let integer = 0;

add.addEventListener("click", function(){
  integer += 1;
  int.innerHTML = integer;
});

remove.addEventListener("click", function(){
  integer -= 1;
  int.innerHTML = integer;
});

let done = document.getElementById("done");

// done.addEventListener("click", function(){
//   integer = 0
//   int.innerHTML = integer;
// });

// WRZUCANIE DO SETA:
const SETS = []
done.addEventListener("click", function(){
  SETS.push(integer);
  document.querySelector("#sets").innerHTML="Your sets: "+SETS;
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


