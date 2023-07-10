import React from 'react';
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home({ props}) {
    const agregarAlCarrito = (reserva) => {
        props.agregarAlCarrito(reserva);
      };
  return (
    <div className='textos-home'>
      <h1>Destinos Populares</h1>
      <Carousel>
        <Carousel.Item>
          <Card>
            <Card.Img variant="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/16/a6/88/con-la-primavera-in-giappone.jpg?w=700&h=-1&s=1" alt="Imagen 1" />
            <Card.Body>
              <Card.Title>Japón</Card.Title>
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
              <Card.Title>Francia</Card.Title>
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
              <Card.Title>Brazil</Card.Title>
              <Card.Text>
                Contenido de la Card 3
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
      <div className='detalles-alojamientos'>
      <h1>¿En qué se diferencia cada alojamiento?</h1>
      <Row>
        <Col>
          <Card>
          <Card.Img variant="top" src="https://parisjetaime.com/data/layout_image/es-ES/Hotel-enseigne-neon-630x405-C-Thinkstock.jpg" alt="Imagen 1" />
            <Card.Body>
              <Card.Title>Hotel</Card.Title>
              <Card.Text>
                La mayor cantidad de opciones en calidad y precio
              </Card.Text>
              <Button as={Link} to="/detalles-hotel">Ver detalles</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
          <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/13/c2/87/2c/el-hostal-bed-and-breakfast.jpg" alt="Imagen 1" />
            <Card.Body>
              <Card.Title>Hostal</Card.Title>
              <Card.Text>
                La mejor opción para quienes quieren ahorrar
              </Card.Text>
              <Button as={Link} to="/detalles-hostal">Ver detalles</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
          <Card.Img variant="top" src="https://images.adsttc.com/media/images/56fd/b861/e58e/ce2e/3200/000a/newsletter/sergio_rapanui_morerava_518.jpg?1459468366" alt="Imagen 1" />
            <Card.Body>
              <Card.Title>Cabaña</Card.Title>
              <Card.Text>
                La mejor opción para los que quieren tranquilidad
              </Card.Text>
              <Button as={Link} to="/detalles-cabana">Ver detalles</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </div>
    </div>
  );
}

export default Home;
