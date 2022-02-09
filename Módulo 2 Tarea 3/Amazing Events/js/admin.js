//  ▂▃▅▇█▓▒░ VARIABLES PARA TABLA DE RESUMEN ░▒▓█▇▅▃▂

var totalIngresosEsp=[]
var totalIngRecibidos=[]
var ingCatEsp=[]
var ingCatRec=[]
var porAudiencia=[]
var aEventos=[]
var porCat=[]
 
async function getData(){
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then(response=>response.json())
    .then(json=>aEventos.push(...json.eventos))
    
   

//  ▂▃▅▇█▓▒░ llamo a todas las funciones dentro de detData, porque java sigue avanzando, y las llama antes de que lleguen los datos ░▒▓█▇▅▃▂    
calcularIngresosEsp()  // ▓▒░ Ejecuto calcularIngresosEsp() ░▒▓
calcularIngresosRec() //  ▓▒░ Ejecuto calcularIngresosRec() ░▒▓
pAudiencia()         //   ▓▒░ Ejecuto porAudiencia()        ░▒▓
// mayAudiencia()      //    ▓▒░ Ejecuto mayAudiencia()        ░▒▓
// menAudiencia()     //     ▓▒░ Ejecuto menAudiencia()        ░▒▓
mayCap()          //      ▓▒░ Ejecuto mayCap()              ░▒▓  
imprimirMayMenAud()  //   ▓▒░ Ejecuto imprimirMayMenAud()   ░▒▓ 
iCategoriaEsp()  //   ▓▒░ Ejecuto imprimirMayMenAud()   ░▒▓ 
  






console.log(iCategoriaEsp("Feria de Comida"))    //    ▓▒░ Ejecuto iCategoriaEsp()           ░▒▓
console.log(iCategoriaEsp("Salida al Museo"))    //    ▓▒░ Imprimo en categorías con estimate░▒▓
console.log(iCategoriaEsp("Fiesta de Disfraces"))
// document.querySelector('#espCat1').innerHTML = "Fiesta de Disfraces"
// document.querySelector('#iEspCat1').innerHTML = iCategoriaEsp("Fiesta de Disfraces")

console.log(iCategoriaEsp("Concierto de Música"))
// document.querySelector('#espCat2').innerHTML = "Concierto de Música"
// document.querySelector('#iEspCat2').innerHTML = iCategoriaEsp("Concierto de Música")

console.log(iCategoriaEsp("Carrera"))
console.log(iCategoriaEsp("Intercambio de Libros"))
console.log(iCategoriaEsp("Vamos al Cine"))
// document.querySelector('#espCat3').innerHTML = "Vamos al Cine"
// document.querySelector('#iEspCat3').innerHTML = iCategoriaEsp("Vamos al Cine")



console.log(iCategoriaRec("Feria de Comida"))     //   ▓▒░ Ejecuto iCategoriaRec()              ░▒▓
                                                 //    ▓▒░ Imprimo en categorías con assistanace░▒▓
document.querySelector('#recCat1').innerHTML = "Feria de Comida"
document.querySelector('#iRecCat1').innerHTML = iCategoriaRec("Feria de Comida")

console.log(iCategoriaRec("Salida al Museo"))    
document.querySelector('#recCat2').innerHTML = "Salida al Museo"
document.querySelector('#iRecCat2').innerHTML = iCategoriaRec("Salida al Museo")

console.log(iCategoriaRec("Fiesta de Disfraces"))
console.log(iCategoriaRec("Concierto de Música"))
console.log(iCategoriaRec("Carrera"))
document.querySelector('#recCat3').innerHTML = "Carrera"
document.querySelector('#iRecCat3').innerHTML = iCategoriaRec("Carrera")

console.log(iCategoriaRec("Intercambio de Libros"))
document.querySelector('#recCat4').innerHTML = "Intercambio de Libros"
document.querySelector('#iRecCat4').innerHTML = iCategoriaRec("Intercambio de Libros")

console.log(iCategoriaRec("Vamos al Cine"))

console.log(porCateg("Feria de Comida"))                            //    ▓▒░ Ejecuto porCat() 
document.querySelector('#categ1').innerHTML = "Feria de Comida"     //    ▓▒░ Imprimo porcentaje por categoría en HTML
document.querySelector('#porCateg1').innerHTML = (100*porCateg("Feria de Comida")).toFixed(1)

document.querySelector('#categ2').innerHTML = "Salida al Museo"
document.querySelector('#porCateg2').innerHTML = (100*porCateg("Salida al Museo")).toFixed(1)

document.querySelector('#categ3').innerHTML = "Fiesta de Disfraces"
document.querySelector('#porCateg3').innerHTML = (100*porCateg("Fiesta de Disfraces")).toFixed(1)

document.querySelector('#categ4').innerHTML = "Concierto de Música"
document.querySelector('#porCateg4').innerHTML = (100*porCateg("Concierto de Música")).toFixed(1)

document.querySelector('#categ5').innerHTML = "Carrera"
document.querySelector('#porCateg5').innerHTML = (100*porCateg("Carrera")).toFixed(1)

document.querySelector('#categ6').innerHTML = "Intercambio de Libros"
document.querySelector('#porCateg6').innerHTML = (100*porCateg("Intercambio de Libros")).toFixed(1)

document.querySelector('#categ7').innerHTML = "Vamos al Cine"
document.querySelector('#porCateg7').innerHTML = (100*porCateg("Vamos al Cine")).toFixed(1)

porAudiencia.forEach(evento=>{
    if(evento.pAudiencia!=NaN){
    console.log(`ID: ${evento.id} | % de audiencia: ${evento.pAudiencia}`)}
})


totalIngRecibidos.forEach(evento=>{
    if(evento.result!=NaN){
    console.log(`ID: ${evento.id}| Ganancia de evento: ${evento.result}`)}
})

totalIngresosEsp.forEach(evento=>{
    if(evento.ingEsperado!=NaN){
    console.log(`iD: ${evento.id} | Ing esperado de evento: ${evento.ingEsperado}`)}
})


console.log(totalIngresosEsp)
console.log(totalIngRecibidos)
console.log("Ing Esperados:"+totalIngRecibidos)
}

//  ▂▃▅▇█▓▒░ Ejecuto getData() ░▒▓█▇▅▃▂
                     getData()
//▂▃▅▇█▓▒░FUNCIONES OPERATORIAS ░▒▓█▇▅▃▂
 function calcularIngresos(){
    totalIngresos.push(...aEventos)
    totalIngresos.map(evento=>{
         if(evento.estimate!=undefined){
            evento.ingEsperado=evento.estimate*evento.price
        }else{ 
            evento.ingRecibido=evento.assistance*evento.price
        }
    })
        }

function calcularIngresosRec(){
    totalIngRecibidos.push(...aEventos)
    totalIngRecibidos.map(evento=>
    {evento.result=evento.price*evento.assistance})
    
    
}

function pAudiencia(){
   porAudiencia.push(...aEventos)
   porAudiencia.map(evento=>{
       evento.pAudiencia=(evento.estimate||evento.assistance)/evento.capacity
   })
}

function iCategoriaEsp(){
       
    let tablaIngresosEsperados=""  // Este será el html a incrustar en la tabla de admin.html
    ingCatEsp=[]
    ingCatEsp.push(...totalIngresosEsp)

    ingCatRec=[]
    ingCatRec.push(...totalIngresosRec)
 
categorias=[]
categorias=ingCatEsp.map(evento=>{
evento.category
})

categorias=[...new Set(categorias)]

console.log(categorias)

    categorias.forEach(eve=>{
           let filtCat=ingCatEsp
    ingCatEsp.map(evento=>{
        let total
        if(evento.ingEsperado!=NaN && evento.category==eve.category)
        {total.push().total=total.total+evento.ingEsperado
        total[1].category=eve.category}
    }) } )

    console.log(total)
    
  


    tablaIngresosEsperados=`<table class="table table-dark table-striped">
                <thead>
                    <tr>
                    <th colspan="2">Ingresos Esperados por Categoría</th>        
                    </tr>                 
                    <tr>
                    <th scope="col">Categoría</th>
                    <th scope="col">Ingresos Esperados</th>                                   
                  </tr>
                </thead>

                <tbody>`

                total.forEach(evento=>
                    tablaIngresosEsperados=tablaIngresosEsperados+
                    `<tr>
                    <th>${evento.category}</th>
                    <td>${evento.total}</td>                        
                  </tr>`

                )
         tablaIngresosEsperados=tablaIngresosEsperados+`</tbody></table>`

document.querySelector('#espCat').innerHTML = tablaIngresosEsperados

tablaIngresosRecibidos=`<table class="table table-dark table-striped">
                <thead>
                    <tr>
                    <th colspan="2">Ingresos Esperados por Categoría</th>        
                    </tr>                 
                    <tr>
                    <th scope="col">Categoría</th>
                    <th scope="col">Ingresos Esperados</th>                                   
                  </tr>
                </thead>

                <tbody>`

                total.forEach(evento=>
                    tablaIngresosEsperados=tablaIngresosEsperados+
                    `<tr>
                    <th>${evento.category}</th>
                    <td>${evento.total}</td>                        
                  </tr>`

                )
         tablaIngresosEsperados=tablaIngresosEsperados+`</tbody></table>`

document.querySelector('#espCat').innerHTML = tablaIngresosEsperados

}

function iCategoriaRec(categoria){
    let total=0
    ingCatRec=[]
    ingCatRec.push(...totalIngRecibidos)
    ingCatRec.map(evento=>{
        if(evento.category==categoria)
        {total=total+evento.result}
    })
    
    return total
}



function imprimirMayMenAud(){
    let mayMenAud=""
    let menor=1
    let nameMen=""
    let mayor=0
    let nameMay=""

    porAudiencia.forEach(evento => {
        if(evento.pAudiencia<menor){
            menor=evento.pAudiencia
            nameMen=evento.name}   })

   console.log(menor)
    porAudiencia.forEach(evento => {
        if(evento.pAudiencia>mayor){
            mayor=evento.pAudiencia
            nameMay=evento.name}   })
    mayMenAud=`<table class="table table-dark table-striped">
                <thead>
                    <tr>
                    <th colspan="3">Eventos con mayor/menor porcentaje de audiencia</th>        
                    </tr>
                 
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">%</th>
                    <th scope="col">Evento</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td id="pAudMayor">${mayor*100}</td>
                    <td id="eventoMayorPaud">${nameMay}</td> 
                    
                  </tr>
                
                  <tr>
                    <th scope="row">${porAudiencia.length}</th>
                    <td id="pAudMenor">${menor*100}</td>
                    <td id="eventoMenorPaud">${nameMen}</td>
                  </tr>
                </tbody>
              </table>`
              document.querySelector('#mayMenAud').innerHTML = mayMenAud
}


function mayCap(){
    let maxCap=0
    let nameCap=0
    let tablaMaxCap=""
    aEventos.forEach(evento=>{
        if(evento.capacity>maxCap){
            maxCap=evento.capacity
            nameCap=evento.name
        }
    })

tablaMaxCap=`<table class="table table-dark table-striped">
                <thead>
                    <tr>
                    <th colspan="2">Evento con mayor capacidad</th>        
                    </tr>                 
                    <tr>
                    <th scope="col">Evento</th>
                    <th scope="col">Capacidad</th>                                   
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td id="eMayCap">${nameCap}</td>
                    <td id="mayorCap">${maxCap}</td>                                      
                  </tr>
                
                  
                </tbody>
              </table>`
 document.querySelector('#mayCap').innerHTML = tablaMaxCap
  
}

function porCateg(categoria){
 porCat=[]
 let totalAsistEst=0
 let totalCap=0
 indPcat=0
 porCat.push(...aEventos)
 porCat.map(evento=> {
    if (evento.category==categoria){
        totalAsistEst=totalAsistEst+(evento.assistance||evento.estimate)
        totalCap=totalCap+evento.capacity}})

 return totalAsistEst/totalCap}


