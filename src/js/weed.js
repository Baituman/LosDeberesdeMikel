// El modelo incluye las condiciones del filtro junto con toda la lista de 
// de personas que hemos leído del fichero database.json, que no es sino un objeto JSON
// 
let model = {
    altura : 100,
    thc: 20,
    tipo: "Auto",
    database: []
};

function weed_init(){
    
    // leemos los datos, hay que tener en cuenta que esta llamada, 
    // fetch, es asyncrona, eso quiere decir que la ejecución continua sin esperar respuesta
    // por lo que si llamaramos a la vista no veríamos nada ya que los datos no se habrían leído.
    // Por este motivo, la llamada a la vista está dentro de la función de abajo, esta función
    // se llama callback, y se va a ejecutar cuando la lectura haya terminado.
    fetch('database.json')
    .then((response) => response.json())
    .then((json) => {
        model.database = json.data
        weed_view();
    });
}

function  weed_update(action){

    if(action == "sliderAltura")
        model.altura = document.getElementById("sliderAltura").value;

    if(action == "sliderThc")
        model.thc = document.getElementById("sliderThc").value;

    if(action == "Indica" || action == "Sativa" || action == "Auto")
        model.tipo = action;


    weed_view();
}

// La vista va a renderizarse a partir del modelo y SOLO del modelo 
function weed_view(){

    document.getElementById("sliderAlturaValor").innerHTML = model.altura;
    document.getElementById("sliderThcValor").innerHTML = model.thc;

    document.getElementById("cardArea").innerHTML = "";

    model.database
     .filter(variedad => 
            variedad.altura >= model.altura
          && variedad.thc >= model.thc
         && variedad.tipo === model.tipo 
     )
    .forEach(variedad => {
        document.getElementById("cardArea").append(weed_viewCard(variedad));
    });
}

function weed_viewCard(variedad){

    let card = document.createElement("div");
    card.className = "card";

    let imageContainer = document.createElement("div");
    imageContainer.className= "imgBx";
    let image = document.createElement("img") ;
    image.src = variedad.foto;
    image.alt = variedad.nombre;
    imageContainer.append(image);
    card.append(imageContainer);


    let content = document.createElement("div");
    content.className= "contentBx";
    content.innerHTML = "<h2>"+variedad.nombre+"</h2>";

    
    let infoContainer = document.createElement("div");
    infoContainer.className = "size";
    let datosPersonales = document.createElement("p");
    datosPersonales.className = "card-data";
    datosPersonales.innerHTML = 
    "<b>Thc</b> :" + variedad.thc + "<br />"
    +"<b>Tipo</b> :" + variedad.tipo + "<br />"
    +"<b>Efectos</b> :" +variedad.efectos+ "<br />"
    +"<b>Altura</b> :"+variedad.altura+ "<br /> <br />";
    let buyNow = document.createElement("a");
    buyNow.innerText = "Buy Now";
    buyNow.href = "https://www.royalqueenseeds.es/";
    datosPersonales.append(buyNow);
    infoContainer.append(datosPersonales);
    content.append(infoContainer);

    card.append(content);


    return card;
}