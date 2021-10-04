import React from "react";

function Trainer(props) {
    const {image} = props.serviceObject;
    return (
        <img src={image} alt="" />
    )
}
export default Trainer;