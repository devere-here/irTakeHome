import React from "react"
import DefaultDisplay from "../DefaultDisplay"
import enzyme, { mount } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai'

const adapter = new Adapter()
enzyme.configure({adapter})

describe("DefaultDisplay", () => {
  let mountedDefaultDisplay
  const defaultDisplay = () => {
    if (!mountedDefaultDisplay) {
        mountedDefaultDisplay = mount(
        <DefaultDisplay />
      )
    }
    return mountedDefaultDisplay
  }

  beforeEach(() => {
    mountedDefaultDisplay = defaultDisplay();
  })

  it("Successfully Renders", () => {
    const container = mountedDefaultDisplay.find("#defaultDisplayContainer")
    expect(container.length).to.equal(1)
  })
})