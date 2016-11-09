# MEAN Convention

## Setting up the db

`npm init -y`

`npm install --save mongoose`

## Install other modules
`npm install --save <module-name>`
- `install` aka `i`
- `--save` aka `-S`

Other commonly used modules
- `express` - http request library
- `hbs` - handlebars view templating
- `body-parser` - to handle html forms

### Create other directories and files
```shell
mkdir db views public
```

```shell
touch index.js db/connection.js db/models.js db/seed.js db/seeds.json views/layout.hbs
```

### connection.js
- this file will only be required by index.js and seed.js
- require mongoose
```javascript
var mongoose = require("mongoose")
```
- mongoose.connect
```javascript
mongoose.connect("mongodb://localhost/<db-name>")
```
- import promises (mongoose no longer supports their own promise library)
```javascript
mongoose.Promise = global.Promise
```
- export the module
```javascript
module.exports = mongoose
```

```javascript
var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/<db-name>")
mongoose.Promise = global.Promise
module.exports = mongoose
```

### schema.js
- require mongoose in order to instantiate schemas
```javascript
var mongoose = require("mongoose")
```
- create schema
```javascript
var Schema = mongoose.Schema
```
- create schemas
```javascript
var CollectionNameSchema = new Schema({
    column_name: Datatype
})
```
- export schemas
```javascript
module.exports = {
  CollectionNameSchemaOne,
  CollectionNameSchemaTwo,
  CollectionNameSchemaThree
}
```

### models.js
- require mongoose in order to instantiate models
```javascript
var mongoose = require("mongoose")
```
- require schema.js
```javascript
var CollectionNameSchema = require("./schema.js").CollectionNameSchema
```
- create models from schemas
```javascript
var ModelName = mongoose.model("ModelName", CollectionNameSchema)
```
- export
```javascript
module.exports = {
  ModelName,
  ModelName
}
```

### seed.js
- require connection.js
- require model.js
- define seed data (either in file or sepearate json)
  - require json file if necessary
- ??? Declare model
- ??? Drop database and seed

### seeds.json
- create json objects in an arrray
  - no trailing commas in json
- nothing else in the file
```json
[
    {
      "thing": 1
    },
    {
      "thing": 2
    }
]
```

### index.js
- require connection.js
```javascript
var mongoose = require("db/connection.js")
```
- ??? require any models
```javascript
mongoose.models = require("db/models.js")
```
- require express
```javascript
var express = require("express")
```
- require other modules
```javascript
var parser = require("body-parser")
var hbs = require ("express-handlebars")
```
- invoke express as app
```javascript
var app = express()
```
- set port handling / default local port
```javascript
app.set("port", process.env.PORT || 3000)
```
- set view engine
```javascript
app.set("view engine", "hbs")
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/"
  layoutDir: "views/"
  defaultLayout: "layout"
}))
```
- use styles
```javascript
app.use("/assets", express.static("public"))
```
- set your RESTful routes
```javascript
app.<http-method>("<route>", function(req, res) {
  // handle the incoming request
  // then prepare the response
})
```
- listen for http requests
```javascript
app.listen(app.get("port"), function(){
  console.log("Listening!")
})
```

### layout.hbs
- create basic html doc
- add view syntax inside body tag
```html
<body>
  {{{body}}}
</body>
```
