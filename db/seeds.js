var db = require("./connection.js")
var Schema = require("./schema.js")

var Gallery = db.models.Gallery
var Photo = db.models.Photo

Gallery.remove({}).then( _ => {
  console.log("remove galleries completed");
  var MikesGallery = new Gallery({name: "Mike's Gallery"})
  var BarrettsGallery = new Gallery({name: "Barrett's Gallery"})
  MikesGallery.save( (err, object) => {
    if (err) {
      console.log("Error: ",err)
    } else {
      console.log("Success: ",object)
    }})
  BarrettsGallery.save( (err, object) => {
    if (err) {
      console.log("Error: ",err)
    } else {
      console.log("Success: ",object)
    }})
})
Photo.remove({}).then( _ => {
  console.log("remove photos completed");
  var Photo1 = new Photo({
    name: "Cat in the Hat",
    description: "Mike Rubin Halloween costume in 2004",
    photoUrl: "http://www.pbase.com/mrubin/image/35627192/medium.jpg",
    gallery: [MikesGallery]
  })
  var Photo2 = new Photo({
    name: "Mario",
    description: "Mike Rubin Halloween costume in 2006",
    photoUrl: "http://www.pbase.com/mrubin/image/70300815/medium.jpg",
    gallery: [MikesGallery,BarrettsGallery]
  })
  var Photo3 = new Photo({
    name: "Pizza",
    description: "Dinner last night",
    photoUrl: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/13658884_540298029495912_110832229_n.jpg?ig_cache_key=MTMyMzU0MjI3MDI1OTMyNzEzMg%3D%3D.2",
    gallery: [BarrettsGallery]
  })
  Photo1.save( (err, object) => {
    if (err) {
      console.log("Error: ",err)
    } else {
      console.log("Success: ",object)
    }})
  Photo2.save( (err, object) => {
    if (err) {
      console.log("Error: ",err)
    } else {
      console.log("Success: ",object)
    }})
  Photo3.save( (err, object) => {
    if (err) {
      console.log("Error: ",err)
    } else {
      console.log("Success: ",object)
    }})
})

process.exit()
