import React from "react"
import ReactDOM from "react-dom"
import { configure, shallow, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import ClassComponent from "./index"
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

describe('ClassComponent', () => {
  describe('Lifecycle Methods', () => {
    it('calls ComponentDidMount', () => {

      //
      jest.spyOn(ClassComponent.prototype, 'componentDidMount')
      
      const component = shallow(<ClassComponent/>)
      expect(ClassComponent.prototype.componentDidMount.mock.calls.length).toBe(1)
    })
  })
})