import React, {Component} from 'react'
import Search from './Search'
import DefaultDisplay from './DefaultDisplay'
import Albums from './Albums'

class App extends React.Component{
    state = {
        albums: [],
        searched: false
    }

    render = () => {
        let { albums, searched } = this.state
        return (
            <div>
                <Search />
                {searched
                    ? <Albums />
                    : <DefaultDisplay />
                }
            </div>
        )
    }

}

export default App
