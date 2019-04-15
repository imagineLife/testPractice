import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

describe("<App />", () => {
  it("should render App", () => {
    const wrapper = shallow(<App />)
  })

  it("should have 1 paragraph", () => {
    const wrapper = shallow(<App />)

    //finds provided selector, <p>
    expect(wrapper.find('p').length).toBe(1)
  })

  it("an app-into classed element should exist", () => {
    const wrapper = shallow(<App />)

    //finds provided selector, <p>
    expect(wrapper.find('.App-intro').exists()).toBe(true)
  })


})