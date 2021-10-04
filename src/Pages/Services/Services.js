import React from "react";
import { Container } from "react-bootstrap";
import useServicesApi from "../../Data/loadServicesApi";
import TopServices from "../TopServices/TopServices";

function Services() {
    const [services, setServices] = useServicesApi();
    // render the same TopServices components as whole service
    return (
        <section style={{ background: "#f0ece6" }}>
            <h2 className='secondery-title'>Top Services</h2>
            <Container className='top-services'>
                {
                    services.map(service => <TopServices
                        key={service.id}
                        serviceObject={service}>
                    </TopServices>)
                }
            </Container>
        </section>
    )
}
export default Services;