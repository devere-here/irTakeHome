import React, { Component } from 'react'



class Search extends React.Component{
    constructor(){
        super()
        this.state = {
            searchTerm: ''
        }
    }

    handleChange = (evt) => {
        console.log('in handle change', evt.target.value)

        this.setState({searchTerm: evt.target.value})
    }

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

export default Search
