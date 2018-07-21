import React from "react"
import enzyme, { mount } from "enzyme"
import Search from "../Search"
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai'

const adapter = new Adapter()
enzyme.configure({adapter})

describe("Search", () => {
  let props
  let mountedSearch
  let handleSearchCounter = 0
  const search = () => {
    if (!mountedSearch) {
        mountedSearch = mount(
        <Search handleSearch={props.handleSearch} />
      )
    }
    return mountedSearch
  }

  beforeEach(() => {
    props = {
      handleSearch: function(searchTerm){
        handleSearchCounter++
      } 
    }
    mountedSearch = search()
  })
  
  it("always renders a div", () => {
    const divs = search().find("div");
    expect(divs.length).to.equal(1)
  })

  it("typing in the search bar alters our state", () => {
  
    const input = mountedSearch.find("input");
    expect(input.length).to.equal(1)

    let event = {target: {name: 'searchTerm', value: 'Johnny Cash'}}
    input.simulate('change', event)
    expect(mountedSearch.state('searchTerm')).to.equal('Johnny Cash')
  })

  it("clicking submit calls our handleSearch function", () => {
    const button = mountedSearch.find("button");
    button.simulate('click')
    expect(handleSearchCounter).to.equal(1)
  })

})