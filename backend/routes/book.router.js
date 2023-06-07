
 const express = require("express")
const {BookModel} = require("../model/book.model")
const {auth} = require("../middleware/auth")
var jwt = require('jsonwebtoken');
 const BookRouter = express.Router()
 
 BookRouter.post("/add",auth,async(req,res)=> {
   const data = req.body
   try {
      const book = new BookModel(data)
      await book.save()
      res.status(200).json({msg:"Book added", addedBook:data})
   } catch (error) {
    res.status(400).json({err:error.message})
   }
 })

BookRouter.get("/",auth, async(req,res)=> {
  try {
    const data = await BookModel.find({authorID:req.body.authorID})
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({err:error.message})
  }
})


BookRouter.patch("/update/:id",auth, async(req,res)=> {
const {id} = req.params;
const book = await BookModel.findOne({_id:id})
try {
  if(req.body.authorID!==book.authorID){
    res.status(200).json({msg:"you are mot authorized to do this action"})
  }else{
    await BookModel.findByIdAndUpdate({_id:id},req.body)
    res.status(200).json({msg:"Book has been updated"})
  }
} catch (error) {
  res.status(400).json({err:error.message})
  
}
})

BookRouter.delete("/delete/:id",auth, async(req,res)=> {
  const {id} = req.params;
const book = await BookModel.findOne({_id:id})

  try {
    if(req.body.authorID!==book.authorID){
      res.status(200).json({msg:"you are mot authorized to do this action"})
    }else{
      await BookModel.findByIdAndDelete({_id:id})
      res.status(200).json({msg:"Book has been deleted"})
    }
  } catch (error) {
    res.status(400).json({err:error.message})
  }
})
 module.exports = {
    BookRouter
 }


