const listaMenu = [
    {
        opcion: 1,
        titulo: "Crear Articulo",
        clase: "crearArticulo",
        id: "idCrearArticulo",
        nivelTitulo: 1,
        tipoContenedor: "Formulario",
        tagContenedor: "form"
    },
    {
        opcion: 2,
        titulo: "Listar Articulos",
        clase: "listarArticulos",
        id: "idListarArticulos",
        nivelTitulo: 1,
        tipoContenedor: "Listado",
        tagContenedor: "div"
    },
    {
        opcion: 3,
        titulo: "Listar Articulos Con Descuento",
        clase: "listarArticulosConDescuento",
        id: "idListarArticulosConDescuento",
        nivelTitulo: 1,
        tipoContenedor: "Listado",
        tagContenedor: "div"
    },
    {
        opcion: 4,
        titulo: "Buscar Articulo Por Id",
        clase: "buscarArticuloPorId",
        id: "idBuscarArticuloPorId",
        nivelTitulo: 1,
        tipoContenedor: "Formulario",
        tagContenedor: "form"
    },
    {
        opcion: 5,
        titulo: "Buscar Articulo Por Categoria",
        clase: "buscarArticuloPorCategoria",
        id: "idBuscarArticuloPorCategoria",
        nivelTitulo: 2,
        tipoContenedor: "Formulario",
        tagContenedor: "form"
    },
    {
        opcion: 6,
        titulo: "Buscar Articulo Por Nombre",
        clase: "buscarArticuloPorNombre",
        id: "idBuscarArticuloPorNombre",
        nivelTitulo: 2,
        tipoContenedor: "Formulario",
        tagContenedor: "form"
    },
    {
        opcion: 7,
        titulo: "Verificar Existencia Articulo",
        clase: "verificarExistenciaArticulo",
        id: "idVerificarExistenciaArticulo",
        nivelTitulo: 2,
        tipoContenedor: "Formulario",
        tagContenedor: "form"
    },
    {
        opcion: 8,
        titulo: "Comprar",
        clase: "comprar",
        id: "idComprar",
        nivelTitulo: 2,
        tipoContenedor: "Formulario",
        tagContenedor: "form"
    }
];

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

function crearHeaderMenu(){
  //
    const tagHeader = document.querySelector("header");
    let menuNivel1 = listaMenu.filter(menu => menu.nivelTitulo == 1);
    let menuNivel2 = listaMenu.filter(menu => menu.nivelTitulo == 2);
  //
    let htmlContenido;
    htmlContenido = `
        <div class="headerContenedor">
             <div class="headerContendorElementos">
                  <h1 class="headerTitulo">MODULO DE ARTICULOS, PRECIOS, COMPRAS</h1>
                  <div class="headerOpciones">
                  <nav class="headerNav">
                    <ul class= "headerUl">
        `;
    menuNivel1.forEach(opciones => {
        htmlContenido += `
        <li class="headerLiOpciones">
        <a id=${opciones.id} class="headerAOpciones">
        ${opciones.titulo}
        </a>
        </li>
        `;
    });
    //
    htmlContenido += `
                    </ul>
                </nav>
        `;
    htmlContenido += `     
                  <nav class="headerNav">
                    <ul class= "headerUl">
        `;  
    menuNivel2.forEach(opciones => {
        htmlContenido += `
        <li class="headerLiOpciones">
        <a id=${opciones.id} class="headerAOpciones">
        ${opciones.titulo}
        </a>
        </li>
        `;
    });
    //
    htmlContenido += `
                    </ul>
                </nav>
        `;   
    htmlContenido += `
                </div>
            </div>
        </div>
        `;
    tagHeader.innerHTML = htmlContenido;     
    //   
};

crearHeaderMenu();

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

function cargarArticulo(e){
  e.preventDefault();
  const id = listaPrecioArticulos.length + 1;  
  const codigo = document.getElementById("idCrearArticuloCodigo").value;
  const nombre = document.getElementById("idCrearArticuloNombre").value;
  const marca = document.getElementById("idCrearArticuloMarca").value;
  const categoria = document.getElementById("idCrearArticuloCategoria").value;
  const precio = document.getElementById("idCrearArticuloPrecio").value;
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
  if (listaPrecioArticulos.some(articulo => articulo.codigo.toUpperCase() == elementoNuevo.codigo.toUpperCase() )){
     crearMensajeDialog("error", "Ya existe un articulo con ese codigo");
  } else if (listaPrecioArticulos.some(articulo => articulo.nombre.toUpperCase() == elementoNuevo.nombre.toUpperCase() )){
    crearMensajeDialog("error", "Ya existe un articulo con ese nombre");
  } else {
    listaPrecioArticulos.push(elementoNuevo);
    crearMensajeDialog("exito", "El articulo se creo satisfactoriamente");
  }
  //
}

function crearCard(articulo){
  //
  let contenidoHtml;
  contenidoHtml = `
            <div id="IdArticuloEncontrado" class="articuloEncontrado">
            <h6>ID: ${articulo.id}</h6>
            <h6>CODIGO: ${articulo.codigo.toUpperCase()}</h6>
            <h6>NOMBRE: ${articulo.nombre.toUpperCase()}</h6>
            <h6>MARCA:  ${articulo.marca.toUpperCase()}</h6>
            <h6>CATEGORIA: ${articulo.categoria.toUpperCase()}</h6>
            <h6>PRECIO: $${articulo.precio}</h6>  
            </div>`;
  //
  return contenidoHtml;            
};

function eliminarArticuloDelCarrito(e) {
  e.preventDefault();
  //
  const articuloId = e.target.dataset.articuloId;
  //
  const indice = carritoCompras.findIndex(articulo => articulo.id == articuloId);
  //
  carritoCompras.splice(indice,1);
  // 
  if (document.getElementById("idMainCarritoCompras")) {
     document.getElementById("idMainCarritoCompras").innerHTML = ``;
     carritoCompras.forEach(articulo =>{document.getElementById("idMainCarritoCompras").innerHTML += crearCardArticuloComprado2(articulo);
     if (document.getElementById("idMainCarritoComprasTotalArticulo")) {
        const totalCarrito = carritoCompras.reduce((sumador,articulo)  => sumador + (parseInt(articulo.precio)*parseInt(articulo.cantidad)),0);
        document.getElementById("idMainCarritoComprasTotalArticulo").innerText = `Total del carrito de compras: $${totalCarrito}`;
     }
     })
  };
  //
  carritoCompras.forEach(articulo =>{
    const tagBotonEliminar = document.getElementById("idBotonEliminarFilaCarrito"+articulo.id);
    tagBotonEliminar.dataset.articuloId =articulo.id;
    tagBotonEliminar.addEventListener("click", (e) =>  eliminarArticuloDelCarrito(e));
  });
}

function crearCardArticuloComprado2 (articulo) {
  let htmlContenido;
  //
  htmlContenido = `
  <div id="idMainCarritoComprasFila" class="mainCarritoComprasFila">
    <h6>ID: ${articulo.id}</h6>
    <h6>NOMBRE: ${articulo.nombre}</h6>
    <h6>MARCA: ${articulo.marca}</h6>
    <h6>PRECIO: $${articulo.precio}</h6>
    <h6>CANTIDAD: ${articulo.cantidad}</h6>
    <h6>TOTAL ARTICULO: ${articulo.totalArticulo}</h6>
    <button id="idBotonEliminarFilaCarrito${articulo.id}" class="buttonGlobal">Eliminar</button>
  <div>
  `;
  //
  return htmlContenido;
  //
}

function verCarritoCompras(e){
  e.preventDefault();
  //
  const tagDivMainContenedorElementos = document.getElementById("idMainContenedorElementos");
  let tagDivMainContenedorCarritoCompras;
  let tagDivMainCarritoCompras ;
  //
  if (carritoCompras.length > 0) {      
      //
      if (!document.getElementById("idMainContenedorCarritoCompras")) {
         tagDivMainContenedorCarritoCompras = document.createElement("div");
         tagDivMainContenedorCarritoCompras.id = "idMainContenedorCarritoCompras";
         tagDivMainContenedorCarritoCompras.className = "mainContenedorCarritoCompras";
         //
         tagDivMainContenedorElementos.appendChild(tagDivMainContenedorCarritoCompras);
         //
      } else {
        tagDivMainContenedorCarritoCompras = document.getElementById("idMainContenedorCarritoCompras");
      }
      //
     if (carritoCompras.length > 0) {
        //
        if (!document.getElementById("idMainCarritoCompras")) {
          //
          tagDivMainCarritoCompras = document.createElement("div");
          tagDivMainCarritoCompras.id = "idMainCarritoCompras";
          tagDivMainCarritoCompras.className = "mainCarritoCompras";
          //
          carritoCompras.forEach(articulo =>{tagDivMainCarritoCompras.innerHTML += crearCardArticuloComprado2(articulo)});
          //
          tagDivMainContenedorCarritoCompras.appendChild(tagDivMainCarritoCompras);
          //
          const tagTotalCarritoCompras = document.createElement("p")
          tagTotalCarritoCompras.id = "idMainCarritoComprasTotalArticulo";
          tagTotalCarritoCompras.className = "mainCarritoComprasTotalArticulo";
          const totalCarrito = carritoCompras.reduce((sumador,articulo)  => sumador + (parseInt(articulo.precio)*parseInt(articulo.cantidad)),0);
          tagTotalCarritoCompras.innerText = `Total del carrito de compras: $${totalCarrito}`;
          tagDivMainContenedorCarritoCompras.appendChild(tagTotalCarritoCompras);
          //
        } else {
          tagDivMainCarritoCompras = document.getElementById("idMainCarritoCompras");
        }
     }
     //
  } else {
    crearMensajeDialog("error","El carrito de compras esta vacio");
  }
  //
  if (document.getElementById("idMainContenedorCarritoCompras")) {
     tagDivMainContenedorElementos.replaceChild(tagDivMainContenedorCarritoCompras,(document.getElementById("idMainContenedorCarritoCompras")))
  } else {
     tagDivMainContenedorElementos.appendChild(tagDivMainContenedorCarritoCompras)
  }
  //
  carritoCompras.forEach(articulo =>{
    const tagBotonEliminar = document.getElementById("idBotonEliminarFilaCarrito"+articulo.id);
    tagBotonEliminar.dataset.articuloId = articulo.id;
    tagBotonEliminar.addEventListener("click", (e) =>  {eliminarArticuloDelCarrito(e);});
  });
}

function ocultarCarritoCompras(e){
  e.preventDefault();
  if (document.getElementById("idMainContenedorCarritoCompras")) {
     document.getElementById("idMainContenedorElementos").removeChild(document.getElementById("idMainContenedorCarritoCompras"));
  } else {
    crearMensajeDialog("error","El carrito de compras ya se oculto o esta vacio")
  };
}

function vaciarCarritoCompras(e){
  e.preventDefault();
  carritoCompras.splice(0,carritoCompras.length);
  //
  if (document.getElementById("idMainContenedorCarritoCompras")) {
     document.getElementById("idMainContenedorElementos").removeChild(document.getElementById("idMainContenedorCarritoCompras"));
  } else {
    crearMensajeDialog("error","El carrito de compras esta vacio")
  };
}

function confirmarCarritoCompras(e){
  e.preventDefault();
  //
  if (carritoCompras.length == 0) {
    crearMensajeDialog("error","El carrito de compras no contiene articulos");
  } else {
    const totalCarrito = carritoCompras.reduce((sumador,articulo)  => sumador + (parseInt(articulo.precio)*parseInt(articulo.cantidad)),0);
    crearMensajeDialog("exito","El carrito de compras fue confirmado, el total de la compra es: " + totalCarrito)
  }
}

function crearBotonesCarritoHtml(){
  const tagDivMainContenedorElementos = document.getElementById("idMainContenedorElementos");
  //
  const tagDivMainContenedorCarritoComprasBotones = document.createElement("div");
  tagDivMainContenedorCarritoComprasBotones.id = "idMainContenedorCarritoComprasBotones";
  tagDivMainContenedorCarritoComprasBotones.className = "mainContenedorCarritoComprasBotones";
  //
  const tagDivMainCarritoComprasBotones = document.createElement("div")
  tagDivMainCarritoComprasBotones.id = "idMainCarritoComprasBotones";
  tagDivMainCarritoComprasBotones.className = "mainCarritoComprasBotones";
  //
  const tagDivMainCarritoComprasFila = document.createElement("div");
  tagDivMainCarritoComprasFila.id = "idMainCarritoComprasFila";
  tagDivMainCarritoComprasFila.className = "mainCarritoComprasFila";
  //
  const tagTituloBotonesCarrito = document.createElement("h3");
  tagTituloBotonesCarrito.id = "idTituloBotonesCarrito";
  tagTituloBotonesCarrito.className = "tituloBotonesCarrito";
  tagTituloBotonesCarrito.innerText = "Carrito de Compras";
  //
  const tagBotonVerCarrito = document.createElement("button");
  tagBotonVerCarrito.id = "idBotonVerCarritoCompras";
  tagBotonVerCarrito.className = "buttonGlobal";
  tagBotonVerCarrito.innerText = "Ver";
  tagBotonVerCarrito.addEventListener("click", verCarritoCompras);
  //
  const tagBotonOcultarCarrito = document.createElement("button");
  tagBotonOcultarCarrito.id = "idBotonOcultarCarritoCompras";
  tagBotonOcultarCarrito.className = "buttonGlobal";
  tagBotonOcultarCarrito.innerText = "Ocultar";
  tagBotonOcultarCarrito.addEventListener("click", ocultarCarritoCompras);
  //
  const tagBotonVaciarCarrito = document.createElement("button");
  tagBotonVaciarCarrito.id = "idBotonOcultarCarritoCompras";
  tagBotonVaciarCarrito.className = "buttonGlobal";
  tagBotonVaciarCarrito.innerText = "Vaciar";
  tagBotonVaciarCarrito.addEventListener("click", vaciarCarritoCompras);
  //
  const tagBotonConfirmarCarrito = document.createElement("button");
  tagBotonConfirmarCarrito.id = "idBotonOcultarCarritoCompras";
  tagBotonConfirmarCarrito.className = "buttonGlobal";
  tagBotonConfirmarCarrito.innerText = "Confirmar";
  tagBotonConfirmarCarrito.addEventListener("click", confirmarCarritoCompras);
  //
  tagDivMainContenedorCarritoComprasBotones.appendChild(tagTituloBotonesCarrito);
  tagDivMainCarritoComprasBotones.appendChild(tagBotonVerCarrito);
  tagDivMainCarritoComprasBotones.appendChild(tagBotonOcultarCarrito);
  tagDivMainCarritoComprasBotones.appendChild(tagBotonVaciarCarrito);
  tagDivMainCarritoComprasBotones.appendChild(tagBotonConfirmarCarrito);
  //
  tagDivMainContenedorCarritoComprasBotones.appendChild(tagDivMainCarritoComprasBotones);
  //
  if (document.getElementById("idMainContenedorCarritoComprasBotones")) {
     tagDivMainContenedorElementos.replaceChild(tagDivMainContenedorCarritoComprasBotones,document.getElementById("idMainContenedorCarritoComprasBotones"));
  } else {
     tagDivMainContenedorElementos.appendChild(tagDivMainContenedorCarritoComprasBotones);
  }     
}

function agregarAlCarrito(e) {
  e.preventDefault();
  let articulo;
  const articuloId = e.target.dataset.articuloId;
  //
  const cantidad = document.getElementById("idComprarCantidad"+articuloId).value;
  //
  if (carritoCompras.some(articuloCC => articuloCC.id == articuloId)){
     crearMensajeDialog("error","El articulo ya existe en el carrito de compras");
  } else {
     articulo = listaPrecioArticulos.find(articulo => articulo.id == articuloId);
     articulo.cantidad = cantidad;
     articulo.totalArticulo = articulo.precio*cantidad;
     carritoCompras.push(articulo);
     //
     if(document.getElementById("idMainCarritoCompras")) {
       document.getElementById("idMainCarritoCompras").innerHTML += crearCardArticuloComprado2(articulo);
       //
       if (document.getElementById("idMainCarritoComprasTotalArticulo")) {
          const totalCarrito = carritoCompras.reduce((sumador,articulo)  => sumador + (parseInt(articulo.precio)*parseInt(articulo.cantidad)),0);
          document.getElementById("idMainCarritoComprasTotalArticulo").innerText = `Total del carrito de compras: $${totalCarrito}`;
       }
     }
     if (!document.getElementById("idMainContenedorCarritoComprasBotones")) {
        crearBotonesCarritoHtml();
     }   
     crearMensajeDialog("exito","El articulo fue agregado con exito al carrito de compras");  
  }
  //
  carritoCompras.forEach(articulo =>{
    const tagBotonEliminar = document.getElementById("idBotonEliminarFilaCarrito"+articulo.id);
    tagBotonEliminar.dataset.articuloId = articulo.id;
    tagBotonEliminar.addEventListener("click", (e) =>  {eliminarArticuloDelCarrito(e);});
  });
}

function crearCardCompras(articulosEncontrados){
  let htmlContenido=``;
  //
  articulosEncontrados.forEach(articulo => {
    //
    htmlContenido += `
    <div id="idArticuloEncontrado${articulo.id}" class="articuloEncontrado">
      <h6>ID: ${articulo.id}</h6>
      <h6>NOMBRE: ${articulo.nombre}</h6>
      <h6>MARCA: ${articulo.marca}</h6>
      <h6>PRECIO: ${articulo.precio}</h6>
      <div id="idComprasFilaCantidas" class="comprasFilaCantidad">
        <label class="labelGlobal" for="idComprarCantidad${articulo.id}">Cantidad: </label>
        <input class="inputGlobal" id="idComprarCantidad${articulo.id}" type="number" min=1 max=99 value=1 required>
      </div>
      <button id="idBotonComprar${articulo.id}" class="buttonGlobal">Comprar</button>
    </div>
    `;
  });
  // 
  if (document.getElementById("idMainResultados")) {
     document.getElementById("idMainResultados").innerHTML = ``;
     document.getElementById("idMainResultados").innerHTML = htmlContenido; 
  } else {
    //
    const tagDivMainContenedorElementos = document.getElementById("idMainContenedorElementos");
    //
    const tagDivMainContenedorResultados = document.createElement("div");
    tagDivMainContenedorResultados.id = "idMainContenedorResultados";
    tagDivMainContenedorResultados.className = "mainContenedorResultados";
    //
    const tagDivMainResultados = document.createElement("idMainResultados");
    tagDivMainResultados.id = "idMainResultados";
    tagDivMainResultados.className = "mainResultados";
    tagDivMainResultados.innerHTML = htmlContenido;
    //
    tagDivMainContenedorResultados.appendChild(tagDivMainResultados);
    //
    tagDivMainContenedorElementos.appendChild(tagDivMainContenedorResultados);
  }
  //
  articulosEncontrados.forEach(articulo => {
    const tagBotonComprar = document.getElementById("idBotonComprar"+articulo.id);
    tagBotonComprar.dataset.articuloId = articulo.id;
    tagBotonComprar.addEventListener("click" , (e) => agregarAlCarrito(e));
    });
}

function buscarArticulosCompras(e){
  e.preventDefault();
  let filtro;
  let articulosEncontrados = [];
  //
  filtro = document.getElementById("idComprarCategoriaSelect").value.toUpperCase();
  articulosEncontrados = listaPrecioArticulos.filter(articulo => articulo.categoria.toUpperCase().includes(filtro.toUpperCase()));
  //
  if (articulosEncontrados.length > 0){
     crearCardCompras(articulosEncontrados);
  };
}

function buscarArticulo(e){
  e.preventDefault();
  const idMenu = e.target.dataset.idMenu;
  //
  let resultadoBusqueda = false;
  let filtro;
  let articulosEncontrados = [];
  //
  switch(idMenu){
    case "idBuscarArticuloPorId":
      filtro = document.getElementById("idBuscarArticuloPorIdInput").value;
      resultadoBusqueda = listaPrecioArticulos.some(articulo => articulo.id == filtro);
      if (resultadoBusqueda){
         let articuloEncontrado = listaPrecioArticulos.find(articulo => articulo.id == filtro);
         articulosEncontrados = [
         {          
           id: articuloEncontrado.id,
           codigo: articuloEncontrado.codigo,
           nombre: articuloEncontrado.nombre,
           marca: articuloEncontrado.marca,
           categoria: articuloEncontrado.categoria,
           precio: articuloEncontrado.precio
         }
         ];
      };
      break;
    case "idBuscarArticuloPorNombre":
      filtro = document.getElementById("idBuscarArticuloPorNombreInput").value.toUpperCase();
      articulosEncontrados = listaPrecioArticulos.filter(articulo => articulo.nombre.toUpperCase().includes(filtro.toUpperCase()));
      if (articulosEncontrados.length > 0){
         resultadoBusqueda = true;
      };
      break;
    case "idBuscarArticuloPorCategoria":
      filtro = document.getElementById("idBuscarArticuloPorCategoriaSelect").value.toUpperCase();
      articulosEncontrados = listaPrecioArticulos.filter(articulo => articulo.categoria.toUpperCase().includes(filtro.toUpperCase()));
      if (articulosEncontrados.length > 0){
         resultadoBusqueda = true;
      };
      break;
    case "idVerificarExistenciaArticulo":
      filtro = document.getElementById("idBuscarArticuloPorCodigoInput").value.toUpperCase();
      resultadoBusqueda = listaPrecioArticulos.some(articulo => articulo.codigo.toUpperCase() == filtro.toUpperCase());
      if (resultadoBusqueda){
         let articuloEncontrado = listaPrecioArticulos.find(articulo => articulo.codigo.toUpperCase() == filtro.toUpperCase());
         articulosEncontrados = [
         {          
           id: articuloEncontrado.id,
           codigo: articuloEncontrado.codigo,
           nombre: articuloEncontrado.nombre,
           marca: articuloEncontrado.marca,
           categoria: articuloEncontrado.categoria,
           precio: articuloEncontrado.precio
         }
         ];
      };
      break;
    case "idComprar":
      filtro = document.getElementById("idComprarCategoriaSelect").value.toUpperCase();
      articulosEncontrados = listaPrecioArticulos.filter(articulo => articulo.categoria.toUpperCase().includes(filtro.toUpperCase()));
      if (articulosEncontrados.length > 0){
         resultadoBusqueda = true;
      };
      break;
    default:
      break;  
  }
  //
  let htmlContenido;
  //
  const tagContenido = document.createElement("div");
  tagContenido.id = "idMainContenedorResultados";
  tagContenido.className = "mainContenedorResultados";
  tagContenido.innerHTML =``;
  //
  if (!resultadoBusqueda){
     crearMensajeDialog("error", "No se encontraron articulos para estos filtros");
  } else {
     htmlContenido = `<div id="idMainResultados" class="mainResultados">`;
     articulosEncontrados.forEach(articulo => {htmlContenido += crearCard(articulo)});
     htmlContenido += `</div>`;
     tagContenido.innerHTML = htmlContenido;
  };
  //
  if (document.getElementById("idMainContenedorResultados")) {
     document.getElementById("idMainContenedorResultados").innerHTML = tagContenido.innerHTML;
  } else {
     document.getElementById("idMainContenedorElementos").appendChild(tagContenido);
  };
}

function crearListado(idMenu){
  let htmlContenido = ``;
  if (idMenu="idCrearListadoArticulosConDescuento") {
     htmlContenido = document.getElementById("idMainListado").innerHTML;
  }
  htmlContenido += `
                    <table id="idMainListadoTable" class="mainListadoTable">
                      <thead class="mainListadoThead">
                        <tr class="mainListadoTr">
                            <th>ID</th>
                            <th>Código</th>
                            <th>Nombre del Artículo</th>
                            <th>Marca</th>
                            <th>Categoría</th>
                            <th>Precio</th>
                        </tr>
                      </thead>
                      <tbody id="idMainListadoTbody" class="mainListadoTbody">
                      </tbody>
                     </table>`;
  //
  document.getElementById("idMainListado").innerHTML = htmlContenido;
  cargarListado(idMenu);
}

function cargarListado(idMenu){
  let lista = []; 
  listaPrecioArticulos.forEach(articulo => lista.push(articulo));
  let htmlContenido=` `;
  //
  if (idMenu == "idListarArticulosConDescuento") {
     let valorDescuento = document.getElementById("idListarArticulosConDescuentoInputDescuento").value;
     lista = listaPrecioArticulos.map(articulo => {
     let precioDescuento = articulo.precio - (articulo.precio * (valorDescuento/100));
     return {
         id: articulo.id,
         codigo: articulo.codigo,
         nombre: articulo.nombre,
         marca: articulo.marca,
         categoria: articulo.categoria,
         precio: precioDescuento
     };
    });
  };
  // 
  lista.forEach(articulo => {    
  htmlContenido += `<tr id="idMainListadoTbodyTr" class="mainListadoTbodyTr">
                           <td>${articulo.id}</td>
                           <td>${articulo.codigo.toUpperCase()}</td>
                           <td>${articulo.nombre.toUpperCase()}</td>
                           <td>${articulo.marca.toUpperCase()}</td>
                           <td>${articulo.categoria.toUpperCase()}</td>
                           <td>$${articulo.precio}</td>
                      </tr>`;
  }); 
  //
  document.getElementById("idMainListadoTbody").innerHTML = htmlContenido;
}

function crearNodoDescuentoInput(idMenu){  
  const tagMainListadoFila = document.createElement("div");
  tagMainListadoFila.className = "mainListadoFila";
  const tagLabel = document.createElement("label");
  tagLabel.className = "labelGlobal";
  tagLabel.setAttribute("for","idListarArticulosConDescuentoInputDescuento");
  tagLabel.innerText ="Descuento: "
  const tagInput = document.createElement("input");
  tagInput.className = "inputGlobal";
  tagInput.type = "number";
  tagInput.id = "idListarArticulosConDescuentoInputDescuento";
  tagInput.name = "listarArticulosConDescuentoInputDescuento";
  tagInput.value = 0;
  tagMainListadoFila.appendChild(tagLabel);
  tagMainListadoFila.appendChild(tagInput);
  const tagMainContenedorElementos = document.getElementById("idMainContenedorElementos");
  tagMainContenedorElementos.insertBefore(tagMainListadoFila,document.getElementById("idMainContenedorListado"));
  tagInput.addEventListener("input", () => cargarListado(idMenu));
}

function crearCamposHtml(idMenu){
    let htmlContenido;
    switch(idMenu) {
      case "idCrearArticulo":
        htmlContenido =  `<div class="mainFormularioFila">
                    <label class="labelGlobal" for="idCrearArticuloCodigo" >Codigo:</label>
                    <input class="inputGlobal" type="text" id="idCrearArticuloCodigo" name="crearArticuloCodigo" required>
                 </div>
                 <div class="mainFormularioFila">
                    <label class="labelGlobal" for="idCrearArticuloNombre" >Nombre:</label>
                    <input class="inputGlobal" type="text" id="idCrearArticuloNombre" name="crearArticuloNombre" required>
                 </div>
                 <div class="mainFormularioFila">
                    <label class="labelGlobal" for="idCrearArticuloMarca" >Marca:</label>
                    <input class="inputGlobal" type="text" id="idCrearArticuloMarca" name="crearArticuloMarca" required>
                 </div>
                 <div class="mainFormularioFila">
                    <label class="labelGlobal" for="idCrearArticuloCategoria" >Categoria:</label>
                    <select id="idCrearArticuloCategoria" name="crearArticuloCategoria" required="">
                      <option value="">Seleccione Una Categoria</option>
                      <option value="TELEVISOR">TELEVISOR</option>
                      <option value="COCINA">COCINA</option>
                      <option value="HELADERA">HELADERA</option>
                    </select>
                 </div>
                 <div class="mainFormularioFila">
                    <label class="labelGlobal" for="idCrearArticuloPrecio" >Precio:</label>
                    <input class="inputGlobal" type="number" id="idCrearArticuloPrecio" name="crearArticuloPrecio" required>
                 </div>
                 <div class="mainFormularioFila">
                    <button class="buttonGlobal" type="submit">Guardar</button>
                 </div>`;
        break;
      case "idListarArticulosConDescuento":
        htmlContenido = ` `;
        break;
      case "idBuscarArticuloPorId":
        htmlContenido = `<div id="idMainFormularioFila" class="mainFormularioFila">
                    <label class="labelGlobal" for="idBuscarArticuloPorIdInput" >ID:</label>
                    <input class="inputGlobal" type="text" id="idBuscarArticuloPorIdInput" name="buscarArticuloPorIdInput" required>
                    </div>
                 <div class="mainFormularioFila">
                    <button class="buttonGlobal" type="submit">Buscar</button>
                 </div>`;
        break;
      case "idBuscarArticuloPorCategoria":
        htmlContenido = `<div id="idMainFormularioFila" class="mainFormularioFila">
                    <label class="labelGlobal" for="idBuscarArticuloPorCategoriaSelect" >Categoria:</label>
                    <select id="idBuscarArticuloPorCategoriaSelect" name="buscarArticuloPorCategoriaSelect" required>
                      <option value="">Seleccione Una Categoria</option>
                      <option value="TELEVISOR">TELEVISOR</option>
                      <option value="COCINA">COCINA</option>
                      <option value="HELADERA">HELADERA</option>
                    </select>
                    </div>
                 <div class="mainFormularioFila">
                    <button class="buttonGlobal" type="submit">Buscar</button>
                 </div>`;
        break;
      case "idBuscarArticuloPorNombre":
        htmlContenido = `<div id="idMainFormularioFila" class="mainFormularioFila">
                    <label class="labelGlobal" for="idBuscarArticuloPorNombreInput" >Nombre:</label>
                    <input class="inputGlobal" type="text" id="idBuscarArticuloPorNombreInput" name="BuscarArticuloPorNombreInput" required>
                    </div>
                 <div class="mainFormularioFila">
                    <button class="buttonGlobal" type="submit">Buscar</button>
                 </div>`;
        break;
      case "idVerificarExistenciaArticulo":
        htmlContenido = `<div id="idMainFormularioFila" class="mainFormularioFila">
                    <label class="labelGlobal" for="idBuscarArticuloPorCodigoInput" >Codigo:</label>
                    <input class="inputGlobal" type="text" id="idBuscarArticuloPorCodigoInput" name="BuscarArticuloPorCodigoInput" required>
                    </div>
                 <div class="mainFormularioFila">
                    <button class="buttonGlobal" type="submit">Buscar</button>
                 </div>`;
        break;
      case "idComprar":
        htmlContenido =  `
                 <div class="mainFormularioFila">
                    <label class="labelGlobal" for="idComprarCategoriaSelect" >Categoria:</label>
                    <select id="idComprarCategoriaSelect" name="comprarCategoria">
                      <option value="">Seleccione Una Categoria</option>
                      <option value="TELEVISOR">TELEVISOR</option>
                      <option value="COCINA">COCINA</option>
                      <option value="HELADERA">HELADERA</option>
                    </select>
                 </div>
                 <div class="mainFormularioFila">
                    <button class="buttonGlobal" type="submit">Buscar</button>
                 </div>`;
        break;
      default:
        break;  
    };
    //
    document.getElementById("idMainFormulario").innerHTML = htmlContenido;
    //
}

function crearCampos(idMenu){
  const tagFormulario = document.getElementById("idMainFormulario");
  //
  switch(idMenu){
    case "idCrearArticulo":
      crearCamposHtml(idMenu);  
      tagFormulario.addEventListener("submit", cargarArticulo);
      break;
    case "idListarArticulos":
      break;
    case "idListarArticulosConDescuento":
      crearNodoDescuentoInput(idMenu);
      break;      
    case "idBuscarArticuloPorId":
      crearCamposHtml(idMenu);
      tagFormulario.dataset.idMenu = idMenu;  
      tagFormulario.addEventListener("submit", buscarArticulo);
      break;
    case "idBuscarArticuloPorCategoria":
      tagFormulario.dataset.idMenu = idMenu;  
      crearCamposHtml(idMenu);  
      tagFormulario.addEventListener("submit", buscarArticulo);
      break;
    case "idBuscarArticuloPorNombre":
      tagFormulario.dataset.idMenu = idMenu;  
      crearCamposHtml(idMenu);  
      tagFormulario.addEventListener("submit", buscarArticulo);
      break;
    case "idVerificarExistenciaArticulo":
      tagFormulario.dataset.idMenu = idMenu;  
      crearCamposHtml(idMenu);  
      tagFormulario.addEventListener("submit", buscarArticulo);
      break;
    case "idComprar":
      crearCamposHtml(idMenu);  
      tagFormulario.dataset.idMenu = idMenu; 
      tagFormulario.addEventListener("submit", buscarArticulosCompras);
      break;
    default:
      break;
  }
}

function crearContenedor(idMenu,tituloMenu, claseContenedor,tipoContenedor, tagContenedor) {
    let htmlContenido;
    htmlContenido = `
    <div id="idMainContenedor" class="mainContenedor">
       <div id="idMainContenedorElementos" class="mainContenedorElementos">
          <h2 id="idMainTitulo" class="mainTitulo">${tituloMenu}</h2>
          <div id="idMainContenedor${tipoContenedor}" class="mainContenedor${tipoContenedor}"> `;
    //          
    if (tipoContenedor == "Formulario") {
        htmlContenido += `
              <${tagContenedor} id="idMain${tipoContenedor}" class="main${tipoContenedor}" method="POST">
              </${tagContenedor}>`;
    } else {
        htmlContenido += `
              <${tagContenedor} id="idMain${tipoContenedor}" class="main${tipoContenedor}">
              </${tagContenedor}>`;
    };
    //           
    htmlContenido += `
          </div>
       </div>
    </div>
    `;
   document.querySelector("main").innerHTML = htmlContenido;
}

function crearPagina(e) {
  e.preventDefault();
  const idMenu = e.target.dataset.idMenu;
  const tituloMenu = e.target.dataset.tituloMenu;
  const claseContenedor = e.target.dataset.claseContenedor;
  const tipoContenedor = e.target.dataset.tipoContenedor;
  const tagContenedor = e.target.dataset.tagContenedor;
  crearContenedor(idMenu,tituloMenu, claseContenedor,tipoContenedor, tagContenedor);
  crearCampos(idMenu);
  if (idMenu=="idListarArticulos" || idMenu=="idListarArticulosConDescuento") {
     crearListado(idMenu);
  }
}
//
listaMenu.forEach(menu => {
  const crearFormularioOpcion = document.getElementById(menu.id);
  crearFormularioOpcion.dataset.idMenu = menu.id;
  crearFormularioOpcion.dataset.tituloMenu = menu.titulo;
  crearFormularioOpcion.dataset.claseContenedor = menu.clase;
  crearFormularioOpcion.dataset.tipoContenedor = menu.tipoContenedor;
  crearFormularioOpcion.dataset.tagContenedor = menu.tagContenedor;
  crearFormularioOpcion.addEventListener("click", crearPagina);  
});
