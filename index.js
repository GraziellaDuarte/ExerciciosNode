const express = require("express")
const { WSASERVICE_NOT_FOUND } = require("constants")
const app = express()


app.get("/", function(req, res) {
    res.send("Seja Bem vindo ao meu app!")
})

app.get("/sobre", function(req, res) {
    res.send("Minha pagina Sobre")
})
app.get("/blog", function(req, res) {
    res.send("Bem vindo ao meu Blog")
})


//Servidor 
app.listen(8081, function() {
    console.log("Servidor rodando na url http://localhost:8081")
})