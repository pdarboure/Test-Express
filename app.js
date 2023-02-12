const express = require ("express");
const app = express();

PORT = 3007

app.listen(PORT,  () => {
    console.log("corriendo en en link https/localhost:" + PORT);
})

app.get("/", (req, res) => {
    res.send("Hello")
})