import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function Hoteles() {
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
      <h2>Hoteles</h2>

      <div className="cards-container">
        <Card>
          <Card.Body>
            <Card.Title>Hotel 1</Card.Title>
            <Card.Text>
              Precio por noche: $60 USD
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
            <Button onClick={agregarNoche}>Agregar noche</Button>
            <Button onClick={quitarNoche}>Quitar noche</Button>
            <input
              type="number"
              value={personas}
              onChange={cambiarPersonas}
              min={1}
              max={limitePersonas}
            />
          </Card.Body>
        </Card>

        
        
        {/* Repite el código de la card para los otros hoteles */}
        
      </div>
    </div>
  );
}

export default Hoteles;
