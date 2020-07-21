import React from "react";

import {DropdownButton, Dropdown} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {OrderByChange} from "../../redux/Actions";
import './FilterComponent.css';

export default function FilterComponent() {
    const orderBy = useSelector(state => state.orderBy);
    const dispatch = useDispatch();
    return(
        <div className='filter-container'>
            <DropdownButton
                title={orderBy?orderBy : 'Select order by'}
            >
                <Dropdown.Item eventKey="discount" onClick={() => dispatch(OrderByChange('discount'))}> Discount </Dropdown.Item>
                <Dropdown.Item eventKey="featured" onClick={() => dispatch(OrderByChange('featured'))}> Featured </Dropdown.Item>
            </DropdownButton>
        </div>
    );
}