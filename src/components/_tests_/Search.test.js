import React from "react"
import enzyme, { mount } from "enzyme"
import Search from "../Search"
import Adapter from 'enzyme-adapter-react-16'

const adapter = new Adapter()
enzyme.configure({adapter})

describe("Search", () => {
  let props
  let mountedSearch
  const search = () => {
    if (!mountedSearch) {
        mountedSearch = mount(
        <Search {...props} />
      )
    }
    return mountedSearch
  }

  beforeEach(() => {
    props = {
        handleSearch: undefined
    }
    mountedSearch = undefined;
  })
  
  // All tests will go here
  it("always renders a div", () => {
    const divs = search().find("div");
    expect(divs.length).toBeGreaterThan(0);
  })
})