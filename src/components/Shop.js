import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Shop({ agregarAlCarrito }) {
  const productos = [
    { id: 1, nombre: 'Producto 1', precio: 10 },
    { id: 2, nombre: 'Producto 2', precio: 20 },
    { id: 3, nombre: 'Producto 3', precio: 30 },

  ];

  const agregarProductoAlCarrito = (producto) => {
    agregarAlCarrito(producto);
  };

  return (
    <div>
      <h2>Shop</h2>
      <div className="card-container">
        {productos.map((producto) => (
          <Card key={producto.id} style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{producto.nombre}</Card.Title>
              <Card.Text>Precio: ${producto.precio}</Card.Text>
              <Button onClick={() => agregarProductoAlCarrito(producto)}>Agregar al Carrito</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Shop;
