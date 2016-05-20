import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
  	let txt = this.props.txt
  	return <div>{txt}</div>
    }
}


App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
	txt: 'sending a props will overirde this default text...loading...'
}


ReactDOM.render(<App cat={5}/>, document.querySelector('#app'))