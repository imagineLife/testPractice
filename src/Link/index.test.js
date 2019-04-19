import React from "react"
import ReactDOM from "react-dom"
import Link from "./index"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

describe('<Link />', () => {
	it('passes address PROP to href', () => {
		const linkWrapper = shallow(<Link address={'www.google.com'} tOrF={true}/>)
		expect(linkWrapper.find('a[href="www.google.com"]').exists()).toBe(true)
	})

	it('does not show element when FALSE conditional', () => {
		const linkWrapper = shallow(<Link address={'www.google.com'} tOrF={false}/>)
		expect(linkWrapper.find('a[href="www.google.com"]').length).toBe(0)
	})

	/*
		using SetProps
		https://airbnb.io/enzyme/docs/api/ShallowWrapper/setProps.html#setpropsnextprops-callback--self
		Takes an object, passes as new props to component
		causes re-render
		tests how component will behave with changing props
		calls componentWillRecieveProps on a class component
		re-renders on this functional component
	*/
	describe('handles conditional render prop-driven updates', () => {
		it('Updates From null to visible', () => {
			const linkWrapper = shallow(<Link address={'www.google.com'} tOrF={false}/>)
			expect(linkWrapper.find('a[href="www.google.com"]').length).toBe(0)

			linkWrapper.setProps({tOrF: true})
			expect(linkWrapper.find('a[href="www.google.com"]').length).toBe(1)
		})

		it('Updates From visible to null', () => {
			const linkWrapper = shallow(<Link address={'www.google.com'} tOrF={true}/>)
			expect(linkWrapper.find('a[href="www.google.com"]').length).toBe(1)

			linkWrapper.setProps({tOrF: false})
			expect(linkWrapper.find('a[href="www.google.com"]').length).toBe(0)
		})
	})

})