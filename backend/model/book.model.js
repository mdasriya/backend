
  const mongoose = require("mongoose")


// schema
const bookSchema = mongoose.Schema({
  "title":{type:String, required:true},
  "genre":{type:String, required:true},
  "author":{type:String, required:true},
  "authorID":{type :String,required:true},
  "publishing_year":{type:Number, required:true}
},{
    versionKey:false
})
// model

const BookModel = mongoose.model("book",bookSchema)

module.exports = {
    BookModel
}