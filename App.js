import React from 'react';
class App extends React.Component {
    constructor(){
    	super();
    	this.state ={data: [
    		{id: 1, name: 'simon Bailey'},
    		{id: 2, name: 'thomas burl'},
    		{id: 3, name: 'will button'},
    		{id: 4, name: 'ben Blink'},
    		{id: 5, name: 'kent dodds'},
    		{id: 6, name: 'trevor ewen'},
    		{id: 7, name: 'aaron frost'},
    		{id: 8, name: 'joel hooks'},
    		{id: 9, name: 'jafar husein'},
    		{id: 10, name: 'tim kindberg'},
    		{id: 11, name: 'john linquist'},
    		{id: 12, name: 'joe maddalone'},
    		{id: 13, name: 'tyler mcginnis'},
    		{id: 14, name: 'scoptt moss'},
    		{id: 15, name: 'rubert penner'},
    		{id: 16, name: 'keith peters'},
    		{id: 17, name: 'lucas rubelks'},
    		{id: 18, name: 'brett shonnenburg'}
   	 	]}
	   }
	   render(){

	   	let rows = this.state.data.map( person => {
	   		return <PersonRow key={person.id}data={person} />
	   	})

	   	return <table>
	   		<tbody>{rows}</tbody>
	   	</table>
	}    
}

const PersonRow = (props) =>
{
	return <tr>
		<td>{props.data.id}</td>
		<td>{props.data.name}</td>
	</tr>
}

export default App