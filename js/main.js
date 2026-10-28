const listaPrecioArticulos = [
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

const carritoCompras = [];
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

function crearMensajeDialog(tipo, texto){
    //
    let titulo;
    let htmlContenido;
    if (tipo === 'exito') {
        titulo="✔ Correcto";
    } else {
        titulo="❌ Error";
    };
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
     crearMensajeDialog("error", "Ya existe un articulo con ese codigo");
  } else if (listaPrecioArticulos.some(articulo => articulo.nombre.toUpperCase() == nombre.toUpperCase() )){
     crearMensajeDialog("error", "Ya existe un articulo con ese nombre");
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
     //
     listaPrecioArticulos.push(elementoNuevo);
     crearMensajeDialog("exito", "El articulo se creo satisfactoriamente");
     //
  }
  //
}
//

function crearCard(articulo){
  //
            //<h6>CATEGORIA: ${articulo.categoria.toUpperCase()}</h6>
  return ` <div class="contenedorCard">
              <div class="contenedorCardDatos"
                <p>Id: ${articulo.id}</p>
                <p>Codigo: ${articulo.codigo.toUpperCase()}</p>
                <p>Nombre: ${articulo.nombre.toUpperCase()}</p>
                <p>Marca:  ${articulo.marca.toUpperCase()}</p>
                <p>Precio: $${articulo.precio}</p>  
              </div>
              <div id="idResultadoCantidadDiv${articulo.id}" class="resultadoCantidadDiv">
                  <label class="labelCard" for="idResultadoCantidadInput${articulo.id}" >Cantidad: </label>            
                  <input id="idResultadoCantidadInput${articulo.id}" class="inputCard" type="number" min=1 max=1000 value=1 required>
              </div> 
              <p id="idTotalArticuloBuscado${articulo.id}" class="totalArticuloBuscado">Importe Total:${articulo.precio*1}</p>
              <button id="idResultadosBotonAgregar${articulo.id}" class="buttonCard">AGREGAR</button>
            </div>
            `;
  //
};
/*
function crearCard(articulo){
  //
            //<h6>CATEGORIA: ${articulo.categoria.toUpperCase()}</h6>
  return `
            <h6>ID: ${articulo.id}</h6>
            <h6>CODIGO: ${articulo.codigo.toUpperCase()}</h6>
            <h6>NOMBRE: ${articulo.nombre.toUpperCase()}</h6>
            <h6>MARCA:  ${articulo.marca.toUpperCase()}</h6>
            <h6>PRECIO: $${articulo.precio}</h6>  
            <div id="idResultadoCantidadDiv${articulo.id}" class="resultadoCantidadDiv">
               <label class="labelGlobal" for="idResultadoCantidadInput${articulo.id}" >CANTIDAD: </label>            
               <input id="idResultadoCantidadInput${articulo.id}" class="inputGlobal" type="number" min=1 max=1000 value=1 required>
            </div> 
            <p id="idTotalArticuloBuscado${articulo.id}" class="totalArticuloBuscado">TOTAL ARTICULO:${articulo.precio*1}</p>
            <button id="idResultadosBotonAgregar${articulo.id}" class="buttonCard">AGREGAR</button>`;
  //
};
*/
//
function crearCardCarrito(articulo){
  //
  
            //<h6>CATEGORIA: ${articulo.categoria.toUpperCase()}</h6>
  return `
            <h6>ID: ${articulo.id}</h6>
            <h6>Codigo: ${articulo.codigo.toUpperCase()}</h6>
            <h6>Nombre: ${articulo.nombre.toUpperCase()}</h6>
            <h6>Marca:  ${articulo.marca.toUpperCase()}</h6>
            <h6>Precio: $${articulo.precio}</h6>  
            <div id="idCarritoComprasCantidadDiv${articulo.id}" class="carritoComprasCantidadDiv">
               <label class="labelGlobal" for="idCarritoComprasCantidadInput${articulo.id}" >Cantidad Carrito: </label>            
               <input id="idCarritoComprasCantidadInput${articulo.id}" class="inputGlobal" type="number" min=1 max=1000 value=${articulo.cantidad} required>
            </div> 
            <p id="idTotalArticuloComprado${articulo.id}" class="totalArticuloComprado">Importe Total:${articulo.precio*articulo.cantidad}</p>
            <button id="idCarritoComprasBotonEliminar${articulo.id}" class="buttonCard">ELIMINAR</button>`;
  //
};

function eliminarDelCarrito(e){
  e.preventDefault();
  const articuloId = e.target.dataset.articuloId;
  //console.log("eliminarDelCarrito-articuloId="+articuloId);
  const indice = carritoCompras.findIndex(articulo => articulo.id == articuloId);
  //
  carritoCompras.splice(indice,1);
  //
  document.getElementById("idMainCarritoCompras").innerHTML = ``;
  carritoCompras.forEach(articulo =>{document.getElementById("idMainCarritoCompras").innerHTML += crearCardCarrito(articulo);
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
  });
}
//
function agregarAlCarrito(e){
  e.preventDefault();
  const articuloId = e.target.dataset.articuloId;
  const cantidad = document.getElementById("idResultadoCantidadInput"+articuloId).value;
  //console.log("agregarAlCarrito-articuloId="+articuloId);
  //
  if (carritoCompras.some(articulo => parseInt(articulo.id) === parseInt(articuloId))) {
     crearMensajeDialog("error", "El articulo ya existe en el carrito de compras");
  } else {
     const articulo = listaPrecioArticulos.find(articulo => articulo.id === parseInt(articuloId));
     //console.log(articulo)
     articulo.cantidad = cantidad;
     articulo.totalArticulo = articulo.precio*cantidad;
     carritoCompras.push(articulo);
     const tagMainCarritoCompras = document.getElementById("idMainCarritoCompras");
     const tagDivArticulo = document.createElement("div");
     tagDivArticulo.id = "idCarritoComprasArticulo"+articulo.id;
     tagDivArticulo.className = "carritoComprasArticulo";
     tagDivArticulo.innerHTML = crearCardCarrito(articulo);
     tagMainCarritoCompras.appendChild(tagDivArticulo);                         
  }
  
  //     
  if (carritoCompras.length > 0){
     carritoCompras.forEach(articulo => {
          //
          const tagBotonEliminar = document.getElementById("idCarritoComprasBotonEliminar"+articulo.id);
          tagBotonEliminar.dataset.articuloId = articulo.id;
          tagBotonEliminar.addEventListener("click",eliminarDelCarrito);
          //
          const tagInputCantidad = document.getElementById("idCarritoComprasCantidadInput"+articulo.id);
          tagInputCantidad.addEventListener("input",(e) => {
            e.preventDefault();
            //console.log(tagInputCantidad.value);
            document.getElementById("idTotalArticuloComprado"+articulo.id).innerText="IMPORTE TOTAL ARTICULO:"+(tagInputCantidad.value*articulo.precio);
          });
        });
  };
}
//
function buscarArticulo(e){
  e.preventDefault();
  //console.log("buscarArticulo");
  const filtro = document.getElementById("idBuscarArticuloCategoria").value.toUpperCase();
  const tagResultadoBusqueda = document.getElementById("idMainResultados");
  let contenidoHtml = ``;
  tagResultadoBusqueda.innerHTML = ``;
  let articulosEncontrados = []; 
  listaPrecioArticulos.forEach(articulo => articulosEncontrados.push(articulo));
  //
  if (filtro.length > 0) {
     articulosEncontrados = listaPrecioArticulos.filter(articulo => articulo.categoria.toUpperCase().includes(filtro.toUpperCase()));
  };
  //      
  if (articulosEncontrados.length > 0){
     articulosEncontrados.forEach(articulo => {
        contenidoHtml += `
                         <div id="idArticuloEncontrado${articulo.id}" class="articuloEncontrado">`;
        contenidoHtml += crearCard(articulo);
        contenidoHtml += `</div>`;
        });
  };
  //
  tagResultadoBusqueda.innerHTML = contenidoHtml;
  //     
  if (articulosEncontrados.length > 0){
     articulosEncontrados.forEach(articulo => {
      //
          const tagBotonAgregar = document.getElementById("idResultadosBotonAgregar"+articulo.id);
          tagBotonAgregar.dataset.articuloId = articulo.id;
          tagBotonAgregar.addEventListener("click",agregarAlCarrito);
          //
          const tagInputCantidad = document.getElementById("idResultadoCantidadInput"+articulo.id);
          tagInputCantidad.addEventListener("input",(e) => {
            e.preventDefault();
            //console.log(tagInputCantidad.value);
            document.getElementById("idTotalArticuloBuscado"+articulo.id).innerText="IMPORTE TOTAL ARTICULO:"+(tagInputCantidad.value*articulo.precio);
          });
        });
  };
  //
}  
//
function verCarritoCompras(e){
  e.preventDefault();
  //console.log("verCarritoCompras")
  ////console.log(document.getElementById("idMainCarritoCompras").childElementCount);
  //console.log("***************")
  //console.log()
  if ((carritoCompras.length === 0) /*|| (document.getElementById("idMainCarritoCompras").childElementCount === 0)*/) {
    crearMensajeDialog("error", "El carrito de compras esta vacio");       
  } else {
    if (document.getElementById("idMainCarritoCompras").childElementCount === 0) {
      carritoCompras.forEach(articulo =>{document.getElementById("idMainCarritoCompras").innerHTML += crearCardCarrito(articulo)});
      
     carritoCompras.forEach(articulo => {
          const tagBotonEliminar = document.getElementById("idCarritoComprasBotonEliminar"+articulo.id);
          tagBotonEliminar.dataset.articuloId = articulo.id;
          tagBotonEliminar.addEventListener("click",eliminarDelCarrito);
          
          const tagInputCantidad = document.getElementById("idCarritoComprasCantidadInput"+articulo.id);
          tagInputCantidad.addEventListener("input",(e) => {
            e.preventDefault();
            ////console.log(tagInputCantidad.value);
            //articulo.cantidad = parseInt(tagInputCantidad.value);
            //articulo.totalArticulo = parseInt(tagInputCantidad.value)*parseInt(articulo.precio);
            document.getElementById("idTotalArticuloComprado"+articulo.id).innerText="IMPORTE TOTAL ARTICULO:"+(tagInputCantidad.value*articulo.precio);
          });
        });
    }
  }
} 
//
function ocultarCarritoCompras(e){
  e.preventDefault();
  //console.log("ocultarCarritoCompras-1")
  //
  if ((document.getElementById("idMainCarritoCompras").childElementCount === 0) && (carritoCompras.length > 0)){
    crearMensajeDialog("error","El carrito ya esta oculto")
  } else if ((document.getElementById("idMainCarritoCompras").childElementCount > 0) && (carritoCompras.length > 0)){
     carritoCompras.forEach(articulo => {
          const tagInputCantidad = document.getElementById("idCarritoComprasCantidadInput"+articulo.id);
            articulo.cantidad = parseInt(tagInputCantidad.value);
            articulo.totalArticulo = parseInt(tagInputCantidad.value)*parseInt(articulo.precio);
        });
     document.getElementById("idMainCarritoCompras").innerHTML=``;
      } else {
    crearMensajeDialog("error","El carrito de compras esta vacio")
 }
}   
//
function vaciarCarritoCompras(e){
  e.preventDefault();
  //console.log("vaciarCarritoCompras")
  if (carritoCompras.length > 0) {
     document.getElementById("idMainCarritoCompras").innerHTML=``;
     carritoCompras.splice(0,carritoCompras.length);
     crearMensajeDialog("exito", "Se eliminaron los articulos del carrito")
  }else{ 
    crearMensajeDialog("error", "El carrito de compras esta vacio")
    };
}   
//
function confirmarCarritoCompras(e){
  e.preventDefault();
  //console.log("confirmarCarritoCompras")
  if (carritoCompras.length > 0) {
     crearMensajeDialog("exito", "Se comfirmo la compra")
  } else {
     crearMensajeDialog("error", "El carrito de compras esta vacio")
  }     
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

