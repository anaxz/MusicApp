import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SongsList = () => {
    const url = 'https://e.snmc.io/i/600/s/9d9e3fd45354972ac4706d02e4d744c5/7491053/lisa-%E7%B4%85%E8%93%AE%E8%8F%AF-gurenge-Cover-Art.jpg';

    const [song, setSong] = useState([
        { id: 0, name: 'Gurenge', src: url, alt: 'img1', like: false },
        { id: 1, name: 'song2', src: url, alt: 'img2', like: false },
        { id: 2, name: 'song3', src: url, alt: 'img3', like: false }
    ])

    const [lyrics, setLyrics] = useState([
        { val: '', bool: false }, { val: '', bool: false }, { val: '', bool: false }
    ])
    
    // when lyric is pressed fetch it from api
    useEffect(() => {
        async function getLyrics(){
            const response = await axios.get('https://api.lyrics.ovh/v1/Coldplay/Adventure%20of%20a%20Lifetime')
            console.log(response.data)
            setLyrics(response.data, true)
        }

        getLyrics()
    }, [lyrics]);

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

    const renderRows = () => {
        return song.map((s, i) => (
            <div className='single-container' key={i}>
                <h3>{s.name}</h3>
                <img className='song-img' src={s.src} alt={s.alt}/>

                <div className='lyrics-container'>
                    {/* <p>{ displayLyrics() }</p> */}
                </div>
                
                <button id='lyric-btn' onClick={handleLyric}>Lyrics</button>

                <p id={`like-icon-${s.id}`} className='like-icon'>Like</p>
                <button onClick={() => likeBtn(s.like, s.id)}>Like?</button>
            </div>
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
            <div id='song-list-subtitle'>
                <h3>Name</h3>
                <h3>Image</h3>
            </div>
            
            <div id='all-songs-list'>{ renderRows() } </div>
        </div>
    )
}

export default SongsList; 