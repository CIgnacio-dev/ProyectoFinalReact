import React from 'react';

function Carrito({ carrito, calcularPrecioTotal }) {
  return (
    <div className='carrito'>
      <h2>Carrito de Reservas</h2>

      {carrito.length === 0 ? (
        <p>No hay elementos en el carrito.</p>
      ) : (
        <div>
          <ul>
          <h4>Estos son los tipo de alojamiento y el precio total que llevas hasta el momento</h4>
            {carrito.map((reserva, index) => (
              <li key={index}>
                
                <p>Tipo: {reserva.tipo}</p>
         
              </li>
            ))}
          </ul>
          
          <p>Precio Total: {calcularPrecioTotal()} USD</p>
        </div>
      )}
    </div>
  );
}

export default Carrito;
