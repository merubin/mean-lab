var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/smile_db")
mongoose.Promise = global.Promise
module.exports = mongoose
