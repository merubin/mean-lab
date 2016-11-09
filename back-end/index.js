/* our project Smile
Smile captures your photos and allows you to add title, and description for later gouping with a gallery
 */

 var express = require("express");
 var parser = require("body-parser")
 var db = require("./db/connection");
 var schema=require("./db/schema");

 var app = express();

 var Gallery = schema.Gallery
 var Photo =  schema.Photo


app.set("port", process.env.PORT || 3000);
app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get("/",function (req,res){
  console.log("Root route ")
  Photo.find({}).then ( photos => {
      res.json(photos);
  })
})

app.post("/", function (req,res){
  console.log("POST Received new 3 ===================")
  console.log(req.body.photo);
  Photo.create(req.body.photo , function (err,photo){
    if (err){
      console.log(err)
    }
    else {
      console.log("Success")
      res.redirect('/');
    }
  })
  // Photo.create({req.})
})

 app.listen(app.get("port"),function(){
     console.log("Smile for your photos!")
 })
