window.onload = function checkIfSignedIn(){
    /**
     * Check if website has been signed into the account
     */
    let status = this.sessionStorage.getItem("accountStatus");
    if (status != "logged"){
        this.alert("Please Login to University Provided Account.")
        window.location.href = "signin.html";
    }
}
window.addEventListener("beforeunload", function() {
    /**
     * clear session data when website is closed
     */
    this.sessionStorage.clear();
});