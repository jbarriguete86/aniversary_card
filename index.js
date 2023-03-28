document.querySelector(".btn-test").addEventListener("click", function(){
   var geoNombre= prompt("Escribe tu nombre");
   var nameLength = geoNombre.length
   var capitalize = (geoNombre.slice(0,1)).toUpperCase();
   var geoCorrecto = capitalize + (geoNombre.slice(1, nameLength)).toLowerCase();
   if (geoCorrecto == "Geo") {
   document.querySelector(".spn-test").innerHTML = geoCorrecto + " tu compatibilidad con Joshe es del 100%";
   } else {
    document.querySelector(".spn-test").innerHTML = geoCorrecto + " tu compatibilidad con Joshe es del 0%";
   }
});