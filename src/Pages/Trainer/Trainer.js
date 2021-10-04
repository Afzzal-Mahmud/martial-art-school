import React from "react";
import { Container } from "react-bootstrap";
import TrainerCard from "../../Components/TrainerCard/TrainerCard";
import useTrainerImage from "../../Data/loadTrainerImage";

function Trainer() {
    const [image,setImages] = useTrainerImage()

    return (
        <Container className='grid'>
           {
               image.map(image => <TrainerCard
               key={image.key}
               imageObject={image}
               ></TrainerCard>)
           }
        </Container>
    )
}
export default Trainer;