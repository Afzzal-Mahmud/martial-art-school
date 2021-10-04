import React from "react";
import { Card } from "react-bootstrap";

function TopServices(props) {
    const { image, description, service, price } = props.serviceObject;

    return (
            <Card className="text-center m-4 p-4">
                <div className='img-container'>
                    <img src={image} alt="" />
                    <h4 className='pt-4'>Price : {price} </h4>
                </div>
                <Card.Body>
                    <Card.Title className='p-3 fw-bold'>{service}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
               <button>See Full Services</button>
                </Card.Footer>
            </Card>
    )
}
export default TopServices;