import React from "react";
import './Home.css';
import { Container } from "react-bootstrap";
function Home() {
    return (
       <section className='home-section'>
            <Container>
            <h2 className='title'>
                WELCOME TO KARATE AND MARTIAL ARTS SCHOOL
            </h2>
            <p className='sub-title'>Karate is martial art and way of life that trains
                a practitioner to be peaceful.</p>
            <button>Try Free Lesson</button>
        </Container>
        <Container className='top-services'>
            <div className='services-box service-one'></div>
            <div className='services-box service-two'></div>
            <div className='services-box service-three'></div>
            <div className='services-box service-fore'></div>
        </Container>
       </section>
    )
}
export default Home;