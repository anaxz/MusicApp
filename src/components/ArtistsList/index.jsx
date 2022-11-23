import React, {useState, useEffect} from 'react'

import { Profile }  from '../';
import {useTest} from '../../customHooks/'

const ArtistsList = () => {

    const [artists, setArtists] = useState([
        {  name: 'LiSa', type: ['Anime', 'Punk'], country: 'Japan', 
        intro: 'Risa Oribe (織部 里沙, Oribe Risa, born June 24, 1987), better known by her stage name Lisa (stylized as LiSA), is a Japanese singer, songwriter and lyricist from Seki, Gifu, signed to Sacra Music under Sony Music Artists.'
        }, {
            name: 'Artist2', type: ['Rock', 'Punk'], country: 'area', intro: 'dummy data dummy data v  dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data '
        }, {
            name: 'Artist3', type: ['Pop', 'Punk'], country: 'area', intro: 'dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data dummy data '
        }
    ]) 

    function renderDisplay(){
        return artists.map((a, i) => (
            <Profile key={i} 
            name={a.name} type={a.type} country={a.country} intro={a.intro} />
        ))
    }
    
    // function testHook(){
    //     const [txt, setTxt] = useTest('');
    //     // setTxt('hello')
    //     console.log(txt)
    //     // setTxt('Hello world')
    //     return txt;
    // }

    return <div className="artist-list">
        { renderDisplay() }
        {/* <p>{testHook()}</p> */}
    </div>
}

export default ArtistsList; 