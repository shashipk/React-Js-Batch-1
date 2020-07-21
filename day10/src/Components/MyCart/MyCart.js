import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Card} from "react-bootstrap";
import './MyCart.css';

export default function MyCart() {
    const [cartItems, setCartItems] = useState([]);
    const userData = useSelector(state => state.userData);
    const inventory = useSelector(state => state.inventory);

    useEffect(function(){
        if(userData && inventory.length){
            const cartData = inventory.filter(item => userData.cart.includes(item.id));
            setCartItems(cartData);
        }
    }, [userData, inventory]);

    const CartCard = ({cartData}) => {
        console.log(cartData);
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{cartData.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{cartData.name}</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        );
    };

    return(
        <div className='cart-container'>
            {cartItems.map(item => <CartCard key={item.id} cartData={item}/>)}
        </div>
    );
}