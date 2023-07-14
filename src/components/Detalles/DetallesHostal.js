import Accordion from 'react-bootstrap/Accordion';

function DetallesHostal() {
  return (
    <div className='caract-hostal'>
        <h2>Aquí están las características de los Hostales</h2>
    
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Ambiente acogedor y familiar</Accordion.Header>
        <Accordion.Body>
        Los hostales suelen ofrecer un ambiente cálido y familiar, donde los huéspedes pueden interactuar entre sí y disfrutar de una atmósfera más relajada. Esta característica es ideal para viajeros que buscan una experiencia social y amigable durante su estadía.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Precios económicos</Accordion.Header>
        <Accordion.Body>
        Los hostales son conocidos por ofrecer precios más económicos en comparación con otros tipos de alojamientos. Esto los convierte en una opción popular para viajeros con presupuesto limitado que desean ahorrar dinero en el alojamiento y destinarlo a otras actividades.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Espacios compartidos</Accordion.Header>
        <Accordion.Body>
        Los hostales suelen contar con áreas comunes donde los huéspedes pueden reunirse, como salas de estar, cocinas compartidas y zonas de juegos. Estos espacios fomentan la interacción entre los viajeros y crean un ambiente de camaradería.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Dormitorios compartidos y habitaciones privadas:</Accordion.Header>
        <Accordion.Body>
        Los hostales suelen ofrecer tanto dormitorios compartidos como habitaciones privadas. Los dormitorios compartidos son una opción económica donde los huéspedes comparten la habitación con otros viajeros, mientras que las habitaciones privadas brindan mayor privacidad y comodidad para aquellos que lo prefieren.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
  
}

export default DetallesHostal;