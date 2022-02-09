
//JavaScript first Playground

//Exercises 1, 2, 3, 4 & 5

var otherName = "Iniciando JavaScript"
var myName = "javier"
var edad = 34
var ignasiAge=32
var delta=ignasiAge-edad




console.log(otherName+" "+myName)
console.log(delta)
console.log(ignasiAge-edad)

if(edad<21){console.log("You are not older than 21")}
else{console.log("You have the right age to pass")}

if(delta>0){console.log("Ignaci es mayor")}
else if(delta==0){console.log("Ignaci tiene mi edad")}
else{console.log("Ignaci es menor")}






//JavaScript String Functions
//Exercise 1 with recursive method   
const number=123456789;

function rev(n){
    if(n==""){
        return "";}
    else{
        
        return rev(n.toString().substr(1))+n.toString().charAt(0);
    }
               }
   
//Exercise 1 easy method

function reverseNumber(n){
    const convertAndReverse = n.toString().split("").reverse().join("");
    return Number(convertAndReverse);
}

//Exercise 2
function order(x){
    return x.toString().split("").sort().join("");
}

//Exercise 3

function primMay(str){
 
var limpiarEspaciosYSeparar=str.trim()
                               .toLowerCase()
                               .split(" ")
                               .filter(Boolean)
    
    var cadaPalabra=limpiarEspaciosYSeparar.map(palabras=>palabras[0].toUpperCase()+palabras.substr(1))   
return datoCorrecto=cadaPalabra.join(" ")

}

//Exercise 4 

function palabraLarga(str){
    var PalabrasEnArreglo =str.split(" ")
    var mayor = 0
    var indiceMayor
    for(i=0;i<=PalabrasEnArreglo.length-1;i++){
        if(PalabrasEnArreglo[i].length>mayor)
       {mayor=PalabrasEnArreglo[i].length
        indiceMayor=i}
    }

    return PalabrasEnArreglo[indiceMayor]
}


//
//  ▂▃▅▇█▓▒░ Arrays Exercise 1 ░▒▓█▇▅▃▂▂▃▅▇█▓▒░Arrays with al my classmates and mentors░▒▓█▇▅▃▂

var arrayClase=[
    "Vane Taiah",
    "Sulamitta Juliana Kauffman",
    "Silvina Dardik",
    "Sergio Robledo",
    "Renzo Beccari",
    "Pau Martinez",
    "Pato Martucci",
    "Pato Martucci",
    "Nicolas Cirulli",
    "Mauri Miranda Raldes",
    "Martín Viola",
    "Macarena Acha",
    "Lucrecia Gillone",
    "Lucian Hoff",
    "Jose Lopez Zaccaro",
    "LeandroBayones",
    "LautaroStein",
    "Lautaro Aimonetti",
    "Kevin Muñoz",
    "Kevin Darnet",
    "Karen Argüello",
    "Juliana Simonetta",
    "Juan Pablo Martinez",
    "Jorge Haquim",
    "Hernán Parisi",
    "Guillermo Calamante",
    "Guille",
    "Gonza Raimondi",
    "Gabriel_Farfan",
    "Gabriel Cejas",
    "Franco Sosa",
    "Franco Petrozzelli",
    "Francisco Sabato",
    "Fernando Torrez",
    "Fernanda Arrieta",
    "EmanuelVillagra",
    "Diego Torres",
    "David Cosio",
    "CristianCaicedo",
    "CotiLeon",
    "Christian Fajardo",
    "Chantal.Pilia",
    "Carla",
    "Camila Domato",
    "Branko Haberkon",
    "Bladimir Rojas",
    "Amparo López",
    "Alicia Pak",
    "AlanTorrez",
    "Agustin Montoya",
    "Adrian Deambroggi",
    "Thiago Chiesa",
    "SebastianLondoño",
    "PriSagario",
    "Maximiliano Salas",
    "MarciaM",
    "Luz",
    "Luis Ditieri",
    "Lucas Ezequiel Silva",
    "Javier Mujica",
    "Ignacio Borraz",
    "Hugo Onofri",
    "Hernán Funes",
    "Gerson Mejia",
    "Franco Vangaray",
    "Francisco Sabato",
    "Federico Olguín",
    "Eric Rodriguez",
    "Emiliano Alegre",
    "David Cruz",
    "Dario-Rearte",
    "Daniel Martínez",
    "Andres Innamorati"]

   

var arrayClaseOrdenado = arrayClase.sort()
console.log(arrayClaseOrdenado)

console.log(arrayClaseOrdenado[0])
console.log(arrayClaseOrdenado[arrayClaseOrdenado.length-1])

for(i=0;i<arrayClaseOrdenado.length;i++){
    console.log(arrayClaseOrdenado[i])
}




