let API_KEY="a93aec44222b993b0b0f06e417639ef2";
var elementos = document.getElementById("name");

let Ciudad = "Madrid";
let url = "http://api.openweathermap.org/data/2.5/weather?q="+Ciudad+"&APPID="+API_KEY+"&units=metric";
let coord = {lat:-34.5956145 ,lon: -58.4431949};
async function getApi(){
    let Ciudad = elementos.value;
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+Ciudad+"&APPID="+API_KEY+"&units=metric";
    let respuesta = await fetch(url);
    if(respuesta.ok){
        console.log(respuesta);
        let datos = await respuesta.json();
        console.log(datos);
        let informacion = "Temperaturas: " + datos.main.temp + "ºC<br/> Descripcion: "+ datos.weather[0].main + ", " + datos.weather[0].description;
        document.getElementById("informacion").innerHTML = informacion;
        let coord = datos.coord;
        coord1 =[coord.lat,coord.lon];
        map.flyTo(coord,9);

        console.log(coord1);
    }
}

document.getElementById("Buscar").addEventListener("click", myFunction);
function myFunction() {
    event.preventDefault();
    getApi();
    console.log(elementos.value);
    elementos = document.getElementById("name");

}

let map = L.map('map').setView([43.37,-8.39],5)

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

async function inicio(){
    let Ciudad = "Madrid";
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+Ciudad+"&APPID="+API_KEY+"&units=metric";
    let respuesta = await fetch(url);
    if(respuesta.ok){
        console.log(respuesta);
        let datos = await respuesta.json();
        console.log(datos);
        let informacion = "Temperaturas: " + datos.main.temp + "ºC<br/> Descripcion: "+ datos.weather[0].main + ", " + datos.weather[0].description;
        document.getElementById("informacion").innerHTML = informacion;
        let coord = datos.coord;
        coord1 =[coord.lat,coord.lon];
        map.flyTo(coord,9);

        console.log(coord1);
    }
}

inicio();

