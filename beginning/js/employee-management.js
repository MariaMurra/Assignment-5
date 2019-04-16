/*eslint-env browser*/
var employee1 = [], employee2 = [], employee3 = [], employee4 = [], employee5 = [],
    employees = [employee1, employee2, employee3, employee4, employee5],
    i,  numberOfEmployees = employees.length,
    $ = function (id) {
        "use strict";
        return window.document.getElementById(id);
    };

employee1.name = "John";
employee1.title = "Snake Milker";
employee1.extension = 121;

employee2.name = "Jacob";
employee2.title = "Lab Rat";
employee2.extension = 122;

employee3.name = "Jinker";
employee3.title = "Animal Colourist";
employee3.extension = 123;

employee4.name = "Heimer";
employee4.title = "Master Handshaker";
employee4.extension = 124;

employee5.name = "Smith";
employee5.title = "Chocolate Taster";
employee5.extension = 125;

    
/*window.console.log(employees);*/

window.document.write("<h1> The Employee Management Application </h1>");
window.document.write("<h3> Add Employee</h3>");


//FORM 

function form() {
    "use strict";
    var myForm = window.document.createElement("FORM"),
        frmInputName = window.document.createElement("INPUT"),
        frmInputTitle = window.document.createElement("INPUT"),
        frmInputExt = window.document.createElement("INPUT"),
        frmInputButton = window.document.createElement("INPUT");
        
            
    
    //SETTING THE FORM ON THE BODY
    myForm.setAttribute("id", "addEmployeeForm");
    window.document.body.appendChild(myForm);
    
    // NAME INPUT
    frmInputName.setAttribute("type", "text");
    frmInputName.setAttribute("id", "newEName");
    frmInputName.setAttribute("value", "Enter Name");
    window.document.getElementById("addEmployeeForm").appendChild(frmInputName);
   
    //TITLE INPUT
    frmInputTitle.setAttribute("type", "text");
    frmInputTitle.setAttribute("value", "Enter Title");
    frmInputTitle.setAttribute("id", "newETitle");
    window.document.getElementById("addEmployeeForm").appendChild(frmInputTitle);
    
    //EXTENSION INPUT
    frmInputExt.setAttribute("type", "text");
    frmInputExt.setAttribute("value", "Enter Extension");
    frmInputExt.setAttribute("id", "newExtension");
    window.document.getElementById("addEmployeeForm").appendChild(frmInputExt);
   
    // BUTTON
    frmInputButton.setAttribute("type", "button");
    frmInputButton.setAttribute("value", "add");
    frmInputButton.setAttribute("id", "addButton");
    window.document.getElementById("addEmployeeForm").appendChild(frmInputButton);
}

form();

//ADD AN EMPLOYEE

function addEmployee() {
    "use strict";
    var valName = $("newEName"),
        valTitle = $("newETitle"),
        valExtension = $("newExtension"),
        newEmployee,
        button = $("addButton"),
        msg = window.document.createElement("p");
    
    msg.setAttribute("id", "msgError");
    msg.style.color = "red";
    
    //BUTTON FUNCTIONALITY
    button.addEventListener("click", function () {
        valName = $("newEName").value;
        valTitle = $("newETitle").value;
        valExtension = $("newExtension").value;
        newEmployee = [];
        newEmployee.name = valName;
        newEmployee.title = valTitle;
        newEmployee.extension = valExtension;
        
        if (valName === "Enter Name") {
            msg.innerHTML = "Please make sure you write a valid name";
            window.document.getElementById("addEmployeeForm").appendChild(msg);
        } else if (valTitle === "Enter Title") {
            msg.innerHTML = "Please make sure you write a valid title";
            window.document.getElementById("addEmployeeForm").appendChild(msg);
        } else if (valExtension === "Enter Extension") {
            msg.innerHTML = "Please make sure you write a valid extension";
            window.document.getElementById("addEmployeeForm").appendChild(msg);
        } else {
            employees.push(newEmployee);
        }
    });
}
addEmployee();

// TO POPULATE TABLE
function populateTable() {
    "use strict";
    for (i = 0; i < employees.length; i += 1) {
        window.document.write("<tr><td>" + employees[i].name + "</td> <td>" + employees[i].title + "</td><td>" + employees[i].extension + "</td><td></td><td><button id=\"delete\">Delete</button></td></tr>");
    }
}

window.document.write("<h3> Showing " + numberOfEmployees + " Employees </h3>");

///BUILDING THE TABLE------------->
window.document.write("<table>");

window.document.write("<tr><th> Name </th> <th>Title</th><th>Extension</th> </tr>");
populateTable();
window.document.write("</table>");

function EmployeeDelete() {
    "use strict";
    $("delete").addEventListener("click", function () {
        window.console.log("try");
    
    });
}

EmployeeDelete();


window.addEventListener("load", function () {
    "use strict";
});



























