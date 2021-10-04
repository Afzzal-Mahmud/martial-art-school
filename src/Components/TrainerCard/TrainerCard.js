import React from "react";
import { Card } from "react-bootstrap";
import { Facebook, Google, Twitch } from "react-bootstrap-icons";

function TrainerCard(props) {
    const {image, type, instructor} = props.imageObject;
    return (
        <Card className='m-4 p-2'>
            <Card.Img variant="top" src={image} />
            <Card.Body style={{textAlign:"center"}}>
                <h3 >{instructor}</h3>
                <Card.Title className='primary-color'>{type}</Card.Title>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-evenly'>
                <Facebook className='primary-color'></Facebook>
                <Twitch className='primary-color'></Twitch>
                <Google className='primary-color'></Google>
            </Card.Footer>
        </Card>
    )
}
export default TrainerCard;