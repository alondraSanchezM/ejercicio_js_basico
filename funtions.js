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