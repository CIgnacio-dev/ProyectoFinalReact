import Accordion from 'react-bootstrap/Accordion';

function DetallesCabana() {
  return (
    <div className='caract-hotel'>
        <h2>Aquí están las características de las Cabañas</h2>
    
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Entorno natural y tranquilo</Accordion.Header>
        <Accordion.Body>
        Las cabañas suelen estar ubicadas en entornos naturales, como montañas, bosques o cerca de cuerpos de agua. Esta característica ofrece a los huéspedes la oportunidad de disfrutar de la tranquilidad y la belleza de la naturaleza durante su estadía.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Privacidad y espacio amplio</Accordion.Header>
        <Accordion.Body>
        Las cabañas suelen ofrecer privacidad y un espacio amplio para que los huéspedes se sientan cómodos. Las cabañas suelen tener su propio terreno, lo que brinda a los huéspedes la sensación de estar en un espacio exclusivo y tranquilo.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Diseño rústico y acogedor</Accordion.Header>
        <Accordion.Body>
        Las cabañas suelen tener un diseño rústico y acogedor, con materiales naturales como madera y piedra. Esto crea un ambiente cálido y auténtico que se integra perfectamente con el entorno natural circundante.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Amenidades de confort</Accordion.Header>
        <Accordion.Body>
        Aunque las cabañas están ubicadas en entornos naturales, suelen contar con comodidades modernas para garantizar una estancia confortable. Esto puede incluir chimeneas, bañeras de hidromasaje, cocinas completamente equipadas, Wi-Fi, televisores y sistemas de calefacción.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
  
}

export default DetallesCabana;