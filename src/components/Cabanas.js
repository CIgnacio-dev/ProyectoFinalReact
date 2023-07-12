import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function Cabanas({ agregarAlCarrito, agregarNoches }) {
    const [cantidadPersonas, setCantidadPersonas] = useState(1);
    const agregarReserva = () => {
        const reserva = {
          tipo: 'Cabañas',
          cantidadPersonas: personas,
          precioTotal: precioTotal, // Asegúrate de que estás utilizando la variable correcta aquí
          // otras propiedades de la reserva
        };
        agregarAlCarrito(reserva);
      };
      
    
  const [noches, setNoches] = useState(1);
  const [personas, setPersonas] = useState(1);
  const precioPorNoche = 100;
  const precioPorPersona = 25;
  const limitePersonas = 6;

  const precioBase = precioPorNoche * noches;
  const precioPorPersonas = precioPorPersona * personas;
  const precioTotal = precioBase + precioPorPersonas;

  const agregarNoche = () => {
    setNoches(noches + 1);
  };

  const quitarNoche = () => {
    if (noches > 1) {
      setNoches(noches - 1);
    }
  };

  const cambiarPersonas = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= limitePersonas) {
      setPersonas(value);
    }
  };

  return (
    <div>
      <h2>Cabañas</h2>

      <div className="cards-container card-hotel">
        <Card>
          <Card.Body>
            <Card.Title>Cabaña  <a style={{textAlign: 'right'}} href='#'> Ver Fotos</a></Card.Title>
            <Card.Text>
              Precio por noche: $100 USD
            </Card.Text>
            <Card.Text>
              Noches: {noches}
            </Card.Text>
            <Card.Text>
              Personas: {personas}
            </Card.Text>
            <Card.Text>
              Precio base: ${precioBase} USD
            </Card.Text>
            <Card.Text>
              Precio por personas: ${precioPorPersonas} USD
            </Card.Text>
            <Card.Text>
              Precio total: ${precioTotal} USD
            </Card.Text>
            <div className='buttons-agregar'>
            <Button onClick={agregarNoche}>Agregar noche</Button>
            <Button onClick={quitarNoche}>Quitar noche</Button>
            </div>
            <label>Ingrese cantidad de personas:</label>
            <input
              type="number"
              value={personas}
              onChange={cambiarPersonas}
              min={1}
              max={limitePersonas}
            />
            <Button className='agregar-carrito' onClick={agregarReserva}>Agregar al carrito</Button>
      
          </Card.Body>
        </Card>

        
       
        
      </div>
    </div>
  );
}

export default Cabanas;
