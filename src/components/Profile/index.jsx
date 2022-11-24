import React, {useState} from 'react'

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import './Profile.css'

const Profile = ({ id, name, type, country, intro, likes }) => {

    const [click, setClick] = useState(false)
    
    function displayLike(bool, id){
        const icon = document.getElementById(`like-icon-${id}`);
        if(bool) icon.style.display = 'block';
        else icon.style.display = 'none';
    }

    // change to counter
    const likeBtn = (e) => {
        setClick(prev => !prev) 
        console.log(click)
        if(click) likes++;
        else likes--;
        // return displayLike(click, id)
    }
    
    return <Card className='profile-card'>
        <Card.Title>{name}</Card.Title>
        <div>
            <p>Name: {name}</p>
            <ButtonGroup aria-label="Basic example" id='btnGroup'>
                <Button onClick={() => likeBtn()} variant="light">Like?</Button>
                <Badge id={`like-icon-${id}`} className='profile-like-icon' bg="secondary" >{likes}</Badge>
            </ButtonGroup>

            <p>Type: {type}</p>
            <p>Country: {country}</p>
            <p>Intro: {intro}</p>
        </div>
    </Card>

    // return <div className='profile-card'>
    //     <p>Name: {name}</p>
    //     <p>Type: {type}</p>
    //     <p>Country: {country}</p>
    //     <p>Intro: {intro}</p>
    // </div>
}

export default Profile; 