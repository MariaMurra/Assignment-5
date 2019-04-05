/*eslint-env browser*/
var employees = [
    {"name": "John", "title": "Snake Milker", "Extension": 121},
    {"name": "Jacob", "title": "Lab Rat", "Extension": 122},
    {"name": "Jinker", "title": "Animal Colourist", "Extension": 123},
    {"name": "Heimer", "title": "Master Handshaker", "Extension": 124},
    {"name": "Smith", "title": "Chocolate Taster", "Extension": 125}],
    numberOfEmployees = employees.length,
    i,
    $ = function (id) {
        "use strict";
        return window.document.getElementById(id);
    };

window.console.log(employees);

window.document.write("<h1> The Employee Management Application </h1>");
window.document.write("<h3> Add Employee</h3>");

function addEmployeeForm() {
    "use strict";
    var myForm = window.document.createElement("FORM"),
        frmInputName = window.document.createElement("INPUT"),
        frmInputTitle = window.document.createElement("INPUT"),
        frmInputExt = window.document.createElement("INPUT"),
        frmInputButton = window.document.createElement("INPUT"),
        frmError = window.document.createElement("P");
            
    
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
    frmInputTitle.setAttribute("id", "neETitle");
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
    
    //ERROR PARAGRAPH
    frmError.setAttribute("id", "thErrorMsg");
    window.document.getElementById("addEmployeeForm").appendChild(frmError);
}
addEmployeeForm();

window.document.write("<h3> Showing " + numberOfEmployees + " Employees </h3>");

///BUILDING THE TABLE------------->
window.document.write("<table>");

window.document.write("<tr><th> Name </th> <th>Title</th><th>Extension</th> </tr>");
for (i = 0; i < employees.length; i += 1) {
    window.document.write("<tr><td>" + employees[i].name + "</td> <td>" + employees[i].title + "</td><td>" + employees[i].Extension + "</td><td></td><td><button>Delete</button></td></tr>");
}
window.document.write("</table>");


function addEmployee() {
    "use strict";
    var valName = $("newEName"),
        valTitle = $("newETitle"),
        valExtension = $("newExtension"),
        newEmployee,
        button = $("addButton");
    
    //BUTTON FUNCTIONALITY
    button.addEventListener("click", function () {
        valName = $("newEName").value;
        valTitle = $("newETitle").value;
        valExtension = $("newExtension").value;
        newEmployee = {"name": valName, "title": valTitle, "Extension": valExtension};
        employees.push(newEmployee);
        
    });
}
addEmployee();

/*function EmployeeDelete() {
    "use strict";
    
}

EmployeeDelete();*/





























