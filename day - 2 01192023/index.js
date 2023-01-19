const http = require("http");
const url = require("url");
const fs = require('fs');


/**
 * http.createServer(function(req,res){

    const data = url.parse( req.url ,true);
 
    console.log(data.pathname);
    console.log(data.query);
    
    if ( data.pathname === '/users' ) {
        // DATABASE !!
        res.end("users list...");

    }else if ( data.pathname === '/employees' ) {
        // DATABASE !!
        res.end("emplyees list...");

    }else {
        res.end("welcome to our app");
 
    }
 

}).listen(8080);
 */
/*

http.createServer(function(req,res){

    const data = url.parse( req.url ,true);*/
 
    
    /*fs.readFile("./data/"+data.pathname+".html",function(err,file){
        if (err) {
            res.write("404");
            res.end();

        }

        res.write(file);
        res.end();

    })*/



    /*fs.writeFile("./errors/121212_12_12.txt","oups someting went wrong...",function(){
        console.log("file created!!"); 
        res.end();
    })*/
/*
   

}).listen(8080);*/

/*

http.createServer(function(req,res){

    console.log(req.method);

    if (req.method == "POST") {
        // DATA !!

        let data = [];
        req.on("data",(bineray)=>{
            data.push(bineray);
        }).on("end",()=>{


            const body =JSON.parse(Buffer.concat(data).toString() );
            // ...
            res.end( "..." );
        })

    }

   

}).listen(8080);*/



const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World!')
})
  
app.post('/add-employee', (req, res) => {
    res.send('employee added !!..')
})
  
    

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})