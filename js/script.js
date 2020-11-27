   $(document).ready(function(){animateFish1();});
   
    $(document).ready(function(){animateFish2();});

    $(document).ready(function(){animateBubble1();});
    
    $(document).ready(function(){animateBubble2();});       

    $(document).ready(function(){animateBubble3();});

    
//Generates a random number between min and max value
    function randomNum(min, max){
    return Math.floor(Math.random() * (max-min + 1)) + min;         
    }

    //Getting the height of window
    var innerHeight = $(window).innerHeight();                      
    //Gets the width of window    
    var innerWidth = $(window).innerWidth();                            
    //Slowly moves the fish to random positions in the webpage indefinetly
    function animateFish1(){                                           
        $("#fish1Id").animate({top: randomNum(0, innerHeight-200), left: randomNum(0, innerWidth-200)}, 5000, "swing", function(){
            animateFish1();                                             
        });
    }

    function animateFish2(){
        $("#fish2Id").animate({top: randomNum(0, innerHeight-200), left: randomNum(0, innerWidth-200)}, 5000, "swing", function(){
            animateFish2();                                             //Slowly moves the fish to random positions in the webpage indefinetly
        });
    }


    $("#fish2Id").mouseenter(function(){
        $(this).stop();
        $(this).animate({top: randomNum(0, innerHeight-200), left: randomNum(0, innerWidth-200)}, 100, "swing", function(){
        animateFish2();       
        //Makes the small fish to swiftly move to a random position in the page on mouse hover
        });
    });


    $(document).click(function(event){
        $("#fish1Id").stop();
        $("#fish1Id").animate({top: event.pageY, left: event.pageX}, 300, "swing", function(){
            animateFish1();                                             //Makes the big fish to swiftly move to the point of mouseclick
        });
    });
    

   
    $(document).ready(function(){
        $("#fish1Id").dblclick(function(){
        $("#fish1Id").animate({height: "350px", width: "350px"        //Makes the big fish to increase size on double click and again return back to- 
        }).delay(1000).animate({height: "250px", width: "250px"});    //-original size after one second delay
    });    
    });



    function animateBubble1(){
        $("#bubble1Id").fadeIn("fast");                             //Makes the bubble#1 to animate from bottom to top and repeat indefinitely
        $("#bubble1Id").css("top", innerHeight);
        $("#bubble1Id").css("left", randomNum(0, innerWidth));          
        $("#bubble1Id").animate({top: -100}, randomNum(5000, 7000), "linear", function(){
            animateBubble1();
        });
    }

function animateBubble2(){
        $("#bubble2Id").fadeIn("fast");                              //Makes the bubble#2 to animate from bottom to top and repeat indefinitely
        $("#bubble2Id").css("top", innerHeight);
        $("#bubble2Id").css("left", randomNum(0, innerWidth));
        $("#bubble2Id").animate({top: -100}, randomNum(5000, 7000), "linear", function(){
            animateBubble2();
        });
    }

    function animateBubble3(){
        $("#bubble3Id").fadeIn("fast");                              //Makes the bubble#3 to animate from bottom to top and repeat indefinitely
        $("#bubble3Id").css("top", innerHeight);
        $("#bubble3Id").css("left", randomNum(0, innerWidth));
        $("#bubble3Id").animate({top: -100}, randomNum(5000, 7000), "linear", function(){
            animateBubble3();
        });
    }

 $(document).ready(function(){
            $("#bubble1Id").click(function(){
                $(this).stop();                                     //Makes the bubble#1 to fadeout on click and animate the bubble again from bottom
                $("#bubble1Id").fadeOut("slow", function(){
                animateBubble1();
            });
        }); 
    })

    $(document).ready(function(){
            $("#bubble2Id").click(function(){                       //Makes the bubble#2 to fadeout on click and animate the bubble again from bottom
                $(this).stop();
                $(this).fadeOut("slow", function(){
                animateBubble2();
            });
        });    
    });

    $(document).ready(function(){
                $("#bubble3Id").click(function(){                   //Makes the bubble#3 to fadeout on click and animate the bubble again from bottom
                $(this).stop();                            
                $(this).fadeOut("slow", function(){
                animateBubble3();
            });
        });
    });
    