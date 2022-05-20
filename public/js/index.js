
// 
function showWelcome(){
  document.getElementById("main").innerHTML = "<h1>¡Bienvenido!<br>Usted puede escribir archivos Markdown en Menú/Crear Documento y revisar sus creaciones en Menú/Lista</h1>"; // evento
}

function showListMarkdown(){
  const url="http://localhost:4000/api/notes/getAll";
  let p = "<p></p>"
  fetch(url)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data);
    console.log(data.files[0]);
  })
  document.getElementById("main").innerHTML = "<h2>Lista de documentos Markdown creados</h2><br>"; // evento
}

function showCreateDocument(){
  document.getElementById("main").innerHTML = "Página de creación archivo Markdown"; // evento
}


console.log("Funciona!");

