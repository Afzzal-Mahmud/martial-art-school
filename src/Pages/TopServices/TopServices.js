import React from "react";
import { Card } from "react-bootstrap";

function TopServices(props) {
    const { image, description, service } = props.serviceObject;

    return (
            <Card className="text-center m-4 p-4">
                <div className='img-container'>
                    <img src={image} alt="" />
                </div>
                <Card.Body>
                    <Card.Title className='p-4'>{service}</Card.Title>
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