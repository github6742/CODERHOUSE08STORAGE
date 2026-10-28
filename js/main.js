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
  return `
            <div id="IdArticuloEncontrado" class="articuloEncontrado">
            <h6>ID: ${articulo.id}</h6>
            <h6>CODIGO: ${articulo.codigo.toUpperCase()}</h6>
            <h6>NOMBRE: ${articulo.nombre.toUpperCase()}</h6>
            <h6>MARCA:  ${articulo.marca.toUpperCase()}</h6>
            <h6>CATEGORIA: ${articulo.categoria.toUpperCase()}</h6>
            <h6>PRECIO: $${articulo.precio}</h6>  
            <div id="idArticuloEncontradoCantidadDiv" class="articuloEncontradoCantidadDiv">
               <label class="labelGlobal" for="idCantidadArticuloEncontrado${articulo.id}Input" >CANTIDAD: </label>            
               <input id="idCantidadArticuloEncontrado${articulo.id}Input" class="inputGlobal" type="number" min=1 max=1000 value=1 required>
            </div> 
            <a>PRECIO TOTAL:</a>
            <button id="idBotonAgregarAlCarrito${articulo.id}" class="botonAgregarAlCarrito">AGREGAR</button>
            </div>`;
  //
  //return contenidoHtml;            
};
//
function agregarAlCarrito(e){
  e.preventDefault();
  const articuloId = e.target.dataset.articuloId;
  console.log("agregarAlCarrito-articuloId="+articuloId);
  //
  if (carritoCompras.some(articulo => articulo.id === articuloId)) {
     crearMensajeDialog("error", "El articulo ya existe en el carrito de compras");
  } else {
     //carritoCompras.push(listaPrecioArticulos.find(articulo => articulo.id === articuloId));
     const articulo = listaPrecioArticulos.find(articulo => articulo.id === parseInt(articuloId));
     console.log(articulo)
     carritoCompras.push(articulo);
     const tagMainCarritoCompras = document.getElementById("idMainCarritoCompras");
     /*
     tagMainCarritoCompras.innerHTML += `
     <div id="idArticuloEncontrado${articulo.id}" class="articuloEncontrado"> ${crearCard(articulo)}</div>`;
     */
    console.log("******************************************");
    console.log(`
     <div id="idArticuloEncontrado${articulo.id}" class="articuloEncontrado"> ${crearCard(articulo)}</div>`);
        /*contenidoHtml += `
                         <div id="idArticuloEncontrado${articulo.id}" class="articuloEncontrado">`;
                         */
  }
}
//
function buscarArticulo(e){
  e.preventDefault();
  console.log("buscarArticulo");
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
  console.log("**************************");
  console.log(contenidoHtml)
  tagResultadoBusqueda.innerHTML = contenidoHtml;
  //     
  if (articulosEncontrados.length > 0){
     articulosEncontrados.forEach(articulo => {
          const tagBotonAgregar = document.getElementById(id="idBotonAgregarAlCarrito"+articulo.id);
          tagBotonAgregar.dataset.articuloId = articulo.id;
          tagBotonAgregar.addEventListener("click",agregarAlCarrito);
        });
  };
  //
}  
//
function verCarritoCompras(e){
  e.preventDefault();
  console.log("verCarritoCompras")
} 
//
function ocultarCarritoCompras(e){
  e.preventDefault();
  console.log("ocultarCarritoCompras")
}   
//
function vaciarCarritoCompras(e){
  e.preventDefault();
  console.log("vaciarCarritoCompras")
}   
//
function confirmarCarritoCompras(e){
  e.preventDefault();
  console.log("confirmarCarritoCompras")
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
