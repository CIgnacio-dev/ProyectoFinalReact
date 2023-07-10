import React from 'react';

function Carrito({ carrito }) {
  return (
    <div>
      <h2>Carrito de Reservas</h2>
      
      {carrito.length === 0 ? (
        <p>No hay elementos en el carrito.</p>
      ) : (
        <ul>
          {carrito.map((reserva, index) => (
            <li key={index}>
              <p>Tipo: {reserva.tipo}</p>
              <p>Noches: {reserva.noches}</p>
              <p>Personas: {reserva.personas}</p>
              <p>Precio Total: ${reserva.precioTotal}</p>
              <button>Editar</button>
              <button>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Carrito;
