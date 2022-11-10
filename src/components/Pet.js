import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

function Pet({pet = {}}) {
  const {name, breed, sex, age, size} = pet;
  
  return (
    <Col>
    <Card style={{ width: '18rem'}}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text >
           <p className="breed">{breed}</p>
            <p className="sex">{sex}</p>
            <p className="age">{age}</p>
            <p className="size">{size}</p>
        </Card.Text>
        <Button variant="primary">Adopt</Button>
        <br /><br />
        <Button variant="secondary">Contact Owner</Button>
    </Card.Body>
    </Card>
    </Col>
  )
}

Pet.propTypes = {}

export default Pet
