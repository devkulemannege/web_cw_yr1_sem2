// how to display options in navigation bar according to enrollment status of course   
var programStatus = sessionStorage.getItem("programmingStatus", "unenrolled")
var webStatus = sessionStorage.getItem("webStatus", "unenrolled")
var dbStatus = sessionStorage.getItem("databaseStatus", "unenrolled")
var mathStatus = sessionStorage.getItem("mathsStatus", "unenrolled")

const pro_option2 = document.getElementById("pro_option2");
const pro_option3 = document.getElementById("pro_option3");
const pro_option1 = document.getElementById("pro_option1");
/*
const web_option1 = document.getElementById("web_option1");
const web_option2 = document.getElementById("web_option2");
const web_option3 = document.getElementById("web_option3");

const database_option1 = document.getElementById("database_option1");
const database_option2 = document.getElementById("database_option2");
const database_option3 = document.getElementById("database_option3");

const math_option1 = document.getElementById("math_option1");
const math_option2 = document.getElementById("math_option2");
const math_option3 = document.getElementById("math_option3");*/
    
if (programStatus === "unenrolled"){
    pro_option2.style.display = "none";
    pro_option3.style.display = "none";
} else if (programStatus === "enrolled"){
    pro_option1.style.display = "none";
}
/*
if (webStatus === "unenrolled") {
    web_option1.style.display = "none";
    web_option2.style.display = "none";
    web_option3.style.marginBottom = "-100px";
} else if (webStatus === "enrolled") {
    web_option3.style.display = "none";
    web_option1.style.marginTop = "-20px";
}

if (dbStatus === "unenrolled") {
    database_option1.style.display = "none";
    database_option2.style.display = "none";
    database_option3.style.marginBottom = "-100px";
} else if (dbStatus === "enrolled") {
    database_option3.style.display = "none";
    database_option1.style.marginTop = "-20px";
}

if (mathStatus === "unenrolled") {
    math_option1.style.display = "none";
    math_option2.style.display = "none";
    math_option3.style.marginBottom = "-100px";
} else if (mathStatus === "enrolled") {
    math_option3.style.display = "none";
    math_option1.style.marginTop = "-20px";
}*/