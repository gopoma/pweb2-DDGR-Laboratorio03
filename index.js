const path = require('path');
const fs = require("fs");
const express = require('express');
const bp = require("body-parser");

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.use(bp.json());

app.get("/", (request, response) => {
  response.sendFile(path.resolve(__dirname, "index.html"));
});

// {"title": "", "content": ""}

// TODO: Listas los archivos Markdown disponibles (Diego)
app.get("/api/notes/getAll", (request, response) => {
  response.json({});
});

// TODO: Ver el contenido de un archivo Markdown traducido a HTML (Diego)
app.post("/api/notes/getNote", (request, response) => {
  response.json(request.body);
});

// TODO: Crear nuevos archivos MarkDown y almacenarlos en el servidor (Gustavo)
// Source for fs.writeFile: https://stackoverflow.com/questions/2496710/writing-to-files-in-node-js
// Source for String.prototype.split: https://stackoverflow.com/questions/1493407/how-to-split-a-string-in-javascript
app.post("/api/notes/createNote", (request, response) => {
  if(!request.body.title) {
    response.status(400).json({error:true, message:"Please provide title"});
    return;
  }

  const titleComponents = request.body.title.split(".");
  if(titleComponents[titleComponents.length - 1] !== "md") {
    request.body.title += ".md"
  }

  const {title, content} = request.body;
  fs.writeFile(path.resolve(__dirname, `private/${title}`), content, function(err) {
    if(err) {
      response.status(500).json({error:true, message:"A wild error has appeared!"});
      return;
    }
    response.status(201).json({message:"The file was saved!"});
  }); 
});

app.listen(4000, () => {
  console.log("Escuchando en: http://localhost:4000");
});
