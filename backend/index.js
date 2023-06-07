const express = require("express")
require("dotenv").config()
const {connection} = require("./db")
const {UserRouter} = require("./routes/user.router")
const {BookRouter} = require("./routes/book.router")
var cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use("/users", UserRouter)
app.use("/books", BookRouter)


app.listen(process.env.port, async()=> {
    try {
        await connection;
        console.log(`server is running at port ${process.env.port}`);
        console.log("DB is connected");  
    } catch (error) {
       console.log(error); 
    }
   
})