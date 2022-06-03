//Variables privadas con clousures 
  const person = () => {
    let nombre = "sin nombre"; // Se declara la variable con let justo en la raíz de la función para que pueda ser vista en todos los niveles interiores.
    return { // Se retorna un "objeto" con 2 "metodos" (funciones)
        obtenerNombre: () => { // método 1, que no recibe parámetros y sólo devuelve la variable nombre.
            return nombre;
        },
        definirNombre: (nuevoNombre) => { // método 2, que recibe un parámetro y lo asigna a la propiedad nombre definida en la raíz de este objeto.
            nombre = nuevoNombre;
        }
    };
};
const mipersona = person(); // Define la constante mipersona y le asigna el objeto (la función) persona, recibiendo asi los 2 métodos (obtenerNombre y definirNombre).
console.log(mipersona.obtenerNombre()); // Te dará el valor por omisión que en este caso sería sin nombre.
mipersona.definirNombre('Jonny'); // Asignas un nuevo nombre por medio del método definirNombre().
console.log(mipersona.obtenerNombre()); // Te dará el nuevo valor que asignaste la línea anterior.
