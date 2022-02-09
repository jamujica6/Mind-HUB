var aEvents=[]

async function getEvents (){
   var response = await fetch("./js/AmazingEvents.json")
    var data= await response.json()
    aEvents.push(...data.eventos.filter(x=>x.date<data.fechaActual))

var fecha=data.fechaActual
console.log(fecha)


    display()
}

getEvents()







function display(show){
    var acumular=[]
    
     if(show==undefined){
        acumular.push(...aEvents)}
  else{ acumular.push(...show)}   
    
    var imprimir='<div class="grupoTarj">'
// console.log(show)
    acumular.map(x =>{

            imprimir = imprimir + `
            <div class="artP">
            <div>
             <h2><a class="titulo" href="detalles.html?id=${x.id}"> ${x.name} </a></h2>    
             <p class="datep"> ${x.date} - ${x.place} </p> 
             <p class="descript"><b>${x.description}</b></p>  
             <p class="inv">Capacidad: ${x.capacity}</p>
             <p class="est">Asistencia estimada:${x.assistence || x.estimate}</p>
             </div>
             <img class="imagen" src="./img/${x.image}" alt=""></img>
             </div>
            `
                   })
                   imprimir = imprimir + '</div>'

    document.querySelector('#cardEventosP').innerHTML = imprimir
}
