function addOpinion(){
    var list = document.getElementById("list");
    var text = document.getElementById("opinion").value;
     
    if(text.laught == 0){ 
    alert ('Comentário inválido!');
    return;
 }

var listFilm = document.createElement("li");   
const textOpinion = document.createTextNode(text);
listFilm.appendChild(textOpinion);
list.appendChild(listFilm);
}

export default button;