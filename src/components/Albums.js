import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'



const Albums = (props) => (
   
    <div id="albumsContainer">
    {console.log('props', props)}
        {props.albums.map(album => (
            <Card key={album.collectionName} style={{height: 350, width: 250}}>
                <CardContent>
                    <Typography><a target="_blank" href={album.collectionViewUrl}>{album.collectionName}</a></Typography>
                    <Typography>By: <a target="_blank" href={album.artistViewUrl}>{album.artistName}</a></Typography>
                </CardContent>
                <CardMedia style={{height: 150, width: 150}}image={album.artworkUrl100}/>
                <Typography>Price: ${album.collectionPrice}</Typography>
            </Card>
        ))}
    </div>
)

Albums.propTypes = {
    albums: PropTypes.array
}

export default Albums

// <h1 key={album.collectionName}>{album.collectionName}</h1>
