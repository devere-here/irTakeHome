import React from 'react'
import Search from './Search'
import DefaultDisplay from './DefaultDisplay'
import Albums from './Albums'
import axios from 'axios'

class App extends React.Component{
    state = {
        albums: [],
        searched: false
    }

    handleSearch = searchTerm => {
        console.log('searchTerm', searchTerm)
        axios.get(`https://itunes.apple.com/search?term=${searchTerm}&entity=album&limit=20`)
        .then(res => {
            console.log(res.data.results)
            this.setState({
                albums: res.data.results,
                searched: true
            })
        })
        .catch(err => console.log(err))
    }

    render = () => {
        let { albums, searched } = this.state
        return (
            <div>
                <Search handleSearch={this.handleSearch} />
                {searched
                    ? <Albums albums={albums} />
                    : <DefaultDisplay />
                }
            </div>
        )
    }

}

export default App
