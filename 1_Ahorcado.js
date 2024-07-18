let palabra = ["laurel", "css", "yoel", "pitufo", "gato", "panda"];
      let palabraSalida = "";
      let entro;
      let mostrar = "";
      let cantidadIntentos;
      let contenedor = [];

      function Jugar() {
        let numeroRandon = Math.floor(Math.random() * palabra.length);
        palabraSalida = palabra[numeroRandon];
        entro = false;
        cantidadIntentos = 5;
        mostrar = "";
        contenedor.length = 0;
        for (let i = 0; i < palabraSalida.length; i++) {
          mostrar += "_";
        }
        document.getElementById("palabra").innerHTML = mostrar;
        document.getElementById("probar").disabled = false;
        document.getElementById("Intentos").innerHTML =
          "cantidad de intentos: " + cantidadIntentos;
      }

      function probar() {
        let caracter = document.getElementById("caracter").value;
        caracter = caracter.toLowerCase();
        for (let i = 0; i < palabraSalida.length; i++) {
          if (
            caracter == palabraSalida[i] &&
            entro == false &&
            !contenedor.includes(i)
          ) {
            mostrar =
              mostrar.slice(0, i) + caracter + mostrar.slice(i + 1);
            entro = true;
            contenedor.push(i);
          }
        }
        if (entro == false) {
          cantidadIntentos--;
        } else {
          entro = false;
        }

        if (cantidadIntentos == 0) {
          document.getElementById("Intentos").innerHTML =
            "Fin del juego Usted ha Perdido";
          document.getElementById("probar").disabled = true;
        } else {
          document.getElementById("Intentos").innerHTML =
            "cantidad de intentos: " + cantidadIntentos;
        }
        document.getElementById("palabra").innerHTML = mostrar;
        document.getElementById("caracter").value = "";

        if (contenedor.length == palabraSalida.length) {
          document.getElementById("Intentos").innerHTML =
            "Fin del juego Usted ha ganado";
          document.getElementById("probar").disabled = true;
        }
      }