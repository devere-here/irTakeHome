import React from "react"
import { mount } from "enzyme"
import Albums from "../Albums"

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
    }
    mountedAlbums = undefined;
  })
  
  // All tests will go here
})