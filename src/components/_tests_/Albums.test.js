import React from "react"
import Albums from "../Albums"
import enzyme, { mount } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai'

const adapter = new Adapter()
enzyme.configure({adapter})

describe("Albums", () => {
  let props
  let mountedAlbums
  const albums = () => {
    if (!mountedAlbums) {
        mountedAlbums = mount(
        <Albums {...props} />
      )
    }
    return mountedAlbums
  }

  beforeEach(() => {
    props = {
      albums: [{collectionName: 'a'}, {collectionName: 'b'}, {collectionName: 'c'}]
    }
    mountedAlbums = albums();
  })

  it("Successfully Renders", () => {
    const container = mountedAlbums.find("#albumsContainer")
    expect(container.length).to.equal(1)
  })

  it("Number of rendered albums must be same length as props.albums", () => {
    const albums = mountedAlbums.find("h1")
    expect(albums.length).to.equal(props.albums.length)
  })
  
})