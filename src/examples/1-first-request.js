import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {

const [items, setItems] = useState ([])

  const fetchData = async (params) => {
    try {
      const response = await axios.get (url);
      const items = response.data;
      console.log(items);
      setItems (items)
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    fetchData ();
  }, []);

  return <h2 className='text-center'>{items.map ((item) => {
    const {id, name, price, image } = item;

    return (<div key={id}>
      <img src={image} />
      <h2>{name}</h2>
      <h3>{price}</h3>
      </div>)
  })}</h2>;
};
export default FirstRequest;
