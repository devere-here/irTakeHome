import React from 'react'
import PropTypes from 'prop-types'
import {Button, TextField } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';



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
            <div id="searchBarContainer">
                <TextField style={{width: 400}} id="searchBar" value={searchTerm} onChange={this.handleChange} variant="outline" placeholder="Billy Joel" InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}  />
                <Button id="searchButton" onClick={() => handleSearch(searchTerm)} color="primary" variant="contained">Submit</Button>
            </div>
        )   
    }
}

Search.propTypes = {
    handleSearch: PropTypes.func
}

export default Search
