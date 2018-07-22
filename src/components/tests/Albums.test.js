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
      albums: [{collectionName: 'a', collectionViewUrl: 'www.google.com', collectionExplicitness: null, artistViewUrl: null, artistName: null, artworkUrl100: null}, {collectionName: 'b', collectionViewUrl: 'www.yahoo.com', collectionExplicitness: null, artistViewUrl: null, artistName: null, artworkUrl100: null}, {collectionName: 'c', collectionViewUrl: 'www.amazon.com', collectionExplicitness: null, artistViewUrl: null, artistName: null, artworkUrl100: null}]
    }
    mountedAlbums = albums();
  })

  it("Successfully Renders", () => {
    const container = mountedAlbums.find("#albumsContainer")
    expect(container.length).to.equal(1)
  })

  it("Number of rendered albums must be same length as props.albums", () => {

    const albums = mountedAlbums.find(".albumCard")
    expect(albums.length).to.equal(props.albums.length)
  })  
})
