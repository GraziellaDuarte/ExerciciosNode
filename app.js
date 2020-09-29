const express = require("express")
const app = express()


app.get("/", function(req, res) {
    res.sendfile(__dirname + "/html/index.html")
})

app.get("/login", function(req, res) {
    res.sendfile(__dirname + "/html/login.html")
})
app.get("/blog", function(req, res) {
    res.send("Bem vindo ao meu Blog")
})
app.get('/ola/:nome/:cargo/:cor', function(req, res) {
    res.send("<h1>Ola " + req.params.nome + "</h1>" + "<h2> Seu cargo e: " + req.params.cargo + "</h2" + "<h3>Sua cor favorita e: " + req.params.cor + "</h3")
})

//Servidor 
app.listen(8081, function() {
    console.log("Servidor rodando...")
})