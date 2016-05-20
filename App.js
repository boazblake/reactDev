import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(){
  	super();
  	this.state = { val: 0 };
  	this.update = this.update.bind(this);
  }
  update(){
  	this.setState({ val: this.state.val +1 })
  }

	componentWillMount(){
		this.setState({m : 4})
	}
  render() {
  	console.log('rendering!')
  	return <button onClick={this.update}>{this.state.val * this.state.m}</button>
  }
  componentDidMount(){
  	console.log(ReactDOM.findDOMNode(this))
  	this.inc = setInterval(this.update,500)
  }
  componentWillUnmount(){
  	clearInterval(this.inc)
  }
}

class Wrapper extends React.Component {
	constructor(){
		super();
	}

	mount(){
		ReactDOM.render(<App/>, document.querySelector('#a'))
	}

	unmount(){
		ReactDOM.unmountComponentAtNode(document.querySelector('#a'))
	}
  render(){
   return(
   	<div>
   		<button onClick={this.mount.bind(this)} className='btn btn-success'>MOUNT</button>
   		<button onClick={this.unmount.bind(this)} className='btn btn-danger'>UNMOUNT</button>
   		<div id='a'></div>
   	</div>
   ) 
  }
}


export default Wrapper