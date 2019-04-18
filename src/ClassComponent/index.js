import React from 'react';

export default class ClassComponent extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			someText: ''
		}
	}

	makeString(str){
		return true;
	}

	componentDidMount(){
		console.log('CDM HERE!');
		this.setState({someText: 'someTextHere!'})
	}

	componentWillReceiveProps(){
		this.setState({lifeCycle: 'compWillRecProps'})
	}

	render(){
		return(<p>{this.state.someText}</p>)
	}
}