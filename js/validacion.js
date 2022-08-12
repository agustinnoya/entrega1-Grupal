function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");

}
console.log(2)
document.getElementById("regBtn").addEventListener("click", () => {

console.log(3)
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let email = document.getElementById("email").value
    let terminos = docuemnt.getElementById("terminos").checked
    let contraseña = document.getElementById("password1").value
    let contraseñados = document.getElementById("password2").value

    if ((contraseña.length > 5 && contraseña == contraseñados && nombre > 0 && apellido > 0 && email > 0 && terminos.checked == true)) {
         showAlertSuccess()
    } else {
         showAlertError()
    }
    console.log(4)
})

