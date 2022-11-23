import React from 'react'

import './Profile.css'

const Profile = ({ name, type, country, intro }) => {
    
    return <div className='profile-card'>
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>Country: {country}</p>
        <p>Intro: {intro}</p>
    </div>
}

export default Profile; 