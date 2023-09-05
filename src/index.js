const express=require('express')
const http= require('http');
const bodyparser = require('body-parser');
const { connectDB } = require("./db");
const routes = require("./routes");
const config = require("./confige")

const app = express()

app.use(bodyparser.urlencoded({extended : false}));

app.use(bodyparser.json());

app.use("/v1",routes);

connectDB();

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("server listning port number 8080! ");
});

