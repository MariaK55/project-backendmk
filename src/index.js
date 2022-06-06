const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // para poder incluir var de ambiente custom
const userRoutes = require('./routes/user'); //recibe las rutas que exporté en user.js
const bookRoutes = require('./routes/book');


const app = express(); // guardo el objeto de la aplicación
const port = process.env.PORT || 9000;  //variable de ambiente de nodejs para q si se despliega en un servicio de hosting tome el puerto de el y si no use el 9000

//middleware
app.use(express.json());
app.use("/api",userRoutes);  //le pone a todas las rutas q le pase /api
app.use("/api",bookRoutes);  //le pone a todas las rutas q le pase /api


// routes
app.get("/", (req, res)=>{
    res.send("Welcomes to my API");
});

//mongoDB connection (le paso la var de ambiente que cree en .env)
mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log("Connected to MongoDB Atlas"))
.catch((error)=> console.error(error));

app.listen(port, () => console.log('server listening on port ', port));   