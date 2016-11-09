/* our project Smile
Smile captures your photos and allows you to add title, and description for later gouping with a gallery
 */

 var express = require("express");
 var db = require("./db/connection");
 var schema=require("./db/schema");

 var app = express();

 var Gallery = schema.Gallery
 var Photo =  schema.Photo


 app.set("port", process.env.PORT || 3000);
 app.use("/assets", express.static("public"));

app.get("/",function (req,res){
  console.log("Root route ")
  Photo.find({}).then ( photos => {
      res.json(photos);
  })
})



 app.listen(app.get("port"),function(){
     console.log("Smile for your photos!")
 })
