
// 
function showWelcome(){
  document.getElementById("main").innerHTML = "<h1>¡Bienvenido!<br>Usted puede escribir archivos Markdown en Menú/Crear Documento y revisar sus creaciones en Menú/Lista</h1>"; // evento
}

function showListMarkdown(){
  document.getElementById("main").innerHTML = "Página de lista archivos Markdown"; // evento
}

function showCreateDocument(){
  document.getElementById("main").innerHTML = "Página de creación archivo Markdown"; // evento
}


console.log("Funciona!");

