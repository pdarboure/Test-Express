const express = require("express");
const router = express.Router();

// ROUTES
// primeras rutas
router.get("/", (req, res) => { res.render("index.ejs") })
router.get('/hello', function (req, res) {res.send('hello, world!')})
router.get("/login", (req, res) => { res.render("login.ejs") })
router.get("*", (req, res) => { res.end("ruta no encontrada") })

module.exports = router