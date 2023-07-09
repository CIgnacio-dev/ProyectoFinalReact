import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

const ItemListContainer = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [nights, setNights] = useState(1);



  const destinations = [
    {
        id: 1,
        title: 'Japón',
        image: 'https://humanidades.com/wp-content/uploads/2017/07/japon-7-e1571188430646.jpg',
        description: 'Descripción del Destino 1',
        precio: '35 USD por noche y para 2 personas'
      },
      {
        id: 2,
        title: 'España',
        image: 'https://multidestinos.cl/wp-content/uploads/2022/11/Espana-Multidestinos.jpg',
        description: 'Descripción del Destino 2',
        precio: '25 USD por noche y para 2 personas'
      },
      {
          id: 3,
          title: 'Francia',
          image: 'https://humanidades.com/wp-content/uploads/2018/09/francia-3-800x414.jpg',
          description: 'Descripción del Destino 2',
          precio: '40 USD por noche y para 2 personas'
        },
       
  ];

  return (
    <div>
      <h2>Destinos populares</h2>
    

      <div className="card-deck">
        {destinations.map((destination) => (
          <div key={destination.id} className="card">
            <img src={destination.image} className="card-img-top" alt={destination.title} />
            <div className="card-body">
              <h5 className="card-title">{destination.title}</h5>
              <p className="card-text">{destination.description}</p>
              <p className="card-text card-precio">{destination.precio}</p>
            
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
