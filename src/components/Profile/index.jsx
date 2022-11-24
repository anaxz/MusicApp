import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Profile.css';

const Profile = ({ name, type, country, intro }) => {
    
    return <Card className='profile-card'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            Name: {name}
            Type: {type}
            Country: {country}
            Intro: {intro}
        </Card.Text>
    </Card>

    // return <div className='profile-card'>
    //     <p>Name: {name}</p>
    //     <p>Type: {type}</p>
    //     <p>Country: {country}</p>
    //     <p>Intro: {intro}</p>
    // </div>
}

export default Profile; 