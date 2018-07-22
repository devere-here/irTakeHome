import React from 'react'
import PropTypes from 'prop-types'

import '../style/albums.css'

const Albums = (props) => (
   
    <div id="albumsContainer">
        {props.albums.map(album => (
            <div className="albumCard" key={album.collectionViewUrl}>
                <h3>
                    <a target="_blank" href={album.collectionViewUrl}>
                        {album.collectionName}{album.collectionExplicitness === 'cleaned' ? ' [Cleaned Up Version]' : null}
                    </a>
                </h3>
                <h4>
                    By: <a target="_blank" href={album.artistViewUrl}>{album.artistName}</a>
                </h4>
                <img className="albumCover" alt="album cover" src={album.artworkUrl100} />
            </div>
        ))}
    </div>
)

Albums.propTypes = {
    albums: PropTypes.array
}

export default Albums
