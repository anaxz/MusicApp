import React, { useState } from 'react'

const SongsList = () => {
    const [albumImg, setAlbumImg] = useState([
        { id: 0, name: 'Gurenge', src: 'http:link1', alt: 'img1', like: false },
        { id: 1, name: 'song2', src: 'http:link2', alt: 'img2', like: false },
        { id: 2, name: 'song3', src: 'http:link3', alt: 'img3', like: false }
    ])
    
    const renderRows = () => {
        return albumImg.map(p => ( 
        <tr>
            <td>{p.name}</td>
            <td><img src={p.src} alt={p.alt}/></td>
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

    // const changeLikes = () => {
    //     setLike( prevArr => {
    //         prevArr.map(e => {
    //             e.bool = !e.bool
    //             console.log(e.value)
    //             if(e.bool) return e.value = 'like'
    //             else return e.value = 'dislike'
    //         })
    //     })
    // }

    return (
        <table style={{ border: "1px solid black", width: "100vw", textAlign: "center" }}>
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