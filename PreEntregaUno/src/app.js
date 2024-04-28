const path = require('path')
const express = require('express')
const app = express()
const PORT = 8080
const productsRouter = require("./routes/products.router")
const cartRouter = require("./routes/carts.router")

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(express.static(path.join(__dirname,'public')))

app.use("/api",productsRouter)
app.use("/api",cartRouter)

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo sobre el puerto ${PORT}`)
})