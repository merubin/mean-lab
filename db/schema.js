var mongoose = require("mongoose")
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var GallerySchema = new Schema( {
  name:string
})

var PhotoSchema = new Schema({
  name: String,
  description: String,
  photoUrl: String,
  galleries: [{type: Schema.ObjectId, ref: "Gallery"}]
})

var Gallery = mongoose.model("Gallery", GallerySchema)
var Photo = mongoose.model("Photo", PhotoSchema)

module.exports = {Gallery,Photo}
