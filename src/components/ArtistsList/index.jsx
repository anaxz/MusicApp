import React, {useState, useEffect} from 'react'

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import './ArtistsList.css'
// import { Profile }  from '../';


const ArtistsList = () => {

    const [artists, setArtists] = useState([
        { 
            id: 0, name: 'LiSa', type: ['Anime', 'Punk'], country: 'Japan', 
            intro: "Risa Oribe (織部 里沙, Oribe Risa, born June 24, 1987), better known by her stage name Lisa (stylized as LiSA), is a Japanese singer, songwriter and lyricist from Seki, Gifu, signed to Sacra Music under Sony Music Artists.",
            likes: 31
        }, 
        { 
            id: 1, name: 'Adele', type: ['Pop', 'Soul'], country: 'UK', 
            intro: "Adele Laurie Blue Adkins MBE (born 5 May 1988), professionally known by the mononym Adele, is an English singer and songwriter. After graduating in arts from the BRIT School in 2006, Adele signed a record deal with XL Recordings. Her debut album, 19, was released in 2008 and spawned the UK top-five singles 'Chasing Pavements' and 'Make You Feel My Love'. The album was certified 8× platinum in the UK and triple platinum in the US. Adele was honoured with the Brit Award for Rising Star as well as the Grammy Award for Best New Artist.", 
            likes: 45
        }, 
        { 
            id: 2, name: 'Rachel Platten', type: ['Pop', 'Rock'], country: 'America', 
            intro: "Rachel Ashley Platten (born May 20, 1981) is an American singer-songwriter and author. After releasing two albums independently in 2003 and 2011, she signed with Columbia Records in 2015 and released her mainstream debut single, 'Fight Song', which peaked at number 6 on the Billboard Hot 100 in the United States, topped charts in the United Kingdom, and peaked within the top ten of multiple charts worldwide. Platten won a Daytime Emmy Award for a live performance of the song on Good Morning America. Her major-label debut studio album, Wildfire (2016), was certified gold by the Recording Industry Association of America (RIAA) and featured the follow-up singles 'Stand by You' and 'Better Place'. Her second major-label album, Waves (2017), followed a year later.",
            likes: 27
        }
    ]) 
    const [click, setClick] = useState(false)

    // toggle counter 
    const likeBtn = (e, id) => {
        setClick(prev => !prev) 
        if(click) artists[id].likes++;
        else artists[id].likes--;
        // return artists[id].likes;
    }

    const displayType = (type) => {
        let arr = []
        
        if(type.length >= 1) {
            type.forEach((ele, i )=> {
                if(type.length-1 !== i) arr += ele + ', ';
                else arr += ele;
            });
            return arr;
        } 
        return type
    }

    function renderDisplay(){
        return artists.map((a, i) => (
            // <Profile key={i} 
            // id={a.id} name={a.name} type={a.type} country={a.country} intro={a.intro} likes={a.likes} />

            <Card className='profile-card' key={i} >
                <h3>{a.name}</h3>
                <div className='card-top'>
                    <div>
                        <p>Type: {displayType(a.type)}</p>
                        <p>Country: {a.country}</p>
                    </div>
                    
                    <ButtonGroup aria-label="Basic example" id='btnGroup'>
                        <Button onClick={(e) => likeBtn(e, a.id)} variant="light">Like</Button>
                        <Badge id={`like-icon-${a.id}`} className='profile-like-icon' bg="secondary" >{a.likes}</Badge>
                    </ButtonGroup>
                    
                </div>
                <div className='card-bottom'>
                    <p>{a.intro}</p>
                </div>
            </Card>
        ))
        
    }

    return <div className="artist-list">
        { renderDisplay() }
    </div>
}

export default ArtistsList; 