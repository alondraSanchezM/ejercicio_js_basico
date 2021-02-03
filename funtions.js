function Platillo(nombre,precio,tipo) {
    this.nombre = nombre;
    this.precio = precio;
    this.tipo = tipo;
  }
  
  var platillos = [];
  var p1 = new Platillo("Hongos Portobello",115,"Aperitivo");
  var p2 = new Platillo("Pasta Gamberi",130,"Aperitivo");
  var p3 = new Platillo("Trío de Bruschetas Serrano",115,"Aperitivo");
  var p4 = new Platillo("Milanesa de Pollo",93,"Carne");
  var p5 = new Platillo("Filete de Pescado",115,"Pescado");
  var p6 = new Platillo("Pollo al limón",210,"Carne");
  var p7 = new Platillo("Chicarron de rib eye",295,"Carne");
  var p8= new Platillo("Pastel de Chocolate",60,"Postre");
  var p9 = new Platillo("Flan Napolitano",35,"Postre");
  var p10 = new Platillo("Fondant Choco",115,"Postre");
  platillos.push(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10);

  function obtenerNombre() {
    var obtenerN = prompt("Ingrese el nombre del nuevo platillo");
  
    return obtenerN;
  }
  
  function obtenerPrecio() {
    var obtenerE = prompt("Ingrese el precio del nuevo platilo");
    obtenerE = parseInt(obtenerE);
  
    return obtenerE;
  }
  
  function obtenerTipo() {
    var obtenerT = prompt("Ingrese el tipo del nuevo platilo");
    obtenerT = obtenerT;
  
    return obtenerT;
  }
  
  function addPlatillo() {
    var p = new Platillo(obtenerNombre(), obtenerPrecio(), obtenerTipo());
    platillos.push(p);
    mostrarListado();
  }
  
  function searchPlatillo(platilloBuscado){
    var indice = -1;
    for (var i = 0; i < platillos.length; i++) {
      if (platillos[i].nombre == platilloBuscado) {
        indice = i;
      }
    }
    return indice;
  }
  
  function modificarPlatillo(){
    var platilloMod = prompt("Ingrese el nombre del Platillo a modificar");
    var indice = searchPlatillo(platilloMod);
  
    if (indice != -1) {
      var opc = prompt("Ingrese opción a modificar: 1.Nombre, 2.Precio, 3.Tipo");
  
      switch (parseInt(opc)) {
          case 1:
            platillos[indice].nombre = prompt("Ingrese el nuevo nombre del platillo");
            alert("Platillo modificado con exito");
            mostrarListado();
            break;
          case 2:
            platillos[indice].precio = prompt("Ingrese el nuevo precio del platillo");
            alert("Platillo modificado con exito");
            mostrarListado();
            break;
          case 3:
            platillos[indice].tipo = prompt("Ingrese el nuevo tipo del platillo");
            alert("Platillo modificado con exito");
            mostrarListado();
            break;
          default:
            alert("Opción invalida");
        }
    }else {
      alert("Platillo no encontrado");
    }
  }
  
  function deletePlatillo(){
    var platilloDelete = prompt("Ingrese el nombre del Platillo a eliminar");
    var indice = searchPlatillo(platilloDelete);
  
    if (indice != -1) {
      platillos.splice(indice, 1);
      alert("Platillo eliminado con exito");
      mostrarListado();
    }else {
      alert("Platillo no encontrado");
    }
  }
  
  function mostrarListado() {
    var listado = '';
    var cont = 1;
 
    for (var i = 0; i < platillos.length; i++) {
      listado += `<div>
                   <h2>${platillos[i].nombre}</h2>
                   <ul>
                     <li>Precio de venta: $${platillos[i].precio}MXN</li>
                     <li>Tipo de comida: ${platillos[i].tipo}</li>
                   </ul>
                 </div>`;
      cont++;
    }
    document.querySelector('.wrapper').innerHTML = listado;
 }