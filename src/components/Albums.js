import React from 'react'
import PropTypes from 'prop-types'


const Albums = (props) => (
    <div id="albumsContainer">
        {props.albums.map(album => (
            <h1 key={album.collectionName}>{album.collectionName}</h1>
        ))}
    </div>
)

Albums.propTypes = {
    albums: PropTypes.array
}

export default Albums
