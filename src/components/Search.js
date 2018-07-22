import React from 'react'
import PropTypes from 'prop-types'

import '../style/search.css'

class Search extends React.Component{
    constructor(){
        super()
        this.state = {
            searchTerm: ''
        }
    }

    handleChange = (evt) => this.setState({searchTerm: evt.target.value})

    render = () => {
        let { handleSearch } = this.props,
            { searchTerm } = this.state
        
        return (
            <div id="searchComponentContainer">
                <div id="inputContainer">
                    <input id="searchBar" type="text" value={searchTerm} onChange={this.handleChange} />
                    <button id="searchButton" onClick={() => handleSearch(searchTerm)}>Submit</button>
                </div>
            </div>
        )   
    }
}

Search.propTypes = {
    handleSearch: PropTypes.func
}

export default Search
