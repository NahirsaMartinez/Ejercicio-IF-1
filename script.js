const inputUsuario = document.querySelector ("#usuario-nombre");
const inputContrasenia = document.querySelector("#usuario-contrasenia");
const pResultado = document.querySelector ("#resultado");

const usuarioNombRegist = ["Carlos", "mini", "Pepita"];
const usuarioContraRegist = ["Carlos1.", "123", "abc"];
const USUARIO_NO_VERIFICADO = false;
const USUARIO_VERIFICADO = true;

let usuarioNombreIngresado = "def nombre";
let usuarioContraseniaIngresada = "def contrasenia";

//let usuarioNombreIngresado = prompt("Ingrese su nombre de usuario");
//let usuarioContraseñaIngresada = prompt("Ingrese su contraseña");

/*if ((usuarioNombreIngresado == usuarioNombRegist && usuarioContraRegist == USUARIO_CONTRASENIA_REGISTRADO) || (usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO_2 && usuarioContraseñaIngresada == USUARIO_CONTRASENIA_REGISTRADO_2)) {
    document.write("Sesion iniciada correctamente");
}
else {
    document.write("Usuario o contraseña incorrecta");
}*/

function enviarInfo(){
    let estadoVerificacion = USUARIO_NO_VERIFICADO;
    usuarioNombreIngresado = inputUsuario.value;
    usuarioContraseniaIngresada = inputContrasenia.value;   

    for (let i = 0; i < usuarioNombRegist.length; i++) {
        if ( ( usuarioContraseniaIngresada == usuarioContraRegist[i])  && (usuarioNombreIngresado == usuarioNombRegist[i])) {
            estadoVerificacion = USUARIO_VERIFICADO;
            i = usuarioNombRegist.length;
        }
    }

    if (estadoVerificacion) {
        pResultado.style.color = "lime";
        pResultado.innerHTML = "Usuario y contraseña correctos "+ usuarioNombreIngresado;
    }else{
        pResultado.innerHTML = "Usuario y contraseña incorrectos";
        pResultado.style.color = "red";
    }
}
