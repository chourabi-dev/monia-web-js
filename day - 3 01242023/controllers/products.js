exports.getAllProducts = function(req,res){
    console.log(req.body);

    // CONNNECT TO MONGO DB
    const client = require("mongodb").MongoClient;

    client.connect("mongodb://localhost:27017").then(
        (server)=>{

            const db = server.db("moniatp");

            db.collection("products").find( {} ).toArray().then( (data)=>{

                res.send( data );

            } ).catch( ()=>{
                res.send({ success:false , message:"err db" });
            } )

        }

    ).catch( ()=>{
        res.send({ success:false , message:"err db" });
    })


  
}

exports.addNewProduct = function(){

}


exports.updateProduct = function(){

}


exports.deleteProduct = function(){

}


