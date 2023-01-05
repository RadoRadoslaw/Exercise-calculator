
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


// $("#content  #add").on("click", function(){
//   EXER += $("#addexercise").val();
//   $(".other").html(""+EXER);
//   localStorage.setItem("name", EXER);
//   localStorage.clear();
  
// });


//   if ($("#kalku4 #reset").on("click", function(){
//     $(".other").html("")
// }));


$(".dropdown-list a.play" ).on("click",function(){
  generate();
});



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
if(load2){
	SETS2=JSON.parse(load2);
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
if(load3){
	SETS3=JSON.parse(load3);
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
if(load4){
	SETS4=JSON.parse(load4);
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

///////////////////////////////////////////////////////////
let EXER = ""
const add=localStorage.getItem("name");

if(add){
  EXER=(add);
  $(".other").html(""+EXER);
}

const data=[
  {
       title:"dodaj ćwiczenie",
				description:""
        
  }
];

function generate(){
  // Pętla które przepierdziela Array obiektów o nazwie "data":
  data.forEach(function(element){
    console.log(element)
    $("#content").append(`
      <div class="card">
        <h1 class="title">${element.title}</h1>
        <div class="description">${element.description}</div>
        <input type="text" id="addexercise"></input>
        <button id="add">dodaj</button>
      </div>
    `);
    
  });
  	// Dodanie akcji do wszystkich button'ów w elemencie #content akcji usuwania elementu "card", parentNode to rodzic elementu button

    $("#content #add").on("click",function(){
      this.parentNode.remove();
      $("#kalku4").addClass("show");
      EXER += $("#addexercise").val();
      $(".other").html(""+EXER);
      localStorage.setItem("name", EXER);
      localStorage.clear();
    });
}