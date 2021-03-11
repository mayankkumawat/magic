var expanded = false;

$(document).ready(function(){
    $(".selectbox").click(function(){
        if (!expanded) {
            $("#checkboxes").css("display","block");
            expanded = true;                        

        } else {
            $("#checkboxes").css("display","none");
            expanded = false;
        }
    });
   
    // parent check, child check | parent uncheck, child uncheck

    $("#checkboxes").on('change','.parent',function(){
        $(this).next().children().find("input[type='checkbox']").prop("checked", $(this).children().find("input[type='checkbox']").prop("checked"));
    });

    // single child check, parent will checked automatically
    
    $(".child").click(function(){
        $(this).prev().find("input[type='checkbox']").prop("checked",true);
    });

    // all childs unselected, parent unselected

    $(".child").click(function(){
        if(!($(this).find("input[type='checkbox']").is(':checked'))){
            $(this).prev().find("input[type='checkbox']").prop("checked",false);
    
        }      
    });
  
});

