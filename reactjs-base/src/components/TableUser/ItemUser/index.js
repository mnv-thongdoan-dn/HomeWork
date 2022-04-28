import React, {Component} from 'react'

class Item extends Component{

	render(){
		const {data, index, deleteUser} = this.props;
		return(
			<tr key={data.id}>
				<td>{index + 1}</td>
				<td>{data.email}</td>
				<td>{data.password}</td>
				<td>{data.gender}</td>
				<td>{data.country}</td>
				<td>{data.info}</td>
				<td><button onClick={() => deleteUser(data.id)}>DELETE</button></td>
			</tr>
		)
	}
}

export default Item;
