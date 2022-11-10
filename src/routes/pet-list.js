import React from 'react';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Pet from '../components/Pet';

const PetList = () => {

    const [pets, setPets] = useState([]);
   


    useEffect(() => {
        let address = new URL(window.location);
        let queryParameters = address.searchParams;
        const type = queryParameters.get("type");

        fetch(`http://localhost:3000/pets?type=${type}`)
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
            {pets.length ? 
                pets.map(pet => <Pet pet={pet} />)
                : undefined
            }
        </Row>
    )
}

export default PetList;