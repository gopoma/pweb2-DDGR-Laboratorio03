const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (request, response) => {
  response.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(4000, () => {
  console.log("Escuchando en: http://localhost:4000");
});
