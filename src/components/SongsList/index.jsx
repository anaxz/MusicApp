import React, { useState } from 'react';

const SongsList = () => {
    const url = 'https://e.snmc.io/i/600/s/9d9e3fd45354972ac4706d02e4d744c5/7491053/lisa-%E7%B4%85%E8%93%AE%E8%8F%AF-gurenge-Cover-Art.jpg';

    const [song, setSong] = useState([
        { id: 0, name: 'Gurenge', src: url, alt: 'img1', like: false },
        { id: 1, name: 'song2', src: url, alt: 'img2', like: false },
        { id: 2, name: 'song3', src: url, alt: 'img3', like: false }
    ])
    
    const renderRows = () => {
        return song.map((s, i) => (
            <div className='single-container' key={i}>
                <h3>{s.name}</h3>
                <img className='song-img' src={s.src} alt={s.alt}/>
                <p id={`like-icon-${s.id}`} style={{ display:'none' }}>Like</p>
                <button onClick={() => likeBtn(s.like, p.id)}>Like?</button>
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
        albumImg[id].like = bool
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