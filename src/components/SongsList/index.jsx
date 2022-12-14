import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import './SongsList.css'

const SongsList = () => {
    const url1 = 'https://e.snmc.io/i/600/s/9d9e3fd45354972ac4706d02e4d744c5/7491053/lisa-%E7%B4%85%E8%93%AE%E8%8F%AF-gurenge-Cover-Art.jpg';
    const url2 = 'https://m.media-amazon.com/images/M/MV5BMTM2NzE1YTEtNTNjZC00MTg5LTkwOTEtNDEwMDI1ODA1YjhkXkEyXkFqcGdeQXVyNjU0ODAyOTY@._V1_.jpg'
    const url3 = 'https://upload.wikimedia.org/wikipedia/en/c/ce/Fight_Song_by_Rachel_Platten.png'

    const [song, setSong] = useState([
        { id: 0, name: 'Gurenge', artist: "LiSa", src: url1, alt: 'img1', like: false },
        { id: 1, name: 'Hello', artist: "Adele", src: url2, alt: 'img2', like: false },
        { id: 2, name: 'Fight Song', artist: "Rachel Platten", src: url3, alt: 'img3', like: false }
    ])

    const [lyrics, setLyrics] = useState([
        { id: 0, val: '', bool: false }, { id: 1, val: '', bool: false }, { id: 2, val: '', bool: false }
    ])
    
    // // when lyric is pressed fetch it from api
    // useEffect(() => {
    //     async function getLyrics(){
    //         const response = await axios.get('https://api.lyrics.ovh/v1/Coldplay/Adventure%20of%20a%20Lifetime')
    //         console.log(response.data)
    //         setLyrics(response.data, true)
    //     }

    //     getLyrics()
    // }, [lyrics]);

    function BackButton() {
        const navigate = useNavigate();
        return <button onClick={() => navigate(-1)}>Back</button>
    }

    function handleLyric(e){
        // e.preventDefault();
        console.log('works')

        // setLyrics(arr => {
        //     arr.map(index => {
        //         console.log(index.bool)
        //         return index.bool = !index.bool
        //     })
        // })
    }

    function displayLyrics(){
        return lyrics;
    }

    const songRows = () => {
        return song.map((s, i) => (
            <Card className='single-container' key={i}>
                <h3 >{s.name}</h3>
                <Card.Img variant="top" className='song-img' src={s.src} alt={s.alt}/>

                {/* <div className='lyrics-container'> */}
                    {/* <p>{ displayLyrics() }</p> */}
                {/* </div> */}
                <ButtonGroup aria-label="Basic example" id='btnGroup'>
                    <Button id='lyric-btn' onClick={handleLyric} variant="light" disabled >Lyrics</Button>

                    <Button onClick={() => likeBtn(s.like, s.id)} variant="light">Like</Button>
                    <Badge id={`like-icon-${s.id}`} className='song-like-icon' bg="secondary" >Like</Badge>
                </ButtonGroup>
            </Card>
        ))
    }

    function displayLike(bool, id){
        const icon = document.getElementById(`like-icon-${id}`)
        if(bool) icon.style.display = 'block'
        else icon.style.display = 'none' 
    }

    const likeBtn = (bool, id) => {
        bool = !bool
        console.log(bool)
        song[id].like = bool
        return displayLike(bool, id)
    }

    return (
        <div id='song-list'>
            <div id='mini-nav'>
                {/* <h3>Name</h3>
                <h3>Type</h3> */}
                {/* {BackButton()} */}
            </div>
            <div id='all-songs-list'>
                {songRows() } 
            </div>
        </div>
    )
}

export default SongsList; 