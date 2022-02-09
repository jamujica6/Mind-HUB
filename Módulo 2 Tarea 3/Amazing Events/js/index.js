
//  ▂▃▅▇█▓▒░ VARIABLES ░▒▓█▇▅▃▂
var checkboxSelected=[]
var aEvents=[]
var busqueda=document.querySelector("#inpBuscar")  //▓▒░Guardo palabras de búsqueda░▒▓


//  ▂▃▅▇█▓▒░ FUNCIONES  ░▒▓█▇▅▃▂

async function getEvents()
{

    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then(respuesta => respuesta.json())
    .then(json=>aEvents.push(...json.eventos))
    //    var response = await fetch("./js/AmazingEvents.json")   //  ▓▒░ De esta manera también funciona ░▒▓
    //     var data= await response.json()                        //  ▓▒░ De esta manera también funciona ░▒▓
    //     aEvents.push(...data.eventos)                          //  ▓▒░ De esta manera también funciona ░▒▓
    display()
} 


//  ▃▇▓▒░ Ejecuto función getEvents() ░▒▓▇▃
                     
                   getEvents()



//  ▃▇▓▒░ Escucho busqueda ░▒▓▇▃
busqueda.addEventListener("keyup",buscar)
console.log(busqueda)
var palabrasBus

function buscar(e){
    var valor=e.target.value
    var filt=[]
    palabrasBus=valor //▃▇▓▒░Guardo en varible global las palabras de búsqueda░▒▓▇▃
    
    // aEvents.filter(x=> x.name.toLowerCase().includes(valor.toLowerCase()))
    
    
    if(checkboxSelected.length==2)
    {filt.push(...aEvents.filter(evento=>evento.name.toLowerCase().includes(valor.toLowerCase())))}
    
    else if(checkboxSelected.length==1){
        checkboxSelected.map(inout =>{
            console.log(checkboxSelected)
            
           
            switch(inout){   
                
                case "outdoor":filt.push(...outdoor.filter(evento=>evento.name.toLowerCase().includes(valor.toLowerCase())))
                 console.log("filtro con outdoor")
                    break;
                case "indoor":filt.push(...indoor.filter(evento=>evento.name.toLowerCase().includes(valor.toLowerCase()))) 
                console.log("filtro con indoor")
                    break;
                    default:filt
                    console.log("Entré a default y esto vale checkboxSelected: "+checkboxSelected)
            
            }//▃▇▓▒░cierro switch░▒▓▇▃

           

        }//▃▇▓▒░cierro accion de map░▒▓▇▃
            
        )//▃▇▓▒░cierro map░▒▓▇▃
    }else{filt.push(...aEvents.filter(evento=>evento.name.toLowerCase().includes(valor.toLowerCase())))}
    
    display(filt)
    console.log(filt)

    }
    

    
   





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
             <h2><a class="titulo" id="id${x.id}" href="detalles.html?id=${x.id}"> ${x.name} </a></h2>    
             <p class="datep"> ${x.date} - ${x.place} </p> 
             <p class="descript"><b>${x.description}</b></p>  
             <p class="inv">Capacidad: ${x.capacity}</p>
             <p class="est">Asistencia estimada:${x.assistance || x.estimate}</p>
             </div>
             <img class="imagen" src="${x.image}" alt=""></img>
             </div>
            `
                   })
                //    imprimir = imprimir + '</div>'

    document.querySelector('#cardEventos').innerHTML = imprimir
}


//  ▂▃▅▇█▓▒░ VARIABLES PARA CHECKBOX (Indoor/outdoor) ░▒▓█▇▅▃▂

var outdoor=[]
var indoor=[]
var aEventss=[]

//  ▃▇▓▒░ Defino función defOutdoor() ░▒▓▇▃
async function defOutdoor()
{
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then(respuesta => respuesta.json())
    .then(json=>aEventss.push(...json.eventos))

//   ▇▒░ Si no/sí tiene "salón" filtro por outdoor/indoor  ░▒▇
    outdoor.push(...aEventss.filter( x=>  !x.place.toLowerCase().includes("salón")))
    indoor.push(...aEventss.filter(x=> x.place.toLowerCase().includes("salón")))

console.log(outdoor)
console.log(indoor)
}    
//   ▇▒░ ejecuto defOutdoor, y se crean ambos arreglos: outdoor e indoor ░▒▇
defOutdoor()

//   ▇▒░ imprimo checks en html ░▒▇
function createCheckbox(){
   
   var inputCheckbox=`<label class="micheckbox"><input type="checkbox" class="checkboxinout" value="indoor">Indoor</label>
                   <label class="micheckbox"><input type="checkbox" class="checkboxinout" value="outdoor">Outdoor</label>     `
document.querySelector('#checkboxInOut').innerHTML = inputCheckbox

                }
createCheckbox()

var checkbox = document.querySelectorAll(".checkboxinout")
console.log(checkbox)
function captureCheckBox(datafromSearch){
    checkbox.forEach(check =>{
        check.addEventListener("click",function(){
         
            
            if(check.checked==true){
                checkboxSelected.push(check.value)
                dataCheck(checkboxSelected)
                console.log(checkboxSelected)
            }else{checkboxSelected=checkboxSelected.filter(uncheck=>uncheck!==check.value)
                dataCheck(checkboxSelected)
                
            }//▃▇▓▒░cierro else
        }//▃▇▓▒░cierro function
    )//▃▇▓▒░cierro Listener
}//▃▇▓▒░cierro accion de forEach
)//▓▒░cierro forEach

        console.log(checkboxSelected)

}//▃▇▓▒░cierro captureCheckBox()░▒▓▇▃

//▇▒░ ejecuto captureCheckBox()░▒▇

           captureCheckBox() 

console.log(busqueda) 

 function dataCheck(checkboxSelected){
    var data=[]
    if(checkboxSelected.length>0){
       
        checkboxSelected.map(inout=>
            {
            if(busqueda!=undefined && inout=="indoor")
                {console.log()
                     data.push(...indoor)
                }
            else if(busqueda!=undefined && inout=="outdoor")
                {data.push(...outdoor)}
            })
    }else{data.push(...aEventss)}
     

    if(palabrasBus!==undefined)  //▇▒░caso con palabras en busquedas a filtrar también░▒▇
    
    {display(data.filter(eventos=>eventos.name.toLowerCase().includes(palabrasBus)))}
    
    else{display(data)          //▇▒░caso sin ningun caracter en la búsqueda░▒▇
    console.log(data)}
  }
    



        
