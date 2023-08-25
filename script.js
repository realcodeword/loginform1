let loginPage = document.getElementById("login")
let signupPage = document.getElementById("signup")


loginPage.style.display = "none"
signupPage.style.display = "none"
function loginToggle(){
    loginPage.style.display = "flex"
    signupPage.style.display = "none"
}
function signupToggle(){
    signupPage.style.display = "flex"
    loginPage.style.display = "none"
}
function loginCancelToggle(){
    loginPage.style.display = "none"
}
function signupCancelToggle(){
    signupPage.style.display = "none"
}