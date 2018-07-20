import React, {Component} from 'react'
import Search from './Search'
import DefaultDisplay from './DefaultDisplay'
import Albums from './Albums'
import axios from 'axios'

class App extends React.Component{
    state = {
        albums: [],
        searched: false
    }

    handleSearch = (searchTerm) => {
        axios.get(`https://itunes.apple.com/search?term=${searchTerm}`)
        .then(res => {
            console.log('res is', res.data.results)
        })
        .catch(err => console.log(err))
    }

    render = () => {
        let { albums, searched } = this.state
        return (
            <div>
                <Search handleSearch={this.handleSearch} />
                {searched
                    ? <Albums />
                    : <DefaultDisplay />
                }
            </div>
        )
    }

}

export default App
