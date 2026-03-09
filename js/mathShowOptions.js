// how to display options in navigation bar according to enrollment status of course   
var programStatus = sessionStorage.getItem("programmingStatus", "unenrolled")
var webStatus = sessionStorage.getItem("webStatus", "unenrolled")
var dbStatus = sessionStorage.getItem("databaseStatus", "unenrolled")
var mathStatus = sessionStorage.getItem("mathsStatus", "unenrolled")

const math_option1 = document.getElementById("math_option1");
const math_option2 = document.getElementById("math_option2");
const math_option3 = document.getElementById("math_option3");

if (mathStatus === "unenrolled") {
    math_option2.style.display = "none";
    math_option3.style.display = "none";
} else if (mathStatus === "enrolled") {
    math_option1.style.display = "none";
}

