import React, {Component} from 'react';

class Table extends Component {
  constructor(props){
    super(props)
  }

	deleteItem(id) {
		this.props.deleteUser(id)
	}

  render(){
		const {data} = this.props;
    return (
			<table className='table-user'>
				<thead>
					<tr>
						<th>Index:</th>
						<th>Email:</th>
						<th>Password:</th>
						<th>Gender:</th>
						<th>Country:</th>
						<th>Information:</th>
						<th>Action:</th>
					</tr>
				</thead>
				<tbody>
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
									<td><button onClick={() => this.deleteItem(item.id)}>DELETE</button></td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
    );
  }
}

export default Table;
