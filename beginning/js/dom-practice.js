/*eslint-env browser*/

//STEP 1
function displayClicked() {
    "use strict";
    var clicked = "I have been clicked \nButton 1";
    window.alert(clicked);
}

//STEP 2
window.document.getElementById("button2").onclick = function () {
    "use strict";
    window.alert("I Have Been Clicked \n Button 2");
};


//STEP 3

var x = window.document.getElementById("button3");

function step3() {
    "use strict";
    window.alert("I Have Been Clicked, \n Button 3");
}

x.addEventListener("click", function () {
    "use strict";
    step3();
});


//STEP 4
window.document.getElementById("button4").addEventListener("click", function () {
    "use strict";
    window.alert("I Have Been Clicked, \n Button 4");
});

//STEP 5
window.addEventListener('DOMContentLoaded', function () {
    "use strict";
    window.console.log('DOM fully loaded and parsed');
});

window.document.getElementById("button5").addEventListener("click", function () {
    "use strict";
    window.alert("I Have Been Clicked, \n Button 5");
});


//STEP 6
document.getElementById("redirect").addEventListener("click", function () {
    "use strict";
    window.alert("This Link will redirect you to a different page");
    event.preventDefault();
}, false);


//STEP 7
var btn7 = window.document.getElementById("button7");
var usrI = window.document.getElementById("someTXT");

btn7.addEventListener("click", function () {
    "use strict";
    window.alert("you wrote " + usrI.value);
    btn7.disabled = true;
});

//STEP 8

function init() {
    "use strict";
    var btn8 = window.document.getElementById("stp8");
    btn8.addEventListener("click", function () {
        window.open("newpage.html", "width=300, height=300");
    });
}
window.addEventListener("load", init);


//STEP 9
// Using the BOM .setInterval() method, figure out a way to move display the text “Learning JavaScript is fun!” into the console window every 2 seconds but only when the Start button is clicked. If the user clicks on the Stop button, the console should stop logging the text immediately.
var btnStart = document.getElementById("start");
var btnStop = document.getElementById("stop");
var pause = -1;
var stopInterval = btnStop.addEventListener("click", function () {
    "use strict";
    clearInterval(pause);
    pause = -1;
});


btnStart.addEventListener("click", function () {
    "use strict";
    var pause = -1;
    if (pause === -1) {
        pause = setInterval(function () {
            window.console.log("Learning JavaScript is fun!");
        }, 2000);
    } else {
        stopInterval();
    }
});


document.getElementById("stop").addEventListener("click", clearInterval());
    
//STEP 10 
//Add a drop down list to a web page. Populate the drop down list with 4 items. Add a button next to the drop down list and set the text to “Select”. When the user clicks the button, the item selected in the drop down list should appear within an alert box.