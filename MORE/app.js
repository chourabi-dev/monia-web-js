function getCamera(){
    let promise  = new Promise((success,failure)=>{

        setTimeout(()=>{
            success( { camera: true, takePhoto: ()=>{ console.log("photo is taken"); } } )
        },3000)

    });

    return promise;
}



/**
 * getCamera().then(
    
    (response)=>{
        console.log(response); 
    }

).catch()
 */


async function  takePhoto(){
    const camera = await getCamera();

    console.log("test");
    camera.takePhoto();

}

takePhoto();
