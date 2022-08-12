

let contraseña = document.getElementById("password1")
let contraseñados = document.getElementById("password2")

function todocorrecto() {
    if ((contraseña == contraseñados)) {
        return showAlertSuccess()
    } else {
        showAlertError()
    }

    function showAlertSuccess() {
        document.getElementById("alert-success").classList.add("show");
    }
    
    function showAlertError() {
        document.getElementById("alert-danger").classList.add("show");

}
}