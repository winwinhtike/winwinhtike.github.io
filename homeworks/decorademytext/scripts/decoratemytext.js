window.onload = function() {

    var textBoxElement = document.getElementById("box");

    var txtAreaItem = document.getElementById("item"); 
    txtAreaItem.style.textAlign = "right";
    txtAreaItem.style.paddingRight = "20pt";

    // Button Big Decorations
    var btnBiggerDecoration = document.getElementById("biggerDecoration");
    btnBiggerDecoration.onclick = showAlert;

    // Area Checkbox Bling
    var checkboxBling = document.getElementById("checkBoxBling");
    checkboxBling.style.display = "block";

    // Checkbox Bling
    var checkBling = document.getElementById("bling");
    checkBling.onchange = showAlertOnBling;

    // Button PigLatin
    var btnPigLatin = document.getElementById("pigLatin"); 
    btnPigLatin.onclick = translatePigLatin;

    // Button Malkovich
    var btnMalkovich = document.getElementById("malkovitch"); 
    btnMalkovich.onclick = malkovich;

    // Block of Functions
    function changeColor() {
        console.log("Color");
        textBoxElement.style.color = "red";
    }
    
    function changeFontSize() {
        console.log("Size");
        textBoxElement.style.fontSize = "16pt";
    }
    
    function changeFontWeight() {
        textBoxElement.style.fontWeight = "bold";
    }

    function showAlert() {
        alert("Hello, world!");
        setIntervalFontTimer()
    }

    function showAlertOnBling() {
        alert("Hello, world!");
        makeBoldText();
        changeBackground();
    }

    function changeBackground() {
        txtAreaItem.style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
    }
     
    function biggerText() {
        txtAreaItem.style.fontSize = "24pt";
    }

    function makeBoldText() {
       
        if (document.getElementById("bling").checked) {
            txtAreaItem.style.fontWeight = "bold";
            txtAreaItem.style.color = "green";
            txtAreaItem.style.textDecoration = "underline";
        } else {
            txtAreaItem.style.fontWeight = "normal";
        }
    }


    function fontTimer() {

        var size = parseInt(document.getElementById("item").style.fontSize);
        size += 2; 
        document.getElementById("item").style.fontSize = size + "pt";
    }

    function setTimer() {
        setTimeout(fontTimer, 500);
    }

    timer = null; // stores ID of interval timer 
    function setIntervalFontTimer() {
        if (timer === null) {
        timer = setInterval(setTimer, 1000);
        } else { 
            clearInterval(timer); 
            timer = null;
        } 
    }

    function translatePigLatin() {
        // Get Input PigLatin Value
        var inputPigLatin = document.getElementById("inputPigLatin"); 
        var valueInput = inputPigLatin.value;

        var newStrArray = valueInput.split('');
          for (var i = 0; i < newStrArray.length; i++) {
            var letter = newStrArray[0];
            if (i === 0) {
              if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
                  newStrArray.push('way');
                  break;
              } else {
                newStrArray.push(newStrArray.splice(0, 1)[0]);
              }
            } else {
              if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
                  newStrArray.push('ay');
                  break;
              } else {
                newStrArray.push(newStrArray.splice(0, 1)[0]);
              }
            }
          }
          inputPigLatin.value = newStrArray.join('');
          return newStrArray.join('');
    }

    function malkovich() {
         // Get Input PigLatin Value
         var inputPigLatin = document.getElementById("inputPigLatin"); 
         var valueInput = inputPigLatin.value;

         if (valueInput.length >= 5) {
            inputPigLatin.value = "Malkovich";
         }
    }
};
