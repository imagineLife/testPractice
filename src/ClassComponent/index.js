import React from 'react';

export default class ClassComponent extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			someText: ''
		}
	}

	makeString(str){
		if(str.length > 0){
			return true;
		}else{
			return false;
		}
	}

	componentDidMount(){
		this.setState({someText: 'someTextHere!'})
	}

	componentWillReceiveProps(){
		this.setState({lifeCycle: 'compWillRecProps'})
	}

	render(){
		return(<p>{this.state.someText}</p>)
	}
}