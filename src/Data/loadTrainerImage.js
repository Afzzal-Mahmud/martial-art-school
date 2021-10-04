// this function load the json data of trainer image

import { useState, useEffect } from "react";

function useTrainerImage() {

    const [image,setImage] = useState([])
    useEffect(()=>{

        fetch("./trainerimage.json")
        .then(Response => Response.json())
        .then(data => setImage(data))
    },[])
    return [image,setImage]
}

export default useTrainerImage;