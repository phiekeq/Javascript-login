

function register_z() {
    email = document.getElementById("emailRegister").value;
    password = document.getElementById("pwdRegister").value;
    confirmPassword = document.getElementById("pwdRegisterRepeat").value;

    if (password == "" || email == "" ) {
        alert("tomma textboxar");
        return false;
    }
    else {

            if (password == confirmPassword) {
                localStorage.setItem("userEmail", email);
                localStorage.setItem("userPwd", password);
                alert('u r registered');
                return true;
            }
            else {
                alert("Your password does not match.");
                return false;
               }

    }
}



function login_z() {
    email = document.getElementById("emailLogin").value;
    password = document.getElementById("pwdLogin").value;

    //alert("Login function");

    if (email == localStorage.getItem("userEmail") && password == localStorage.getItem("userPwd")) {
        alert("U have successfully logged in to google :-)!");
        return true
    }
    else {
        alert("Email and password doesn't match.");
        return false;
    }
}