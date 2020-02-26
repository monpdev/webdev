//Check off specific Todos by Clicking

$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
});

//Click on x to delete todos
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type = 'text']").keypress(function(){
    if(event.which === 13){
    //fetch new todo text
        var todoText =  $(this).val();
        $(this).val("");
        //Create a new li and add to ul
        $("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type= 'text'").fadeToggle();
});