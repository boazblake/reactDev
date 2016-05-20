import React from 'react';

class App extends React.Component {
	constructor(){
		super();
		this.state = {txt: ''};
		this.update = this.update.bind(this)
	}

	update(evt) {
		this.setState({txt: evt.target.value})
	}
  render(){
  	return (
  		<div>
				<Widget txt={this.state.txt} update={this.update}/>
				<Widget txt={this.state.txt} update={this.update}/>
				<Widget txt={this.state.txt} update={this.update}/>
  		</div>
  	)
  }
}


const Widget = (props) => {
	return (
		<div>
			<input type='text'
				onChange={props.update} />
				<h1>{props.txt}</h1>
		</div>
	)	
}

export default App