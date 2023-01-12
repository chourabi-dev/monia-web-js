import ProductItem from "./ProductItem";

export default function BlocProducts(){

    const products = [
        { id:1 , photoURL:"https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-x/iphone-x-silver.jpg", title:"Iphone X" , price:"1200" },
        { id:2 , photoURL:"https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-x/iphone-x-silver.jpg", title:"Iphone 11" , price:"2000" },
        { id:3 , photoURL:"https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-x/iphone-x-silver.jpg", title:"Iphone 12" , price:"3000" },
        
    ]


    return(
        <div className="mt-5 container">
            <div className="row">
                {
                    products.map((p)=>{
                        return(
                            <div className="col-sm-4">
                                <ProductItem photoURL={ p.photoURL } title={p.title} price={ p.price } />
                            </div>
                
                        );
                    })
                }
            </div>
        </div>
    );

}