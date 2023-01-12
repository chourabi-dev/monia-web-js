export default function Contact(props){

    console.log(props);

    return(
        <div>

            <h3> { props.fullname } </h3>
            <p>
                <small> { props.phone } </small>
            </p>

        </div> 
    );
}


 