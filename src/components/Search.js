import React from 'react'
import PropTypes from 'prop-types'

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
            <div>
                <h1>In Search</h1>
                <input value={searchTerm} onChange={this.handleChange}/>
                <button onClick={() => handleSearch(searchTerm)}>Submit</button>
            </div>
        )   
    }
}

Search.propTypes = {
    handleSearch: PropTypes.func
}

export default Search
