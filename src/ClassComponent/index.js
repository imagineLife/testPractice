import React from 'react';

export default class ClassComponent extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			someText: ''
		}
	}

	componentDidMount(){
		console.log('CDM HERE!');
		this.setState({someText: 'someTextHere!'})
	}

	render(){
		return(<p>{this.state.someText}</p>)
	}
}