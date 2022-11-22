import React, { useState } from 'react';

const SongsList = () => {
    const [albumImg, setAlbumImg] = useState([
        { id: 0, name: 'Gurenge', src: 'https://e.snmc.io/i/600/s/9d9e3fd45354972ac4706d02e4d744c5/7491053/lisa-%E7%B4%85%E8%93%AE%E8%8F%AF-gurenge-Cover-Art.jpg', alt: 'img1', like: false },
        { id: 1, name: 'song2', src: 'http:link2', alt: 'img2', like: false },
        { id: 2, name: 'song3', src: 'http:link3', alt: 'img3', like: false }
    ])
    
    const renderRows = () => {
        return albumImg.map((p, i) => ( 
        <tr key={i}>
            <td>{p.name}</td>
            <td>
                <img className='song-img' src={p.src} alt={p.alt}/>
            </td>
            <p id={`like-icon-${p.id}`} style={{ display:'none' }}>Like</p>
            <button onClick={() => likeBtn(p.like, p.id)}>Like?</button>
        </tr>
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
        <table id='song-list'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                { renderRows() }
            </tbody>
        </table>
    )
}

export default SongsList; 