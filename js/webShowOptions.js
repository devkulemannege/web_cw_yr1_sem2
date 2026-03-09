// how to display options in navigation bar according to enrollment status of course   
var programStatus = sessionStorage.getItem("programmingStatus", "unenrolled")
var webStatus = sessionStorage.getItem("webStatus", "unenrolled")
var dbStatus = sessionStorage.getItem("databaseStatus", "unenrolled")
var mathStatus = sessionStorage.getItem("mathsStatus", "unenrolled")

const web_option1 = document.getElementById("web_option1");
const web_option2 = document.getElementById("web_option2");
const web_option3 = document.getElementById("web_option3");

if (webStatus === "unenrolled"){
    web_option2.style.display = "none";
    web_option3.style.display = "none";
} else if (webStatus === "enrolled"){
    web_option1.style.display = "none";
}