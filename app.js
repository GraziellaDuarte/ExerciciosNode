const express = require("express")
const app = express()

/*Rotas*/
app.get("/", function(req, res) {
    res.sendfile(__dirname + "/html/index.html")
})

app.get("/minhaSaude", function(req, res) {
    res.sendfile(__dirname + "/html/minhaSaude.html")
})
app.get("/cartao", function(req, res) {
    res.sendfile(__dirname + "/html/cartao.html")
})
app.get("/servicos", function(req, res) {
    res.sendfile(__dirname + "/html/servicos.html")
})
app.get("/login", function(req, res) {
    res.sendfile(__dirname + "/html/login.html")
})

//**Css**//
app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/minhasaude'));
app.use(express.static(__dirname + '/cartao'));
app.use(express.static(__dirname + '/servicos'));
app.use(express.static(__dirname + '/login'));


//Servidor 
app.listen(8081, function() {
    console.log("Servidor rodando...")
})