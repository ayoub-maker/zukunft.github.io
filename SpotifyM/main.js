
  $(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $(".class").css({"opacity":"0.6"})
            $(".link1").hover(function(){
                $(".link1").css({"color":"rgb(63, 177, 63)"})
            },function(){
               $(this).css({"color":"white"})            
            })
            $(".link2").hover(function(){
                $(".link2").css({"color":"rgb(63, 177, 63)"})
            },function(){
                $(this).css({"color":"white"}) 
            })
            $(".link3").hover(function(){
                $(".link3").css({"color":"rgb(63, 177, 63)"})
            },function(){
                $(this).css({"color":"white"}) 
            })    
        }
        else{
            $(".class").css({"opacity":"0"})
            $(".link1").hover(function(){
                $(".link1").css({"color":"black"})
            },function(){
                $(this).css({"color":"white"}) 
            })
            $(".link2").hover(function(){
                $(".link2").css({"color":"black"})
            },function(){
                $(this).css({"color":"white"}) 
            })
            $(".link3").hover(function(){
                $(".link3").css({"color":"black"})
            },function(){
                $(this).css({"color":"white"}) 
            })
            
          
        }
    })
  })

  $(document).ready(function(){
    $(".if ").click(function(){
      $(".dropdown-content").toggle("100ms");
    });
  });