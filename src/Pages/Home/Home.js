import React from "react";
import { Container } from "react-bootstrap";

function Home() {
    return (
       <section className='home-section'>
            <Container>
            <h2>
                WELCOME TO KARATE AND MARTIAL ARTS SCHOOL
            </h2>
            <p>Karate is martial art and way of life that trains
                a practitioner to be peaceful.</p>
            <button>Try Free Lesson</button>
        </Container>
       </section>
    )
}
export default Home;