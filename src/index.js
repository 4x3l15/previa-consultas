const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const userRouter = require("./routes/userRoutes.js");
const port = 9500;

// Defino el motor de plantillas a utilizar
app.set('view engine', 'ejs');
//routers
app.use('/api', userRouter);
app.use(bodyParser.json(''));
app.use(express.json(''));

// Conexión a MongoDB
mongoose.connect("mongodb+srv://Adramirez:ADRAMIREEZ@cluster0.8wgmdjb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Conexión con MongoDB exitosa"))
  .catch((error) => console.log(error));

  // verificacion desde la terminal
app.listen(port, () => console.log("El servidor está escuchando en el puerto", port));
