const fs = require('fs')
const path = require('path');
const express = require('express');
const bp = require("body-parser");
const MarkdownIt = require('markdown-it'),
  md = new MarkdownIt();

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.use(bp.json());
app.use(bp.urlencoded({
  extended: true
}))


app.get("/", (request, response) => {
  response.sendFile(path.resolve(__dirname, "index.html"));
});

// {"title": "", "content": ""}

// TODO: Listas los archivos Markdown disponibles (Diego)
app.post("/api/notes/getAll", (request, response) => {
  console.log(request.body)
  //Para listar todos los archivos utilizamos fs ,se saco de :
  //https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j
  var files = fs.readdirSync(path.resolve(__dirname,"private"));
  console.log(files);
  response.json({
      files
    });
  
});

// TODO: Ver el contenido de un archivo Markdown traducido a HTML (Diego)
app.post("/api/notes/getNote", (request, response) => {
  response.json(request.body);
});

// TODO: Crear nuevos archivos MarkDown y almacenarlos en el servidor (Gustavo)
app.post("/api/notes/createNote", (request, response) => {
  response.json(request.body);
});

app.listen(4000, () => {
  console.log("Escuchando en: http://localhost:4000");
});
