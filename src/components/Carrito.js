import React from 'react';

function Carrito({ carrito }) {
  return (
    <div>
      <h2>Carrito de Reservas</h2>

      {carrito && carrito.length === 0 ? (
        <p>No hay elementos en el carrito.</p>
      ) : (
        <ul>
          {carrito &&
            carrito.map((reserva, index) => (
              <li key={index}>
                <p>Tipo: {reserva.tipo}</p>
                <p>Cantidad de Personas: {reserva.cantidadPersonas}</p>
                {/* otras propiedades de la reserva */}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Carrito;
