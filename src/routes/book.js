const express = require("express");
const bookSchema = require('../models/book_dm');
const router = express.Router();

 //create book
 router.post("/books",(req, res)=>{

   const book = bookSchema(req.body);// retorna el libro q creó
   book
   .save()   
   .then((data)=>res.json(data))
   .catch((error)=> res.json({message: error}));
   console.log("resultado",book);
 });

 //get all books
 router.get("/books",(req, res)=>{
   bookSchema
     .find().populate("autor")
     .then((data)=>res.json(data))
     .catch((error)=> res.json({message: error}));
});

 //get a book
 router.get("/books/:id",(req, res)=>{
   const {id}= req.params;
  bookSchema
    .findById(id) 
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}));
});

 //update a book
 router.put("/books/:id",(req, res)=>{
  const {id}= req.params;
  const {titulo, genero, autor, precio}= req.body;
  bookSchema
   .updateOne({_id:id}, {$set: {titulo, genero, autor, precio}}) 
   .then((data)=>res.json(data))
   .catch((error)=> res.json({message: error}));
});

 //delete a book
 router.delete("/books/:id",(req, res)=>{
  const {id}= req.params;
  userSchema
   .remove({_id:id}) 
   .then((data)=>res.json(data))
   .catch((error)=> res.json({message: error}));
});

module.exports = router; //exporto las rutas