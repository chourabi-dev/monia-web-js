import { useState } from "react";

export default function ProductItem(props){

    const [ likes, updateLikes ] = useState(0);
    const [ didLike, updateDidLikes ] = useState(false);
    

    return(
        <div className="card">
            <img src={ props.photoURL } className="w-100" />
            <div className="card-body">
                <h3>{ props.title }</h3>
                <p>{ props.price } $</p>

                <button className="btn btn-primary"
                onClick={ ()=>{
                    if (didLike == false) {
                        updateLikes(  ( likes + 1 )  )
                    } else {
                        updateLikes(  ( likes - 1 )  )
                    }


                    updateDidLikes( ! didLike )
                } }
                >{ likes } likes</button>
            </div>
        </div>
    );
}