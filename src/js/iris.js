/* let model = {
    altura : 100,
    thc: 20,
    tipo: "Auto",
    database: []
}; */


let modeloComponenete1 = {};


function initComponente1(modelo){
    
    modeloComponente1  = {
seleccionado: "setosa",
medias: [
    {tipo:"setosa", petalLengthAvg: 5.4, sepalLengthAvg: 4.3}
    {tipo:"virginica", petalLengthAvg: 5.4, sepalLengthAvg: 4.3}
    {tipo:"versicolor", petalLengthAvg: 5.4, sepalLengthAvg: 4.3}
    ]
    }
    viewComponente1(modeloComponente1);
}



function viewComponente1(modelo){

        const selectedTipo = modelo.medias

}






function vistaDropDown(modelo){

    const label = '<label for="especie">Seleccione la Especie</label>';


    const listaOpciones = '<select name="especie" id="especie">' 
    +
    modelo.medias
    .map(media => media.tipo)
    .map(tipo => <option value ='"+tipo+"'>"+tipo+"</option>)
    .reduce((acc, curr) => acc+curr, "");
    +
    '</select>'

    return label + listaOpciones;

}