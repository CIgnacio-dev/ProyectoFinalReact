import React from 'react';
import { useParams } from 'react-router-dom';

const DestinationDetail = () => {
  const { id } = useParams();

  // Aquí puedes obtener los datos del destino según su ID y mostrar los detalles

  return (
    <div>
      <h2>Detalle del destino {id}</h2>
      {/* Mostrar los detalles del destino */}
    </div>
  );
};

export default DestinationDetail;
