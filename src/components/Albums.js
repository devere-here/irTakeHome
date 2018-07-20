import React from 'react'
import PropTypes from 'prop-types'


const Albums = (props) => (
    props.albums.map(album => (
        <h1 key={album.collectionName}>{album.collectionName}</h1>
    ))
)

Albums.propTypes = {
    albums: PropTypes.array
}

export default Albums
