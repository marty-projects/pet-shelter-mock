import React from 'react';
import { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';
import Pet from './Pet';

const PetList = () => {

    const [pets, setPets] = useState({data: []});

    useEffect(() =>{
        fetch('http://localhost:3000/pets')
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data);
            setPets(data)
        })
        .catch((e) => {
            console.error(`An error occured: ${e}`)
        });
    }, []);
    return (
        <Row xs={1} sm={1} md={3} className="g-4" align="center">
            {pets.data.length ? 
                pets.data.map(pet => <Pet pet={pet} />)
                : undefined
            }
        </Row>
    )
}

export default PetList;