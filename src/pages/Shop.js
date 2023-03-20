import React, { useState, useEffect} from 'react';
// import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  function handleRoute(id) {
    navigate(`/shop/${id}`);
  }
  // function handleRoute(id) {
  //   console.log(id);
  // }

  useEffect(() => {
    fetchItems();
  },[])

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.com/v2/cosmetics/br/new');
    const itemdata = await data.json();
    console.log(itemdata.data.items);
    setItems(itemdata.data.items);
  }

  // const displayItems = items.map((item, index) => <Item key={index} id={item.name} item={item} />);

  return (
    <div className='w-1/5 mx-auto'>
      {items.map(item => (
        <div 
          key={item.id}
          className="flex justify-between p-5"
        >
          <h1 className='font-bold'>
            {item.name}
          </h1>
          <button 
            onClick={() => handleRoute(item.id)}
            // incorrect: onClick={handleRoute(item.id)}
            className="bg-pink-300 text-white p-2 cursor-pointer"
          >
            check more
          </button>
        </div>
      ))}
    </div>
  )
}

export default Shop