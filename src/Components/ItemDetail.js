import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ItemQuantitySelector from './ItemQuantitySelector';
import Description from './Description';
import AddItemButton from './AddItemButton';

const ItemDetail = () => {
  return (
    <div>
      <Row>
        <Col md={6}>
          {/* Imagen del producto */}
        </Col>
        <Col md={6}>
          <ItemQuantitySelector />
          <Description />
          <AddItemButton />
        </Col>
      </Row>
    </div>
  );
};

export default ItemDetail;
