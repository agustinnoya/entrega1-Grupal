function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function register() {

    let pw1 = document.getElementById("password1").value;
    let pw2 = document.getElementById("password2").value;
    let name = document.getElementById("nombre").value;
    let surname = document.getElementById("apellido").value;
    let checkbox = document.getElementById("terminos");
    let email = document.getElementById("email").value;


    if ((pw1.length < 6) || (pw1 != pw2) || (name.length < 1) || (surname.length < 1) || (email.length < 1) || (checkbox.checked == false)) {
        return showAlertError();
    } else {
        return showAlertSuccess();
    }

}

document.getElementById("regBtn").addEventListener("click", () => { register() });