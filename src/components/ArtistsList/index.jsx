import React, {useState, useEffect} from 'react'

import './ArtistsList.css'
import { Profile }  from '../';


const ArtistsList = () => {

    const [artists, setArtists] = useState([
        { 
            id: 0, name: 'LiSa', type: ['Anime', 'Punk'], country: 'Japan', 
            intro: 'Risa Oribe (織部 里沙, Oribe Risa, born June 24, 1987), better known by her stage name Lisa (stylized as LiSA), is a Japanese singer, songwriter and lyricist from Seki, Gifu, signed to Sacra Music under Sony Music Artists.',
            likes: 27
        }, 
        { 
            id: 1, name: 'Artist2', type: ['Rock', 'Punk'], country: 'area', 
            intro: 'dummy data dummy data v  dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data', 
            likes: 1
        }, 
        { 
            id: 2, name: 'Artist3', type: ['Pop', 'Punk'], country: 'area', 
            intro: 'dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data',
            likes: 0
        }
    ]) 

    function renderDisplay(){
        return artists.map((a, i) => (
            <Profile key={i} 
            id={a.id} name={a.name} type={a.type} country={a.country} intro={a.intro} likes={a.likes} />
        ))
    }

    return <div className="artist-list">
        { renderDisplay() }
    </div>
}

export default ArtistsList; 