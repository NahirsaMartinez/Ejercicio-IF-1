const USUARIO_NOMBRE_REGISTRADO = "Javier";
const USUARIO_CONTRASENIA_REGISTRADO = "12345";
const USUARIO_NOMBRE_REGISTRADO_2 = "Mimi";
const USUARIO_CONTRASENIA_REGISTRADO_2 = "abcde"


let usuarioNombreIngresado = prompt("Ingrese su nombre de usuario");
let usuarioContraseñaIngresada = prompt("Ingrese su contraseña");

if ((usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO && usuarioContraseñaIngresada == USUARIO_CONTRASENIA_REGISTRADO) || (usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO_2 && usuarioContraseñaIngresada == USUARIO_CONTRASENIA_REGISTRADO_2)) {
    document.write("Sesion iniciada correctamente");
}
else {
    document.write("Usuario o contraseña incorrecta");
}