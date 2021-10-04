// this function load the json data of services
import { useState } from "react";
import { useEffect } from "react";

function useServicesApi() {

    const [services,setServices] = useState([])
    useEffect(()=>{

        fetch("./services.json")
        .then(Response => Response.json())
        .then(data => setServices(data))
    },[])
    return [services,setServices]
}
export default useServicesApi;