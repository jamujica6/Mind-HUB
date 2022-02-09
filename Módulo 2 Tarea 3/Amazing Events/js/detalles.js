
var aEvents=[]
async function getEvents()
{

    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then(respuesta => respuesta.json())
    .then(json=>aEvents.push(...json.eventos))
    //    var response = await fetch("./js/AmazingEvents.json")   //  ▓▒░ De esta manera también funciona ░▒▓
    //     var data= await response.json()                        //  ▓▒░ De esta manera también funciona ░▒▓
    //     aEvents.push(...data.eventos)                          //  ▓▒░ De esta manera también funciona ░▒▓
    


    console.log(location)
    var id = location.search.split("?id=").filter(Number)
    var selectedId = Number(id[0])
    console.log(selectedId)
    var evento = aEvents.find(function(evento) {
        return evento.id == selectedId         }
                             )
    
     if(selectedId!=NaN){

                                var templateHtml = `    
   
  
    <div class="artDet">
            <div>
             <h2><a class="titulo" id="id${evento.id}" href="detalles.html?id=${evento.id}"> ${evento.name} </a></h2>    
             <p class="datep"> ${evento.date} - ${evento.place} </p> 
             <p class="descript"><b>${evento.description}</b></p>  
             <p class="inv">Capacidad: ${evento.capacity}</p>
             <p class="est">Asistencia estimada:${evento.assistence || evento.estimate}</p>
             <p class="inv">Precio: ${evento.price}</p>
             </div>
             <img class="imagen" src="${evento.image}" alt=""></img>
             </div>
    `
    document.querySelector('#boxCard').innerHTML = templateHtml}  
} 

getEvents()


// displayElEvento()

// function displayElEvento(){
//     var   imprimir=`
//             <div class="artS">
//             <div>
//              <h2><a class="titulo" id="id1" href="detalles.html?id=1"> {Evento Genérico} </a></h2>    
//              <p class="datep"> {fecha} - {lugar} </p> 
//              <p class="descript"><b>{descripción}</b></p>  
//              <p class="inv">Capacidad: N</p>
//              <p class="est">Asistencia estimada: N*68%</p>
//              </div>
//              <img class="imagen" src="./img/Feria de comidas7.jpg" alt=""></img>
//              </div>
//             `
//             document.querySelector('#cardEvento').innerHTML = imprimir
// }
