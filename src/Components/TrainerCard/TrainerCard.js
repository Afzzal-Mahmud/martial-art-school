import React from "react";
import { Card } from "react-bootstrap";

function TrainerCard(props) {
    const {image, type, instructor} = props.imageObject;
    return (
        <Card className='m-4 p-2'>
            <Card.Img variant="top" src={image} />
            <Card.Body style={{textAlign:"center"}}>
                <Card.Title>{instructor}</Card.Title>
                <h4>{type}</h4>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated</small>
            </Card.Footer>
        </Card>
    )
}
export default TrainerCard;