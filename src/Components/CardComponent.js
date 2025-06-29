import React from 'react';
import React from 'react';
import { Card, Button } from 'react-bootstrap';


const CardComponent = ({ product, handleCardClick }) => {
  
  
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary" onClick={() => handleCardClick(product)}>
          View Details
        </Button>
      </Card.Body>
    </Card>
    
    </>
    
  );
};

export default CardComponent;