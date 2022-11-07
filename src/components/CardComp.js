import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CardComp = () => {
  return (
    <Row xs={1} sm={1} md={3} className="g-4" align="center">
    {Array.from({ length: 3 }).map((_, idx) => (
      <Col>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Adopt</Button>
        <br /><br />
        <Button variant="primary">Contact Owner</Button>
      </Card.Body>
    </Card>
    </Col>
      ))}
    </Row>
  )
}

export default CardComp