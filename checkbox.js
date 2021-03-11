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
    $(".parent").click(function(){
        $(".child").find("input[type='checkbox']").prop("checked",true);
    });

    $(".child").click(function(){
        if(!($(this).find("input[type='checkbox']").is(':checked'))){
            $(".parent").find("input[type='checkbox']").prop("checked",false);

        }      
    });

    $(".child").find("input[type='checkbox']").click(function(){
            $(".parent").find("input[type='checkbox']").prop("checked",true);
    });    
    
    $(".parent1").click(function(){
        $(".child1").find("input[type='checkbox']").prop("checked",true);
    });

    $(".child1").click(function(){
        if(!($(this).find("input[type='checkbox']").is(':checked'))){
            $(".parent1").find("input[type='checkbox']").prop("checked",false);

        }      
    });

    $(".child1").find("input[type='checkbox']").click(function(){
        $(".parent1").find("input[type='checkbox']").prop("checked",true);
    });

});

