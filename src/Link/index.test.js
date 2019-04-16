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
})