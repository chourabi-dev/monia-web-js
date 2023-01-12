import { useState } from "react";



export default function Counter(){


    const [ count , updateCount ] = useState( 0 ); // react hook !!


    return(
        <div>
            <h3> { count } clicks </h3>
            <button onClick={ ()=>{  updateCount( ( count + 1 ) )   } }  > + </button>
            <button  onClick={ ()=>{  updateCount( ( count - 1 ) )   } } > - </button>
            
        </div>
    );
}