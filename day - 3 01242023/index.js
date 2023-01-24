const express = require('express')
const app = express()
const port = 8080
const parser = require("body-parser");
const { getAllProducts } = require('./controllers/products');


// use body parser as middleware !!!


app.use( parser.json() );


// middleware !!!

app.use(function( req,res, next ){
    console.log(new Date().getTime());

    // is stuck here !!!!!! 
    next(); 
})




app.get('/', (req, res) => {
  res.send('Hello World!')
})


/*app.post('/data', (req, res) => {

    console.log(req.body);
    console.log(req.query);
    console.log(req.params);
    console.log(req.url);
    
    

    res.send('Hello World!')
})*/




// GET 
app.get("/api/products/list",(req,res)=>{
    getAllProducts(req,res)
})


// POST




// PUT




// DELETE

  
  
  



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})