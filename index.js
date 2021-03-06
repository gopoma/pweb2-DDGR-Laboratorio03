const path = require('path');
const fs = require("fs");
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
app.get("/api/notes/getAll", (request, response) => {
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
  console.log("este es el request : "+request.body.title);
  let markDownTitle = request.body.title;
  console.log("Este es el title de loq se pide: "+markDownTitle);
  fs.readFile(path.resolve(__dirname,"private",markDownTitle),"utf8",
    (err, data) => {
      if (err) {
        console.error(err)
        response.status(500).json({
          error: 'message'
        })
        return
      }
      console.log("esto es data");
      console.table(data);
      let htmlText=md.render(String(data));
      response.json({
        title: markDownTitle , content: htmlText
      })
    })
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
