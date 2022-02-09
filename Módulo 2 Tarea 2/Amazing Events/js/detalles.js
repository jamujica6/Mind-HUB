
var aEvents=[]
async function getEvents()
{

    await fetch("./js/AmazingEvents.json")
    .then(respuesta => respuesta.json())
    .then(json=>aEvents.push(...json.eventos))
    //    var response = await fetch("./js/AmazingEvents.json")   //  ▓▒░ De esta manera también funciona ░▒▓
    //     var data= await response.json()                        //  ▓▒░ De esta manera también funciona ░▒▓
    //     aEvents.push(...data.eventos)                          //  ▓▒░ De esta manera también funciona ░▒▓
    displayElEvento()
} 

getEvents()


displayElEvento()

function displayElEvento(){
    var   imprimir=`
            <div class="artS">
            <div>
             <h2><a class="titulo" id="id1" href="detalles.html?id=1"> {Evento Genérico} </a></h2>    
             <p class="datep"> {fecha} - {lugar} </p> 
             <p class="descript"><b>{descripción}</b></p>  
             <p class="inv">Capacidad: N</p>
             <p class="est">Asistencia estimada: N*68%</p>
             </div>
             <img class="imagen" src="./img/Feria de comidas7.jpg" alt=""></img>
             </div>
            `
            document.querySelector('#cardEvento').innerHTML = imprimir
}
