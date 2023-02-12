const express = require("express");
const app = express();
var morgan = require('morgan')
const routes = require("./routes/mainroutes");

// puerto
const PORT = process.env.PORT || 3000;

// SETTINGS
// nombre proyecto
app.set("appName", "PRIMER SERVER");
// lo necesario para mi template EJS
app.set("views", __dirname + "/views")
app.set("views engine", "ejs");

// morgan- MIDDLEWARES
app.use(morgan('short'));

// rutas
app.use(routes)

// puerto
app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`), console.log(`nombre del server`, app.set("appName"));
; })