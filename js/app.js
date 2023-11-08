const botonIngresar = document.getElementById("botonIngresar");

botonIngresar.addEventListener("click", function(){
nombreUsuario = prompt("Cual es tu nombre?"); //declaro variable scope global
let apellidoUsuario = prompt("Cual es tu apellido?");

function saludar() {
    alert("Bienvenido " + nombreUsuario + " " + apellidoUsuario);
} 

if ((nombreUsuario === "") || (apellidoUsuario === "")) {
   alert("Por favor, complete ambos campos de nombre y apellido.");
} else if (/\d/.test(nombreUsuario) || /\d/.test(apellidoUsuario)) {
    alert("El nombre y el apellido no deben contener números.");
} else if (nombreUsuario.length < 2 || nombreUsuario.length > 30 || apellidoUsuario.length < 2 || apellidoUsuario.length > 30) {
    alert("El nombre y el apellido deben tener entre 2 y 30 caracteres.");
} else {
    saludar();
}
})

const botonCalcularCarrito = document.getElementById("botonCalcularCarrito");
botonCalcularCarrito.addEventListener("click", function() {
let cantidadArticulos = parseInt(prompt("Ingrese cuántos artículos tiene el carrito:"));
let valorArticulo = 0;
let carrito = 0;

for (let i = 1; i <= cantidadArticulos; i++) {
    valorArticulo = parseInt(prompt("Ingresa el valor del articulo numero " + i + ":"));
    carrito = carrito + valorArticulo;
}

alert("Muchas gracias " + nombreUsuario + ", la suma del carrito es: " + carrito);
});
