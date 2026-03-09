// how to display options in navigation bar according to enrollment status of course   
var programStatus = sessionStorage.getItem("programmingStatus", "unenrolled")
var webStatus = sessionStorage.getItem("webStatus", "unenrolled")
var dbStatus = sessionStorage.getItem("databaseStatus", "unenrolled")
var mathStatus = sessionStorage.getItem("mathsStatus", "unenrolled")

const database_option1 = document.getElementById("database_option1");
const database_option2 = document.getElementById("database_option2");
const database_option3 = document.getElementById("database_option3");

if (dbStatus === "unenrolled") {
    database_option2.style.display = "none";
    database_option3.style.display = "none";
} else if (dbStatus === "enrolled") {
    database_option1.style.display = "none";
}