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
// Source: https://stackoverflow.com/questions/2496710/writing-to-files-in-node-js
app.post("/api/notes/createNote", (request, response) => {
  fs.writeFile("/private/test", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
  }); 
  response.json({message:"worked"});
});

app.listen(4000, () => {
  console.log("Escuchando en: http://localhost:4000");
});
