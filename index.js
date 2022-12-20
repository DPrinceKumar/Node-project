const express=require('express');
const data=require('./data');
const htmlFile=__dirname;

const port = process.env.PORT || 3000;
const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(express.static(htmlFile));
app.get("/", (req, res) => {
    // res.send(
    //   "<h1 style='font-family: Segoe UI', Tahoma, Geneva, Verdana, sans-serif;'> Please type '/useless' in search bar </h1>"
    // );
//   res.send(index);
res.sendFile(htmlFile+"/index.html");
});

app.get('/useless',(_,resp)=>{
    resp.send(data);
});

app.listen(port,()=>{
    console.log("listing to the PORT "+ port)
    console.log("The value of PORT is:", process.env.PORT);
});