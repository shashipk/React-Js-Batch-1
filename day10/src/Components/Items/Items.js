import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import './Items.css';
import MyCard from "../Cards/Card";
import FilterComponent from "../FilterComponent/FilterComponent";

export default function Items() {
    const [inventoryList, setInventoryList] = useState([]);
    const inventory = useSelector(state => state.inventory);
    const orderBy = useSelector(state => state.orderBy);
    const category = useSelector(state => state.category);
    useEffect(function(){
        let myInventory = [...inventory];
        if(category === 'pantry'){
            myInventory = myInventory.filter(item => item.section === "Pantry");
        }
        else if(category === 'clothing'){
            myInventory = myInventory.filter(item => item.section === 'Clothing');
        }
        if(orderBy && orderBy === 'discount'){
            myInventory.sort(function(item1, item2){
                return item1.discount > item2.discount ? -1 : item1.discount < item2.discount ? 1 : 0;
            });

        }

        setInventoryList(myInventory);
    }, [inventory, orderBy, category]);

    return (
        <div className='wrapper'>
            <FilterComponent/>
            <div className='items-container'>
            {inventoryList.map(item => <MyCard key={item.id} cardData={item}/>)}
            </div>
        </div>
    )
}