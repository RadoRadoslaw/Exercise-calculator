
$(".dropdown-select").on("click",function(){
  let elem=$(".dropdown-list");
  if(elem.hasClass("active")==true){
    elem.removeClass("active");
  }else{
    elem.addClass("active");
  }
});

