
// 
function showWelcome(){
  document.getElementById("main").innerHTML = "<h1>¡Bienvenido!<br>Usted puede escribir archivos Markdown en Menú/Crear Documento y revisar sus creaciones en Menú/Lista</h1>"; // evento
}

function showListMarkdown(){
  let html = "";
  const url = "http://localhost:4000/api/notes/getAll";
  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
    console.log(data.files[0]);
    for(let i=0; i<data.files.length; i++){
      let p = `<p onclick="showContent()">${data.files[i]}</p><br>`;
      html = html + p;
    }
  document.getElementById('main').innerHTML = html;
  })
}

function showCreateDocument(){
  document.getElementById("main").innerHTML = "Página de creación archivo Markdown"; // evento
}


console.log("Funciona!");

