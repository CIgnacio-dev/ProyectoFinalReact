import React from 'react';
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='textos-home'>
      <h1>Destinos Populares</h1>
      <Carousel>
        <Carousel.Item>
          <Card>
            <Card.Img variant="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/16/a6/88/con-la-primavera-in-giappone.jpg?w=700&h=-1&s=1" alt="Imagen 1" />
            <Card.Body>
              <Card.Title>Título de la Card 1</Card.Title>
              <Card.Text>
                Contenido de la Card 1
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Img variant="top" src="https://humanidades.com/wp-content/uploads/2018/09/francia-3-800x414.jpg" alt="Imagen 2" />
            <Card.Body>
              <Card.Title>Título de la Card 2</Card.Title>
              <Card.Text>
                Contenido de la Card 2
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Img variant="top" src="https://humanidades.com/wp-content/uploads/2017/04/brasil-1-e1566159463813-800x400.jpg" alt="Imagen 3" />
            <Card.Body>
              <Card.Title>Título de la Card 3</Card.Title>
              <Card.Text>
                Contenido de la Card 3
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>

      <h1>¿En qué se diferencia cada alojamiento?</h1>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Hotel 1</Card.Title>
              <Card.Text>
                Descripción del hotel 1
              </Card.Text>
              <Button as={Link} to="/detalles-hotel">Ver detalles</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Hostal 1</Card.Title>
              <Card.Text>
                Descripción del hostal 1
              </Card.Text>
              <Button as={Link} to="/detalles-hostal">Ver detalles</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Cabaña 1</Card.Title>
              <Card.Text>
                Descripción de la cabaña 1
              </Card.Text>
              <Button as={Link} to="/detalles-cabana">Ver detalles</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
