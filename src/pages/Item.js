import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    console.log(id);

    useEffect( () => {
        fetch(`https://fortnite-api.com/v2/cosmetics/br/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setItem(data.data)
        })
        // fetchItem();
    }, [id]);

    console.log(item);

    // const fetchItem = async () => {
    //     const res = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${id}`);
    //     const itemdata = await res.json();
    //     setItem(itemdata.data);
    //     console.log(itemdata);
    // }

  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-lg'>{item.name}</h1>
        <div>
            <img src={item && item.images && item.images.icon} alt={item && item.name}/>
        </div>
        <p>{item && item.set && item.set.text}</p>
    </div>
  )
}

export default Item