
window.onload = function() {
   
    var btnBooyah1 = document.getElementById("booyah1"); 
    btnBooyah1.onclick = setTimeout1;

    var btnBooyah2 = document.getElementById("booyah2"); 
    btnBooyah2.onclick = setTimeout2;

    var btnAlertX = document.getElementById("alertX"); 
    btnAlertX.onclick = alertX;

    var btnAlertY = document.getElementById("alertY"); 
    btnAlertY.onclick = alertY;

    var btnMyBooyah1 = document.getElementById("myBooyah1"); 
    btnMyBooyah1.onclick = booyah1;

    var btnMyBooyah2 = document.getElementById("myBooyah2"); 
    btnMyBooyah2.onclick = booyah2;

    var myfunc = function(a, x) {
        return a * x;
    };
    
    var x = myfunc(2, 3);
    var y = myfunc;
   
    function alertX() {
        alert(x);
    }
    
    function alertY() {
        alert(y(2,3));
    }
};

function booyah() { 
    console.log("booyah");
}

function setTimeout1() {
    setTimeout(booyah, 2000);
}
// Wrong way to do it with parenthesis
function setTimeout2() {
    setTimeout(booyah(), 2000);
}

function alertbooyah() {
    alert("booyah");
}

function booyah1() { 
    setTimeout(alertbooyah, 2000);
}

// Wrong way to do it with parenthesis
function booyah2() { 
    setTimeout(alertbooyah(), 2000);
}



