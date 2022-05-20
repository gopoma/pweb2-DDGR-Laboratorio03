
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
  .then(data =>{
    console.log(data);
    console.log(data.files[0]);
    for(let i=0; i<data.files.length; i++){
      let p = `<p onclick="showContent('${data.files[i]}')">${data.files[i]}</p><br>`;
      html = html + p;
    }
    document.getElementById('main').innerHTML = html;
  })
  document.getElementById("main").innerHTML = "Página de lista archivos Markdown"; // evento
}

function showCreateDocument(){
  
  let html = `<form id="noteForm"><input type="text" id="title" placeholder="Title"><textarea id="content" cols="30" rows="10" placeholder="Content"></textarea><button onclick="addDocument()">Create</button></form>`;

  document.getElementById("main").innerHTML = html;
  
}

function addDocument(){
  console.log("Entra Aqui");
  document.querySelector("#noteForm").onsubmit = function (){
    console.log("Entra aqui x2");
    const data ={
      title: document.querySelector("#title").value,
      content: document.querySelector("#content").value
    };
    
    const url = "http://localhost:4000/api/notes/createNote";
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }

    fetch(url, request)
    .then(response => response.json())
    .then(data =>{
      console.log(data);
    })
    .catch(error => {console.log(error);})
    return false;
  }
}

function showContent(name){
  let html = "";
  let titulo ="";
  const data = {
    title: name
  };
  const url = "http://localhost:4000/api/notes/getNote";
  const request ={
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  fetch(url, request)
  .then(response => response.json())
  .then(data =>{
    console.log(data.title);
    console.log(data.content);
    titulo = `<h1 style="color: red">${data.title}</h1>`;
    html += titulo + data.content;
    document.getElementById('main').innerHTML = html;
  })
}
