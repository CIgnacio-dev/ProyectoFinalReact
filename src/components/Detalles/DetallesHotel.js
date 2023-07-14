import Accordion from 'react-bootstrap/Accordion';

function DetallesHotel() {
  return (
    <div className='caract-hotel'>
        <h2>Aquí están las características de los Hoteles</h2>
    
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Ubicación conveniente </Accordion.Header>
        <Accordion.Body>
        Los hoteles suelen destacar por su ubicación estratégica, ya sea en el centro de la ciudad, cerca de atracciones turísticas o en zonas de fácil acceso. Esta característica es especialmente valorada por los viajeros que desean explorar el destino sin dificultades.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Servicio de calidad</Accordion.Header>
        <Accordion.Body>
        Los hoteles suelen ofrecer un servicio de alta calidad para asegurar una experiencia placentera a sus huéspedes. Esto puede incluir atención personalizada, servicio de habitaciones las 24 horas, conserjería, limpieza diaria y atención al cliente amigable y profesional.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Comodidades modernas</Accordion.Header>
        <Accordion.Body>
        Los hoteles suelen contar con una amplia gama de comodidades modernas para satisfacer las necesidades de los huéspedes. Esto puede incluir piscinas, gimnasios, restaurantes, bares, spa, servicio de lavandería, Wi-Fi gratuito y estacionamiento.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Habitaciones confortables</Accordion.Header>
        <Accordion.Body>
        Las habitaciones de los hoteles suelen ser espacios diseñados para brindar confort y descanso a los huéspedes. Pueden contar con camas cómodas, aire acondicionado, TV de pantalla plana, baño privado, minibar, caja fuerte y escritorio de trabajo.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
  
}

export default DetallesHotel;