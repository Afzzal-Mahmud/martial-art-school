import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Header() {
    return (
        <Container style={{height:"60vh"}}>
            <Row style={{marginTop:'2em'}}>
                <Col> <img className='p-4' src="https://html.modernwebtemplates.com/okorner/images/gallery/14.jpg" alt="" /> </Col>
                <Col>
                    <h2 className='p-2'>About Fight School</h2>
                    <p>
                        Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.
                        We teach martial arts because we love it — not because we want to make money on you. Unlike other martial 
                        arts schools, we do not require you to sign long term contracts. 
                        You just pay one low monthly fee for your martial arts and self 
                        defense classes at the beginning of each month.
                    </p>
                    <h3 className='p-2'>Aiden Richards</h3>
                </Col>
            </Row>
        </Container>
    )
}
export default Header;