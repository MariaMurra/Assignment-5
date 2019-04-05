/*eslint-env browser*/
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

function enter(val) {
    "use strict";
    window.document.getElementById("result").value += val;
}

function calculate() {
    "use strict";
    $("result").value += "=" + eval($("result").value);
}

function theButtons(e) {
    "use strict";
    if (e.target !== e.currentTarget) {
        var clickedButton = e.target.value;
        enter(clickedButton);
    }
    e.stopPropagation();
}

function init() {
    "use strict";
  
   /* $("one").addEventListener("click", enter($("one").value), false);
    $("two").addEventListener("click", enter($("two").value), false);
    $("three").addEventListener("click", enter($("three").value), false);
    $("four").addEventListener("click", enter($("four").value), false);
    $("five").addEventListener("click", enter($("five").value), true);
    $("six").addEventListener("click", enter($("six").value), false);
    $("seven").addEventListener("click", enter($("seven").value), false);
    $("eight").addEventListener("click", enter($("eight").value), false);
    $("nine").addEventListener("click", enter($("nine").value), false);
    $("zero").addEventListener("click", enter($("zero").value), false);
    $("divide").addEventListener("click", enter($("divide").value), false);
    $("multiply").addEventListener("click", enter($("multiply").value), false);
    $("subtract").addEventListener("click", enter($("subtract").value), false);
    $("period").addEventListener("click", enter($("period").value), false);
    $("add").addEventListener("click", enter($("add").value), false);*/
    $("equal").addEventListener("click", calculate);
    
    
    var myDiv = window.document.getElementById("wrapperDiv");
    myDiv.addEventListener("click", theButtons, false);
    
}

window.addEventListener("load", init);


