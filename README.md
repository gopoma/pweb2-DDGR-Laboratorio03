# pweb2-DDGR-Laboratorio03
**Integrantes:**
* Diego Alonso Huamani Luque
* Gustavo Eduardo Ordoño Poma
* Diego Ivan Pacori Anccasi
* Rodrigo Alejandro Veliz Saihua

**Description:**

Este sistema fue desarrollado por alumnos del segundo año de la Escuela Profesional de Ingeniería de Sistemas, de la Universidad Nacional de San Agustín de Arequipa.

Este sistema fué desarrollado usando estas tecnologías:

* HTML y CSS
* El Framework Express basado en NodeJS para el BackEnd
* Los archivos se guardaron en Sistema de Archivos del Sistema Operativo del Servidor a través de la dependencia nativa File System (fs).
* JavaScript para el FrontEnd
* Las páginas se escriben en lenguaje Markdown
* Se utilizó la dependencia markdown-it
* La comunicación entre el Cliente y el Servidor se hizo usando JSON de manera asíncrona.

### Install dependencies
```bash
npm install
```

### Run the app
```bash
node index.js
```

# Markdown Notes
The RESTFul API is described below.

## Listar los archivos Markdown disponibles
### Request
`GET /api/notes/getAll`

### Response
```json
  {
    files: [
      "nota.md",
      "nota2.md",
      "nota3.md",
      "nota4.md",
      "note10.md",
      "note11.js.js.js.css.md",
      "note11.js.js.js.csxsdadasdas.js.java.md",
      "note11.js.js.js.csxsdadasdas.js.javascript.gooooo.md.css..md",
      "note11.js.js.js.csxsdadasdas.js.javascript.gooooo.md.css.md",
      "note11.js.js.js.csxsdadasdas.js.javascript.gooooo.md.queso.md",
      "note11.js.js.js.csxsdadasdas.md",
      "note11.js.js.js.md.md.md",
      "note11.md",
    ]
  }
```

## Crear nuevos archivos MarkDown y almacenarlos en el servidor
### Request
`POST /api/notes/createNote`

```json
body: {
  "title": "pweb2",
  "content": "AJAX y NodeJS"
}
```

## Response
```json
{
  "message": "The file was created"
}
```
