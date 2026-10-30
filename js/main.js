//const listaPrecioArticulos = [
let listaPrecioArticulos = [];
//
listaPrecioArticulos = [
      {
        id: 1,
        codigo: "TVS0033PCO01",
        nombre: "TELEVISOR SMART TV PHILCO 33 PULGADAS", 
        marca: "PHILCO",
        categoria: "TELEVISOR",
        precio: 331000
      },                                 
      {
        id: 2,
        codigo: "TVS0033PHI02",
        nombre: "TELEVISOR SMART TV PHILLIPS 33 PULGADAS", 
        marca: "PHILLIPS",
        categoria: "TELEVISOR",
        precio: 332000
      },                                 
      {
        id: 3,
        codigo: "TVS0033SAM03",
        nombre: "TELEVISOR SMART TV SAMSUNG 33 PULGADAS", 
        marca: "SAMSUNG",
        categoria: "TELEVISOR",
        precio: 333000
      },                                 
      {
        id: 4,
        codigo: "TVS0033JVL04",
        nombre: "TELEVISOR SMART TV JVL 33 PULGADAS",
        marca: "JVL",
        categoria: "TELEVISOR",
        precio: 334000
      },                                 
      {
        id: 5,
        codigo: "TVS0042PCO05",
        nombre: "TELEVISOR SMART TV PHILCO 42 PULGADAS",
        marca: "PHILCO",
        categoria: "TELEVISOR",
        precio: 425000
      },                                 
      {
        id: 6,
        codigo: "TVS0042PHI06",
        nombre: "TELEVISOR SMART TV PHILLIPS 42 PULGADAS",
        marca: "PHILLIPS",
        categoria: "TELEVISOR",
        precio: 426000
      },                                 
      {
        id: 7,
        codigo: "TVS0042SAM07",
        nombre: "TELEVISOR SMART TV SAMSUNG 42 PULGADAS",
        marca: "SAMSUNG",
        categoria: "TELEVISOR",
        precio: 427000
      },                                 
      {
        id: 8,
        codigo: "TVS0042JVL08",
        nombre: "TELEVISOR SMART TV JVL 42 PULGADAS", 
        marca: "JVL",
        categoria: "TELEVISOR",
        precio: 580000
      },                                 
      {
        id: 9,
        codigo: "COCESC009",
        nombre: "COCINA ESCORIAL",
        marca: "ESCORIAL",
        categoria: "COCINA",
        precio: 590000
      },                                 
      {
        id: 10,
        codigo: "COCDRE010",
        nombre: "COCINA DREAN",
        marca: "DREAN",
        categoria: "COCINA",
        precio: 510000
      },                                 
      {
        id: 11,
        codigo: "COCWHI011",
        nombre: "COCINA WHIRLPOOL", 
        marca: "WHIRLPOOL",
        categoria: "COCINA",
        precio: 511000
      },                                 
      {
        id: 12,
        codigo: "COCELE012",
        nombre: "COCINA ELECTROLUX", 
        marca: "ELECTROLUX",
        categoria: "COCINA",
        precio: 512000
      },                                 
      {
        id: 13,
        codigo: "HELELE0013",
        nombre: "HELADERA ELECTOLUX INVERTER NO FROST",
        marca: "ELECTROLUX",
        categoria: "HELADERA",
        precio: 1300000
      },                                 
      {
        id: 14,
        codigo: "HELWHI0014",
        nombre: "HELADERA WHIRLPOOL INVERTER NO FROST",
        marca: "WHIRLPOOL",
        categoria: "HELADERA",
        precio: 1400000
      },                                 
      {
        id: 15,
        codigo: "HELGAG0015",
        nombre: "HELADERA GAFA INVERTER",
        marca: "SAMSUNG",
        categoria: "HELADERA",
        precio: 1500000
      },                                 
      {
        id: 16,
        codigo: "HELDRE0016",
        nombre: "HELADERA DREAN INVERTER",
        marca: "DREAN",
        categoria: "HELADERA",
        precio: 1600000
      }
];

let carritoCompras = [];
let articulosEncontrados = [];
class Articulo {
      constructor(id,
                  codigo, 
                  nombre, 
                  marca,
                  categoria,
                  precio){
        this.id = id,
        this.codigo = codigo;
        this.nombre = nombre;
        this.marca = marca;
        this.categoria = categoria;
        this.precio = precio;
      };
};
//
////////////////////////////////////////////////////////////////
let listaPreciosArticulosStorage = (JSON.parse(localStorage.getItem("listaPrecioArticulos")) == null) ? ([]) : JSON.parse(localStorage.getItem("listaPrecioArticulos"));
if (listaPreciosArticulosStorage.length > 0) {
   localStorage.setItem("listaPrecioArticulos", JSON.stringify([...listaPreciosArticulosStorage]));
   listaPrecioArticulos = [...listaPreciosArticulosStorage];
} else {
   localStorage.setItem("listaPrecioArticulos", JSON.stringify([...listaPrecioArticulos]));
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////
let carritoComprasStorage = (JSON.parse(localStorage.getItem("carritoCompras")) == null) ? ([]) : JSON.parse(localStorage.getItem("carritoCompras"));
if (carritoComprasStorage.length > 0) {
   localStorage.setItem("carritoCompras", JSON.stringify([...carritoComprasStorage]));
   carritoCompras = [...carritoComprasStorage];
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
let articulosEncontradosStorage = (JSON.parse(localStorage.getItem("articulosEncontrados")) == null) ? ([]) : JSON.parse(localStorage.getItem("articulosEncontrados"));
console.log("articulosEncontradosStorage")
console.log(articulosEncontradosStorage)
if (articulosEncontradosStorage.length > 0) {
  console.log("articulosEncontrados > 0")
  localStorage.setItem("articulosEncontrados",JSON.stringify([...articulosEncontradosStorage]));
  articulosEncontrados = [...articulosEncontradosStorage]
  console.log("---articulosEnontrados: ")
  //console.log(articulosEncontrados)
  articulosEncontrados.forEach(articulo => {  
    console.log("articuloEncontrado.id: " +articulo.id)
    console.log("articuloEncontrado.cantidad: " +articulo.cantidad)
  });
  console.log("---articulosEnontrados: ")
  articulosEncontradosStorage.forEach(articulo => {  
    console.log("articuloEncontradoStorage.id: " +articulo.id)
    console.log("articuloEncontradoStorage.cantidad: " +articulo.cantidad)
  });
  console.log("---articulosEnontrados: ")
} else {
  console.log("articulosencontrados = 0")
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//let mainResultados = localStorage.getItem("mainResultados") || "";
//
if(articulosEncontrados.length > 0) {
    buscarArticulosHtml(articulosEncontrados);
}

  
  
   /*     let contenidoHtml=``;
articulosEncontrados.forEach( articulo => {
  
        
        contenidoHtml += `
                         <div id="idArticuloEncontrado${articulo.id}" class="articuloEncontrado">`;
        contenidoHtml += crearCard(articulo);
        contenidoHtml += `</div>`;
        console.log(contenidoHtml);

});
document.getElementById("idMainResultados").innerHTML = contenidoHtml;


   
  if (articulosEncontrados.length > 0){
     articulosEncontrados.forEach(articulo => {
      //  
          localStorage.setItem("idResultadoCantidadInput"+articulo.id,document.getElementById("idResultadoCantidadInput"+articulo.id).value);
          const tagBotonAgregar = document.getElementById("idResultadosBotonAgregar"+articulo.id);
          tagBotonAgregar.dataset.articuloId = articulo.id;
          tagBotonAgregar.addEventListener("click",agregarAlCarrito);
          //
          const tagInputCantidad = document.getElementById("idResultadoCantidadInput"+articulo.id);
          tagInputCantidad.addEventListener("input",(e) => {
            e.preventDefault();
            document.getElementById("idTotalArticuloBuscado"+articulo.id).innerText="Importe Total: $"+(tagInputCantidad.value*articulo.precio);
          });
          const tagCantidad = document.getElementById("idResultadoCantidadInput"+articulo.id);
          tagCantidad.addEventListener("input",()=>localStorage.setItem("idResultadoCantidadInput"+articulo.id,
                                                                         document.getElementById("idResultadoCantidadInput"+articulo.id).value));
        });
        localStorage.setItem("articulosEncontrados",JSON.stringify(articulosEncontrados))
      }
        */
///////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//console.log("mainResultados")
//console.log(mainResultados)
///
//if (mainResultados === "SI") {}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("idCrearArticuloCodigo").value = localStorage.getItem("idCrearArticuloCodigo");
document.getElementById("idCrearArticuloNombre").value = localStorage.getItem("idCrearArticuloNombre");
document.getElementById("idCrearArticuloMarca").value = localStorage.getItem("idCrearArticuloMarca");
document.getElementById("idCrearArticuloCategoria").value = localStorage.getItem("idCrearArticuloCategoria");
document.getElementById("idCrearArticuloPrecio").value = localStorage.getItem("idCrearArticuloPrecio");
document.getElementById("idBuscarArticuloCategoria").value = localStorage.getItem("idBuscarArticuloCategoria");
////////////////////////////////////////////////////////////////
function crearMensajeDialog({tipo, texto}){
    //
    let titulo;
    let htmlContenido;
    //
    tipo === "exito" ? titulo="✔ Correcto" : titulo="❌ Error";
    //
    const tagDialog = document.createElement("dialog");
    tagDialog.id = "idMensajeDialog";
    tagDialog.className = "mensajeDialog";
    htmlContenido = `<h3 class="mensajeDialogH3">${titulo}</h3>
                        <p class="mensajeDialogP">${texto}</p>
                        <button id="idMensajeDialogButton" class="buttonGlobal">Aceptar</button>`;;
    tagDialog.innerHTML = htmlContenido;
    document.body.appendChild(tagDialog);
    tagDialog.showModal();       
    const tagMensajeDialogButton = document.getElementById("idMensajeDialogButton");
    tagMensajeDialogButton.addEventListener("click", 
                                      function() {
                                                   tagDialog.close();
                                                   tagDialog.remove();
                                                  });                                           
};
//
function cargarArticulo(e){
  e.preventDefault();
  const codigo = document.getElementById("idCrearArticuloCodigo").value;
  const nombre = document.getElementById("idCrearArticuloNombre").value;
  const marca = document.getElementById("idCrearArticuloMarca").value;
  const categoria = document.getElementById("idCrearArticuloCategoria").value;
  const precio = document.getElementById("idCrearArticuloPrecio").value;
  //
  if (listaPrecioArticulos.some(articulo => articulo.codigo.toUpperCase() == codigo.toUpperCase() )){
     crearMensajeDialog({tipo: "error", texto: "Ya existe un articulo con ese codigo"});
  } else if (listaPrecioArticulos.some(articulo => articulo.nombre.toUpperCase() == nombre.toUpperCase() )){
     crearMensajeDialog({tipo:"error", texto:"Ya existe un articulo con ese nombre"});
  } else {
     const id = listaPrecioArticulos.length + 1;  
     const articuloNuevo = new Articulo(id, 
                                        codigo.toUpperCase(), 
                                        nombre.toUpperCase(), 
                                        marca.toUpperCase(), 
                                        categoria.toUpperCase(), 
                                        parseFloat(precio));
     const elementoNuevo = {
     id: articuloNuevo.id, 
     codigo: articuloNuevo.codigo,
     nombre: articuloNuevo.nombre,
     marca: articuloNuevo.marca,
     categoria: articuloNuevo.categoria,
     precio: articuloNuevo.precio
     };
     listaPrecioArticulos.push(elementoNuevo);
     console.log(listaPrecioArticulos)
     localStorage.setItem("listaPrecioArticulos", JSON.stringify(listaPrecioArticulos));
     //
     crearMensajeDialog({tipo: "exito", texto: "El articulo se creo satisfactoriamente"});
     //
  }
  //
}
//
function crearCard(articulo){
  //
  return ` <div class="contenedorCard">
              <div class="contenedorCardDatos">
                <div class="contenedorCardDatosFila">
                     <p class="cardDatosFilaEtiqueta">Id:</p><p class="cardDatosFilaValor">${articulo.id}</p>
                </div>
                <div class="contenedorCardDatosFila">
                     <p class="cardDatosFilaEtiqueta">Codigo:</p><p class="cardDatosFilaValor">${articulo.codigo.toUpperCase()}</p>
                </div>
                <div class="contenedorCardDatosFila">
                     <p class="cardDatosFilaEtiqueta">Nombre:</p><p class="cardDatosFilaValor">${articulo.nombre.toUpperCase()}</p>
                </div>
                <div class="contenedorCardDatosFila">
                     <p class="cardDatosFilaEtiqueta">Marca:</p><p class="cardDatosFilaValor">${articulo.marca.toUpperCase()}</p>
                </div>
                <div class="contenedorCardDatosFila">
                     <p class="cardDatosFilaEtiqueta">Precio:</p><p class="cardDatosFilaValor">$${articulo.precio}</p>  
                </div>
              </div>
              <div id="idResultadoCantidadDiv${articulo.id}" class="resultadoCantidadDiv">
                  <label class="labelCard" for="idResultadoCantidadInput${articulo.id}" >Cantidad: </label>            
                  <input id="idResultadoCantidadInput${articulo.id}" class="inputCard" type="number" min=1 max=1000 value=${articulo.cantidad||1} required>
              </div> 
              <div class="contenedorCardDatosFila">
                   <p id="idTotalArticuloBuscado${articulo.id}" class="labelCard">Importe Total: $${articulo.precio*1}</p>
              </div>
              <div class="contenedorCardDatosBoton">
                <button id="idResultadosBotonAgregar${articulo.id}" class="buttonCard">AGREGAR</button>
              </div>  
            </div>
            `;
  //
};

function crearCardCarrito(articulo){
  //
  return ` <div class="contenedorCard">
              <div class="contenedorCardDatos">
                <div class="contenedorCardDatosFila">
                     <p class="cardDatosFilaEtiqueta">Id:</p><p class="cardDatosFilaValor">${articulo.id}</p>
                </div>
                <div class="contenedorCardDatosFila">
                     <p class="cardDatosFilaEtiqueta">Codigo:</p><p class="cardDatosFilaValor">${articulo.codigo.toUpperCase()}</p>
                </div>
                <div class="contenedorCardDatosFila">
                     <p class="cardDatosFilaEtiqueta">Nombre:</p><p class="cardDatosFilaValor">${articulo.nombre.toUpperCase()}</p>
                </div>
                <div class="contenedorCardDatosFila">
                     <p class="cardDatosFilaEtiqueta">Marca:</p><p class="cardDatosFilaValor">${articulo.marca.toUpperCase()}</p>
                </div>
                <div class="contenedorCardDatosFila">
                     <p class="cardDatosFilaEtiqueta">Precio:</p><p class="cardDatosFilaValor">$${articulo.precio}</p>  
                </div>
              </div>
              <div id="idCarritoComprasCantidadDiv${articulo.id}" class="carritoComprasCantidadDiv">
                  <label class="labelCard" for="idCarritoComprasCantidadInput${articulo.id}" >Cantidad: </label>            
                  <input id="idCarritoComprasCantidadInput${articulo.id}" class="inputCard" type="number" min=1 max=1000 value=${articulo.cantidad} required>
              </div> 
              <div class="contenedorCardDatosFila">
                   <p id="idTotalArticuloComprado${articulo.id}" class="labelCard">Importe Total: $${articulo.precio*articulo.cantidad}</p>
              </div>
              <div class="contenedorCardDatosBoton">
                <button id="idCarritoComprasBotonEliminar${articulo.id}" class="buttonCard">ELIMINAR</button>                
              </div>  
            </div>
            `;
} 

function eliminarDelCarrito(e){
  e.preventDefault();
  let totalCarrito;
  const articuloId = e.target.dataset.articuloId;
  //
  const indice = carritoCompras.findIndex(articulo => articulo.id == articuloId);
  carritoCompras.splice(indice,1);
  //
  document.getElementById("idMainCarritoCompras").removeChild(document.getElementById("idCarritoComprasArticulo"+articuloId))
  //
  crearMensajeDialog({tipo: "exito", texto: "El articulo fue eliminado"});
  //
  carritoCompras.forEach(articulo =>{
       if (document.getElementById("idMainCarritoComprasTotalArticulo")) {
          const totalCarrito = carritoCompras.reduce((sumador,articulo)  => sumador + (parseInt(articulo.precio)*parseInt(articulo.cantidad)),0);
          document.getElementById("idTotalCarrito").innerText = `Total del carrito de compras: $${totalCarrito}`;
       }
     })
  //
  carritoCompras.forEach(articulo =>{
    const tagBotonEliminar = document.getElementById("idCarritoComprasBotonEliminar"+articulo.id);
    tagBotonEliminar.dataset.articuloId =articulo.id;
    tagBotonEliminar.addEventListener("click", eliminarDelCarrito);
    totalCarrito = carritoCompras.reduce((sumador,articulocc)  => sumador + (parseInt(articulocc.precio)*parseInt(articulocc.cantidad)),0);  
    document.getElementById("idTotalCarrito").innerText="Importe Total Carrito: $"+(totalCarrito);
  });
  //  
  localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
}
//
function agregarAlCarrito(e){
  e.preventDefault();
  let totalCarrito;
  const articuloId = e.target.dataset.articuloId;
  const cantidad = document.getElementById("idResultadoCantidadInput"+articuloId).value;
  //
  if (carritoCompras.some(articulo => parseInt(articulo.id) === parseInt(articuloId))) {
     crearMensajeDialog({tipo: "error", texto: "El articulo ya existe en el carrito de compras"});
  } else {
     const articulo = listaPrecioArticulos.find(articulo => parseInt(articulo.id) === parseInt(articuloId));
     articulo.cantidad = cantidad;
     articulo.totalArticulo = articulo.precio*cantidad;
     carritoCompras.push(articulo);
     localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
     const tagMainCarritoCompras = document.getElementById("idMainCarritoCompras");
     const tagDivArticulo = document.createElement("div");
     tagDivArticulo.id = "idCarritoComprasArticulo"+articulo.id;
     tagDivArticulo.className = "carritoComprasArticulo";
     tagDivArticulo.innerHTML = crearCardCarrito(articulo);
     tagMainCarritoCompras.appendChild(tagDivArticulo);        
     crearMensajeDialog({tipo: "exito", texto: "El articulo fue agregado"});                 
  }  
  //     
  if (carritoCompras.length > 0){
     //
     carritoCompras.forEach(articulo => {
          //          
          const tagBotonEliminar = document.getElementById("idCarritoComprasBotonEliminar"+articulo.id);
          tagBotonEliminar.dataset.articuloId = articulo.id;
          tagBotonEliminar.addEventListener("click",eliminarDelCarrito);
          //
          const tagInputCantidad = document.getElementById("idCarritoComprasCantidadInput"+articulo.id);
          tagInputCantidad.addEventListener("input",(e) => {
            e.preventDefault();
            articulo.cantidad = parseInt(tagInputCantidad.value);
            articulo.totalArticulo = parseInt(tagInputCantidad.value)*parseInt(articulo.precio);
            document.getElementById("idTotalArticuloComprado"+articulo.id).innerText="Importe Total: $"+(tagInputCantidad.value*articulo.precio);
            totalCarrito = carritoCompras.reduce((sumador,articulocc)  => sumador + (parseInt(articulocc.precio)*parseInt(articulocc.cantidad)),0);  
            document.getElementById("idTotalCarrito").innerText="Importe Total Carrito: $"+(totalCarrito);
            //localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
          });
          //
      });
      //
      totalCarrito = carritoCompras.reduce((sumador,articulo)  => sumador + (parseInt(articulo.precio)*parseInt(articulo.cantidad)),0);
      document.getElementById("idTotalCarrito").innerText="Importe Total Carrito: $"+(totalCarrito);
  };
}
//
function buscarArticulosHtml(lista){
  //e.preventDefault() ;
  const tagResultadoBusqueda = document.getElementById("idMainResultados");
  tagResultadoBusqueda.innerHTML = ``;
  //
  let contenidoHtml = ``;
  if (lista.length > 0){
     lista.forEach(articulo => {
        contenidoHtml += `
                         <div id="idArticuloEncontrado${articulo.id}" class="articuloEncontrado">`;
        contenidoHtml += crearCard(articulo);
        contenidoHtml += `</div>`;
        });
  };
  //
  tagResultadoBusqueda.innerHTML = contenidoHtml;
  //
  //document.getElementById("idMainResultados").childElementCount > 0 && localStorage.setItem("mainResultados","SI")
  //   
  if (lista.length > 0){
     lista.forEach(articulo => {
      //  
          //localStorage.setItem("idResultadoCantidadInput"+articulo.id,document.getElementById("idResultadoCantidadInput"+articulo.id).value);
          const tagBotonAgregar = document.getElementById("idResultadosBotonAgregar"+articulo.id);
          tagBotonAgregar.dataset.articuloId = articulo.id;
          tagBotonAgregar.addEventListener("click",agregarAlCarrito);
          //
          const tagInputCantidad = document.getElementById("idResultadoCantidadInput"+articulo.id);
          tagInputCantidad.addEventListener("input",(e) => {
            e.preventDefault();
            articulo.cantidad = tagInputCantidad.value;
            articulo.totalArticulo = tagInputCantidad.value * articulo.precio;
            document.getElementById("idTotalArticuloBuscado"+articulo.id).innerText="Importe Total: $"+(tagInputCantidad.value*articulo.precio);
            localStorage.setItem("articulosEncontrados", JSON.stringify(lista));
          });
          //
          const tagCantidad = document.getElementById("idResultadoCantidadInput"+articulo.id);
          //tagCantidad.addEventListener("input",()=>localStorage.setItem("idResultadoCantidadInput"+articulo.id,
          //                                                               document.getElementById("idResultadoCantidadInput"+articulo.id).value));
        });
        //localStorage.setItem("articulosEncontrados",JSON.stringify(articulosEncontrados))
  };
}
function buscarArticulo(e){
  e.preventDefault();
  //
  const filtro = document.getElementById("idBuscarArticuloCategoria").value.toUpperCase();
  //
  //let articulosEncontrados = []; 
  //listaPrecioArticulos.forEach(articulo => articulosEncontrados.push(articulo));
  //let articulosEncontrados;// = [...listaPrecioArticulos]
  //
  articulosEncontrados = filtro.length > 0  
                         ? listaPrecioArticulos.filter(articulo => articulo.categoria.toUpperCase().includes(filtro.toUpperCase()))
                         : [...listaPrecioArticulos];
                         //
  //console.log(articulosEncontrados)
  /*if (filtro.length > 0) {
     articulosEncontrados = listaPrecioArticulos.filter(articulo => articulo.categoria.toUpperCase().includes(filtro.toUpperCase()));
  };*/  
  //   
  localStorage.setItem("articulosEncontrados",JSON.stringify(articulosEncontrados));
  buscarArticulosHtml(articulosEncontrados);
  //
}  
//
function verCarritoCompras(e){
  e.preventDefault();
  let contenidoHtml = ``;
  let totalCarrito; 
  if ((carritoCompras.length === 0) ) {
    crearMensajeDialog({tipo: "error", texto: "El carrito de compras esta vacio"});       
  } else {
    //
    if (document.getElementById("idMainCarritoCompras").childElementCount === 0) {
      carritoCompras.forEach(articulo =>{
        contenidoHtml += `
                         <div id="idCarritoComprasArticulo${articulo.id}" class="articuloEncontrado">`;
        contenidoHtml += crearCardCarrito(articulo);
        contenidoHtml += `</div>`;
      });
      //
      document.getElementById("idMainCarritoCompras").innerHTML =contenidoHtml;
      //
      carritoCompras.forEach(articulo => {
          
          localStorage.setItem("idCarritoComprasCantidadInput"+articulo.id,document.getElementById("idCarritoComprasCantidadInput"+articulo.id).value);
          const tagBotonEliminar = document.getElementById("idCarritoComprasBotonEliminar"+articulo.id);
          tagBotonEliminar.dataset.articuloId = articulo.id;
          tagBotonEliminar.addEventListener("click",eliminarDelCarrito);
          //
          const tagInputCantidad = document.getElementById("idCarritoComprasCantidadInput"+articulo.id);
          tagInputCantidad.addEventListener("input",(e) => {
            e.preventDefault();
            articulo.cantidad = parseInt(tagInputCantidad.value);
            articulo.totalArticulo = parseInt(tagInputCantidad.value)*parseInt(articulo.precio);
            document.getElementById("idTotalArticuloComprado"+articulo.id).innerText="Importe Total: $"+(tagInputCantidad.value*articulo.precio);
            totalCarrito = carritoCompras.reduce((sumador,articulocc)  => sumador + (parseInt(articulocc.precio)*parseInt(articulocc.cantidad)),0);  
            document.getElementById("idTotalCarrito").innerText="Importe Total Carrito: $"+(totalCarrito);
            //
            const tagCantidad = document.getElementById("idCarritoComprasCantidadInput"+articulo.id);
            tagCantidad.addEventListener("input",()=>localStorage.setItem("idCarritoComprasCantidadInput"+articulo.id,
                                                                         document.getElementById("idCarritoComprasCantidadInput"+articulo.id).value));
          });
        });
        totalCarrito = carritoCompras.reduce((sumador,articulocc)  => sumador + (parseInt(articulocc.precio)*parseInt(articulocc.cantidad)),0); 
        document.getElementById("idTotalCarrito").innerText="Importe Total Carrito: $"+(totalCarrito);
    }
  localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
  }
} 
//
function ocultarCarritoCompras(e){
  e.preventDefault();
  //
  localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
  if ((document.getElementById("idMainCarritoCompras").childElementCount === 0) && (carritoCompras.length > 0)){
    crearMensajeDialog({tipo: "error", texto: "El carrito ya esta oculto"})
  } else if ((document.getElementById("idMainCarritoCompras").childElementCount > 0) && (carritoCompras.length > 0)){
     //
     carritoCompras.forEach(articulo => {
          const tagInputCantidad = document.getElementById("idCarritoComprasCantidadInput"+articulo.id);
            articulo.cantidad = parseInt(tagInputCantidad.value);
            articulo.totalArticulo = parseInt(tagInputCantidad.value)*parseInt(articulo.precio);
        });
     document.getElementById("idMainCarritoCompras").innerHTML=``;
     document.getElementById("idTotalCarrito").innerHTML=``;
  } else {
    crearMensajeDialog({tipo: "error",texto:"El carrito de compras esta vacio"})
 }
}   
//
function vaciarCarritoCompras(e){
  e.preventDefault();
  //
  if (carritoCompras.length > 0) {
     document.getElementById("idMainCarritoCompras").innerHTML=``;
     carritoCompras.splice(0,carritoCompras.length);
     crearMensajeDialog({tipo: "exito", texto: "Se eliminaron los articulos del carrito"})
  }else{ 
     crearMensajeDialog({tipo: "error", texto: "El carrito de compras esta vacio"})
  };
  localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
}   
//
function confirmarCarritoCompras(e){
  e.preventDefault();
  //
  (carritoCompras.length > 0) ? crearMensajeDialog({tipo: "exito", texto: "Se comfirmo la compra"}) 
                              : crearMensajeDialog({tipo: "error", texto: "El carrito de compras esta vacio"});
 /* if (carritoCompras.length > 0) {
     crearMensajeDialog("exito", "Se comfirmo la compra")
  } else {
     crearMensajeDialog("error", "El carrito de compras esta vacio")
  }   */  
}  
//
const tagFormCrearArticulo = document.getElementById("idMainFormularioCrear");
tagFormCrearArticulo.addEventListener("submit", cargarArticulo);
//
const tagFormBuscarArticulo = document.getElementById("idMainFormularioBuscar");
tagFormBuscarArticulo.addEventListener("submit", buscarArticulo);
//
const tagBotonVerCarrito = document.getElementById("idBotonVerCarritoCompras");
tagBotonVerCarrito.addEventListener("click", verCarritoCompras);
//
const tagBotonOcultarCarrito = document.getElementById("idBotonOcultarCarritoCompras");
tagBotonOcultarCarrito.addEventListener("click", ocultarCarritoCompras);
//
const tagBotonVaciarCarrito = document.getElementById("idBotonVaciarCarritoCompras");
tagBotonVaciarCarrito.addEventListener("click", vaciarCarritoCompras);
//
const tagBotonConfirmarCarrito = document.getElementById("idBotonConfirmarCarritoCompras");
tagBotonConfirmarCarrito.addEventListener("click", confirmarCarritoCompras);
//
const tagInputCrearArticuloCodigo = document.getElementById("idCrearArticuloCodigo");
tagInputCrearArticuloCodigo.addEventListener("input",()=>localStorage.setItem("idCrearArticuloCodigo",document.getElementById("idCrearArticuloCodigo").value));
//
const tagInputCrearArticuloNombre = document.getElementById("idCrearArticuloNombre");
tagInputCrearArticuloNombre.addEventListener("input",()=>localStorage.setItem("idCrearArticuloNombre",document.getElementById("idCrearArticuloNombre").value));
//
const tagInputCrearArticuloMarca = document.getElementById("idCrearArticuloMarca");
tagInputCrearArticuloMarca.addEventListener("input",()=>localStorage.setItem("idCrearArticuloMarca",document.getElementById("idCrearArticuloMarca").value));
//
const tagInputCrearArticuloCategoria = document.getElementById("idCrearArticuloCategoria");
tagInputCrearArticuloCategoria.addEventListener("input",()=>localStorage.setItem("idCrearArticuloCategoria",document.getElementById("idCrearArticuloCategoria").value));
//
const tagInputCrearArticuloPrecio = document.getElementById("idCrearArticuloPrecio");
tagInputCrearArticuloPrecio.addEventListener("input",()=>localStorage.setItem("idCrearArticuloPrecio",document.getElementById("idCrearArticuloPrecio").value));
//
const tagInputBuscarArticuloCategoria = document.getElementById("idBuscarArticuloCategoria");
tagInputBuscarArticuloCategoria.addEventListener("input",()=>localStorage.setItem("idBuscarArticuloCategoria",document.getElementById("idBuscarArticuloCategoria").value));
//