"use strict";

var currentFrame = 0;
var defaultSpeed = 250;
var turboSpeed = 150;
var selectedAnimation = "";
var interval;

jQuery(function(){
    $("#start").click(function(){
        var speed = 0;
        if($("#speed").is(":checked")){
            speed = turboSpeed;
        }
        else{
            speed = defaultSpeed;
        }
        currentFrame = 0;
        selectedAnimation = $("#animation").val();
        $("#start").prop("disabled",true);
        $("#stop").prop("disabled",false);
        interval = setInterval(animate,speed);
    })

    $("#stop").click(function(){
        clearInterval(interval);
        $("#stop").prop("disabled",true);
        $("#start").prop("disabled",false);
    })

    $("#size").change(function(){
        var fontSize = $("#size").val();
        if(fontSize === "tiny"){
            $("#animarea").css("fontSize","7pt");
        }
        if(fontSize === "small"){
            $("#animarea").css("fontSize","10pt");
        }
        if(fontSize === "medium"){
            $("#animarea").css("fontSize","12pt");
        }
        if(fontSize === "large"){
            $("#animarea").css("fontSize","16pt");
        }
        if(fontSize === "extralarge"){
            $("#animarea").css("fontSize","24pt");
        }
        if(fontSize === "xxl"){
            $("#animarea").css("fontSize","32pt");
        }
    })

    var animate = function animate(){
        const animSource = ANIMATIONS[selectedAnimation].split("=====\n");
        if(currentFrame < animSource.length){
            $("#animarea").val(animSource[currentFrame++]);
        }
        if(currentFrame === animSource.length){
            currentFrame = 0;
        }
        
    }
});

