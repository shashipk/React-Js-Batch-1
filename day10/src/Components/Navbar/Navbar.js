import React from "react";
import {InputGroup,
        FormControl,
        Dropdown,
        ButtonGroup,
        Button,
        OverlayTrigger,
        Tooltip} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import './Navbar.css';
/*
* Brand ----- [Search...] ----- Dropdown About-US My Cart
* */

export default function NavigationBar(){
    return(
        <div className='nav-wrapper'>
            <div className='nav-brand'>
                <span> E-CART </span>
            </div>
            <InputGroup className="w-25">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faSearch}/>
                </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                placeholder="Enter something to search..."
                aria-label="Search"
                aria-describedby="basic-addon1"
            />
            </InputGroup>

            <div className='nav-item'>
                <Dropdown as={ButtonGroup}>
                    <Button variant="success" bsPrefix='custom-dropdown'>Choose Category</Button>

                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className='custom-dropdown'/>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <a href='#' className='nav-link'> About Us </a>

                <OverlayTrigger placement='bottom' overlay={
                    <Tooltip id='my-cart-tooltip'>
                        My Cart
                    </Tooltip>
                }>
                    <a href='#' className='nav-link'>
                        <FontAwesomeIcon icon={faShoppingCart}/>
                    </a>
                </OverlayTrigger>
            </div>
        </div>
    );

}

