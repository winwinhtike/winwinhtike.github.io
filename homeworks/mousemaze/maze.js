jQuery(function(){
    var failed = false;
    var started = false;
    var finished = false;
    const startingPosition = $("#start").position();
    const dimentionWidth = $("#start").width()/2;
    const dimentionHeight = $("#start").height()/2;
    $("#start").click(function(){
        failed = false;
        started = true;
        finished = false;
        resetMaze();
        showNotification("Maze started!")

        
        $("#maze").mousemove(function(e){
            let maze = $(this).position();
            console.log(maze.left);
            if(failed || finished || $("#start").position().left < 0){
                $("#start").offset({top: maze.top + startingPosition.top ,left: maze.left + startingPosition.left})
                return;
            }
            $("#start").offset({top: maze.top + (e.pageY-maze.top) - dimentionHeight,left:  maze.left+(e.pageX-maze.left) - dimentionWidth})
            
        })
       
    })

    $(".boundary").mouseenter(function(){
        if(started && !failed){
            $(".boundary").css("backgroundColor","red");
            failed = true;
            showNotification("Sorry, you lose! Click on the\"S\" to restart.","error")
        }
        
    })

    function resetMaze(){
        $(".boundary").css("backgroundColor","#eeeeee");
    }

    function showNotification(notifaction,type){
        if(type === "error"){
            $("#status").css({color: "red"});
        }
        else if(type === "win"){
            $("#status").css({color: "green"});
        }
        else{
            $("#status").css({color: "black"});
        }
        $("#status").html(notifaction);
    }

    $("#end").mouseenter(function(){
        if(!failed && started){
            finished = true;
            showNotification("Congratulations, you WIN! Click on the \"S\" to play again.","win");
            $("#start").offset({top: maze.top + startingPosition.top ,left: maze.left + startingPosition.left})
        }
        else if(!started){
            //return;
        }
        else{
            showNotification("Sorry, you lose! Click on the\"S\" to restart.","error")
        }
        started = false;
    })

    $("#maze").mouseleave(function(){
        if(started){
            
            $(".boundary").css("backgroundColor","red");
            showNotification("Sorry, you lose! Click on the\"S\" to restart.","error")
        }
        failed = true;
        started = false;
        
    })

})