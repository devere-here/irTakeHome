import React from "react"
import { mount } from "enzyme"
import App from "../App"

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
    mountedLockScreen = undefined;
  })
  
  // All tests will go here
})