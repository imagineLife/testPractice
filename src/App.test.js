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

  //finds provided selector, <p>
  it("should have 1 paragraph", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('p').length).toBe(1)
  })

  //checks for existing by class
  it("an app-into classed element should exist", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.App-intro').exists()).toBe(true)
  })

  //finds provided selector, <p>
  it("has a ul with 3 li's", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('ul').children().length).toBe(3)
  })

  //checks that an item has a class
  it("has a ul with a class of myClass", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('ul').hasClass('myClass')).toBe(true)
  })


  /*
	SELECTOR TYPE REVIEW
  */

  //by element type
  describe("By Selector Types", () => {
  	  

  	  it("ELEMENT with correct Text", () => {
	    const wrapper = shallow(<App />)
	    expect(wrapper.find('h1').text()).toBe('Testing Overview')
	  })

  	  it("CLASS with correct Text", () => {
	    const wrapper = shallow(<App />)
	    expect(wrapper.find('.App-title').text()).toBe('Testing Overview')
	  })	  

  	  it("ID with correct Text", () => {
	    const wrapper = shallow(<App />)
	    expect(wrapper.find('#h1ID').text()).toBe('Testing Overview')
	  })
  })
})