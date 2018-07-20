import React from 'react'


const Albums = (props) => (
    props.albums.map(album => (
        <h1 key={album.collectionName}>{album.collectionName}</h1>
    ))
)

export default Albums
