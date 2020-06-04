import React, {useState} from "react";

function Button({handleClick, name}){
   return (
       <button onClick={handleClick}> {name}</button>
   );

}

function Display({fruitCart}){

    return(
        <ul>
            {fruitCart.map(fruit => <li>{fruit}</li>)}
        </ul>
    );
}


export default function List({message}){
    const [fruitCart, setFruitCart] = useState(['apple', 'mango', 'guava', 'watermelon', 'banana']);

    const handleClick = async(event) => {
        event.preventDefault();
        const [,...rest] = fruitCart;
        setFruitCart(rest);

    };

    const handleClickSecond = (event) => {
      event.preventDefault();
      const fruits = [...fruitCart];
      fruits.pop();
      setFruitCart(fruits);
    };



    return (
      <div>
          <Display fruitCart={fruitCart}/>
          <Button handleClick={handleClick} name={'Front Delete'}/>
          <Button handleClick={handleClickSecond} name={'Back Delete'} />
      </div>
    );

}