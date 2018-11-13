//Desplegable de cada uno de los personajes de amiibo con su información e imagen
 var findAmiibos = function() {
    var personaje = $('#selector').val();
    $.getJSON("http://www.amiiboapi.com/api/amiibo/?name=" + personaje, function(resp) {
      $('#characters').empty();

      for (var amiibo of resp.amiibo) {
        $('<ol>')
          .text("Series: " + amiibo.amiiboSeries + " - " + amiibo.character)
          .append('<img src="' + amiibo.image + '">')
          .appendTo($('#characters'));
      }
    });
  };

  var loadAmiibos = function() {
    $.getJSON("http://www.amiiboapi.com/api/amiibo/", function(resp) {
      $('#selector').empty();
      var characters = new Set();

      for (var amiibo of resp.amiibo) {
        characters.add(amiibo.character);
      }
      characters.forEach(function(amiibo) {
        $('<option>')
          .text(amiibo)
          .appendTo($('#selector'));
      });
      findAmiibos();
    });
  };

  $(document).ready(loadAmiibos);
  $('#selector').on('change', findAmiibos);

//conseguir tipos de personajes y devolverlos en un array
//let boton = document.getElementById("mostrar_btn");
    //if (boton !== null) {
    //boton.addEventListener("click", obtenerNintendo);
    //}

//let personajeGuardado = JSON.parse(localStorage.getItem("personaje"));
//if (personajeGuardado !== null) {
    //document.getElementById("mostrar").innerHTML = personajeGuardado.name + " " + personajeGuardado.gameSeries;
//}

//function getNintendo() {
    //let name = document.getElementById("name").value;
    //let series = document.getElementById("gameSeries").value;
    //let image= document.getElementById("image").value;
    //let personaje = {name: name, gameSeries: gameSeries, image: image};

    //document.getElementById("mostrar").innerHTML = personaje.nombre + " " + personaje.gameSeries + " " + personaje.image;

    //localStorage.setItem("personaje", JSON.stringify(personaje));
//}

//obtenerNintendo();
//function obtenerNintendo() {
    //let xhr = new XMLHttpRequest();
    //let characters = document.getElementById("characters").value;
    //let url= "http://www.amiiboapi.com/api/amiibo/?characters=" + character +"";
   //let series = document.getElementById("gameSeries").value;
    //let image= document.getElementById("image").value;
    //xhr.open("GET", url);
    //xhr.onreadystatechange=function(){
        //if(xhr.readyState===4&&xhr.status===200){
            //let listaPersonajes=JSON.parse(xhr.response);
            //showData(listaPersonajes);
        //}
    //};
    //xhr.send();
//}

//function showData(listaPersonajes){
    //let result = "";
    //for(let i = 0; i < listaPersonajes.length; i++) {
        //result += "<p>" + listaPersonajes[i].character + "<p>";
        //result += "<p>" + listaPersonajes[i].image + "<p>";
        //result += "<p>" + listaPersonajes[i].gameSeries + "<p>";
    //}
    //document.getElementById("lista").innerHTML = result;
//}



//+++++++++++++++++++++++++++++++++++Muestra y guarda el nombre que meta el usuario++++++++++++++++++++++++++++++++++++++++++++++++
let boton = document.getElementById("personaje_btn");
if (boton !== null) {
    boton.addEventListener("click", getPersonaje);
}

// recuperamos el personaje guardado en local storage al entrar en la pagina
let personajeGuardado = JSON.parse(localStorage.getItem("personaje"));//convertir de strring a objeto.
if (personajeGuardado !== null && personajeGuardado !== undefined) {
    document.getElementById("mostrar").innerHTML = personajeGuardado.name;
}

function getPersonaje() {
    let name = document.getElementById("name").value;
    let personaje = {name:name};

    document.getElementById("mostrar").innerHTML = personaje.name;

    // guardamos en local storage el personaje
    localStorage.setItem("personaje", JSON.stringify(personaje));//convertir de un objeto a un string.
    //El setItem solo permite guardar strings.
}

//function obtenerPersonaje(){
    //let xhr = new XMLHttpRequest();
    //let name = document.getElementById("name").value;

    //xhr.open("GET", "http://www.amiiboapi.com/api/amiibo/?characters="+name+"");
    //xhr.onreadystatechange = function(){
        //if(xhr.readyState === 4 && xhr.status ===200){
            //let responseObject = JSON.parse(xhr.response);

            //entrar en postman para ver los datos que tienen dentro
            //showData(responseObject.name, responseObject.gameSeries, responseObject.image);
        //} else if (xhr.readyState === 4 && xhr.status ===400){
            //document.getElementById("info").innerHTML = "Nombre incorrecto";
        //}
    //};
    //xhr.send();
//}

//function verDatos(name, gameSeries, image){
    //let result = "<p>" + name + "<p>";
    //result += "<p>" + gameSeries + "<p>";
    //result += "<img src='" + image + "' />";
    //document.getElementById("info").innerHTML = result;
//}


    // 1- coger el string de lista de guardados
    // 2- convertir a objeto de lista
    // 3- poner el nuevo al final de la lista
    // 4-convertir en string
    // 5- guardar en localstorage
    //let savedInfo=JSON.parse(localStorage.getItem('personaje'));
        //if(savedInfo!== null && document.getElementById('fPersonaje').innerHTML !== null) {
       //document.getElementById('fPersonaje').innerHTML = savedInfo.name;
    //} else {
        //console.log("El nombre introducido no existe");