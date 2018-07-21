import React from "react"
import enzyme, { mount } from "enzyme"
import App from "../App"
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai'

const adapter = new Adapter()
enzyme.configure({adapter})

describe("App", () => {
  let props
  let mountedApp

  const app = () => {
    if (!mountedApp) {
        mountedApp = mount(
        <App />
      )
    }
    return mountedApp
  }

  beforeEach(() => {
    props = {
      wallpaperPath: undefined,
      userInfoMessage: undefined,
      onUnlocked: undefined,
    }
    mountedApp = app();
    mountedApp.setSearchedToTrue = function(){
      this.setState({searched: true})
    }
  })
  
  it("Successfully Renders", () => {
    const divs = mountedApp.find("div")
    expect(divs.length).to.be.at.least(1)
  })

  it("renders DefaultDisplay component if this.state.searched = false", () => {
    const ddContainer = mountedApp.find("#defaultDisplayContainer")
    expect(mountedApp.state('searched')).to.equal(false)
    expect(ddContainer.length).to.equal(1)
  })

  it("renders Albums component if this.state.searched = true", () => {
    mountedApp.setSearchedToTrue()
    expect(mountedApp.state('searched')).to.equal(true)
  
    const albumsContainer = mountedApp.find("#albumsContainer")
    expect(albumsContainer.length).to.equal(1)
  })
})