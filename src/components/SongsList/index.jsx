import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import './SongsList.css'

const SongsList = () => {
    const url = 'https://e.snmc.io/i/600/s/9d9e3fd45354972ac4706d02e4d744c5/7491053/lisa-%E7%B4%85%E8%93%AE%E8%8F%AF-gurenge-Cover-Art.jpg';

    const [song, setSong] = useState([
        { id: 0, name: 'Gurenge', src: url, alt: 'img1', like: false },
        { id: 1, name: 'song2', src: url, alt: 'img2', like: false },
        { id: 2, name: 'song3', src: url, alt: 'img3', like: false }
    ])

    const [lyrics, setLyrics] = useState([
        { id: 0, val: '', bool: false }, { id: 1, val: '', bool: false }, { id: 2, val: '', bool: false }
    ])

    const [back, setBack] = useState(false);

    function handleBack(e) {
        const navigate = useNavigate();
       
        useEffect(() => {
            setBack(prev => !prev)
            console.log('back', back)
            if(back) navigate("/artists");
        }, [back]);
    }
    
    // when lyric is pressed fetch it from api
    // useEffect(() => {
    //     async function getLyrics(){
    //         const response = await axios.get('https://api.lyrics.ovh/v1/Coldplay/Adventure%20of%20a%20Lifetime')
    //         console.log(response.data)
    //         setLyrics(response.data, true)
    //     }

    //     getLyrics()
    // }, [lyrics]);

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
                <Card.Title >{s.name}</Card.Title>
                <Card.Img variant="top" className='song-img' src={s.src} alt={s.alt}/>

                <div className='lyrics-container'>
                    {/* <p>{ displayLyrics() }</p> */}
                </div>
                <ButtonGroup aria-label="Basic example" id='btnGroup'>
                    <Button id='lyric-btn' onClick={handleLyric} variant="light">Lyrics</Button>

                    <Button onClick={() => likeBtn(s.like, s.id)} variant="light">Like?</Button>
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
                <h3>Name</h3>
                <h3>Type</h3>
                <button onClick={() => handleBack()}>Back</button>
            </div>
            <div id='all-songs-list'>
                {songRows() } 
            </div>
        </div>
    )
}

export default SongsList; 