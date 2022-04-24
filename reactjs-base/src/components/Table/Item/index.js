import React, {Component} from 'react'

class Item extends Component{

	render(){
		const {data, deleteUser} = this.props;
		return(
			<>
				{
					data && data.map((item, index) => {
						return (
							<tr key={item.id}>
								<td>{index + 1}</td>
								<td>{item.email}</td>
								<td>{item.password}</td>
								<td>{item.gender}</td>
								<td>{item.country}</td>
								<td>{item.info}</td>
								<td><button onClick={() => deleteUser(item.id)}>DELETE</button></td>
							</tr>
						)
					})
				}
			</>
		)
	}
}

export default Item;
