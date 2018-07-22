import React from 'react'
import Search from './Search'
import DefaultDisplay from './DefaultDisplay'
import Albums from './Albums'
import axios from 'axios'

import '../style/app.css'

class App extends React.Component{
    state = {
        albums: [],
        searched: false
    }
    
    handleSearch = async (searchTerm) => {
        try {
            let res = await axios.get(`https://itunes.apple.com/search?term=${searchTerm}&entity=album&limit=20`)
            this.setState({
                albums: res.data.results,
                searched: true
            })
        } catch(err){
            console.log(err)
        }
    }

    render(){
        let { albums, searched } = this.state
        return (
            <div id="appContainer">
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
