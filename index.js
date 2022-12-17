const express=require('express');
const data=require('./data');

const port = process.env.PORT || 3000;
const app = express();

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

app.get('/useless',(_,resp)=>{
    resp.send(data);
});

app.listen(port,(port)=>{
    console.log("listing to the PORT "+ port)
    console.log("The value of PORT is:", process.env.PORT);
});