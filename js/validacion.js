function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function checkPassword() {
    let pass1 = document.getElementById("password1");
    let pass2 = document.getElementById("password2");
    if (pass1 == pass2) {
        return showAlertSuccess();
    } else {
        return showAlertError();
    }
}