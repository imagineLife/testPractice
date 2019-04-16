import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { configure, shallow, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Title from "./Title"
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

describe("<App />", () => {

  describe('shallow rendering', () => {

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

      it("ATTR with correct Text", () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('[alt="dummyAlt"]').text()).toBe('Testing Overview')
      })

      it("COMBO type && attr with correct Text", () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('h1[alt="dummyAlt"]').text()).toBe('Testing Overview')
      })

      it("COMBO type > attr with correct Text", () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('header > [alt="dummyAlt"]').text()).toBe('Testing Overview')
      })

      it("COMBO parentClass childClass with correct Text", () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('.App-header .App-title').text()).toBe('Testing Overview')
      })    
    })

    describe("Get Component name By PROP", () => {

      it("by 'attr' prop && val ", () => {
        const wrapper = shallow(<App />)
        let foundTitleComponent = wrapper.find('[text="dummy title"]'); 
        expect(foundTitleComponent.text()).toBe("<Title />")
      })
    
    })

    describe("Matches TEXT by Object prop && val JS obj", () => {

      it("App ", () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find({alt: 'dummyAlt'}).text()).toBe('Testing Overview')
      })
    
    })

    /*
      Jest snapshot can take a 'snapshot', 
      Keeps a record of the INTENDED OUTPUT

      NOTE: when testing,
        snapshots show what changed.
      UPDATED the snapshot for a passing test using 'u' 
        to re-trigger jest
    */
    describe("works with SNAPSHOTS", () => {

      it('matches snapshot', () => {
        const wrapper = shallow(<App />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
    })

  })

  describe('MOUNT rendering', () => { 
      it('matches snapshot', () => {
        const appMounted = mount(<App />)
        expect(toJson(appMounted)).toMatchSnapshot();
      })
  })

})