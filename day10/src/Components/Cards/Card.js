import React from "react";
import { Card, Button } from "react-bootstrap";
import {updateCartDetails} from "../../firebase/firebase.utils";
import {useSelector} from "react-redux";

export default function MyCard({cardData}) {
    const userData = useSelector(state => state.userData);
    const userRef = useSelector(state => state.userRef);

    const handleClick = async () => {
        if(userData)
             await updateCartDetails(userRef, [...userData.cart, cardData.id]);
    };

    return(
        <Card style={{ width: '18rem', margin: '30px' }}>
            <Card.Img variant="top" src={cardData.image} />
            <Card.Body>
                <Card.Title>{cardData.name}</Card.Title>
                <Card.Text>
                    Discount: {cardData.discount} %
                </Card.Text>
                <Button variant="primary" onClick={handleClick}>Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}