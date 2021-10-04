import React from "react";
import './Home.css';
import { Container } from "react-bootstrap";

import useServicesApi from "../../Data/loadServicesApi";
import TopServices from "../TopServices/TopServices";
function Home() {
    //load services api by custom hook
    const [services,setServices] = useServicesApi()

    // this is the top four services displayed on home section
    const topServices = services.slice(0,4);

    return (
        <>
       <section className='home-section'>
            <Container>
            <h2 className='title'>
                WELCOME TO KARATE AND MARTIAL ARTS SCHOOL
            </h2>
            <p className='sub-title'>Karate is martial art and way of life that trains
                a practitioner to be peaceful.</p>
            <button>Try Free Lesson</button>
        </Container>

        {/* render top four services on home page */}


       </section>
       <section style={{background:"#f0ece6"}}>
               <h2 className='secondery-title'>Top Services</h2>
           <Container className='top-services'>
           {
               topServices.map(service => <TopServices
                   key={service.id}
                   serviceObject ={service}>
               </TopServices>)
           }

           </Container>
       </section>
       </>
    )
}
export default Home;