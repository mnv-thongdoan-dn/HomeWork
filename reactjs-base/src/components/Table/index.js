import React, {Component} from 'react';

class Table extends Component {
  constructor(props){
    super(props)
  }

  render(){
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
					<tr>
						<td>1</td>
						<td>thong@gmail.com</td>
						<td>123123</td>
						<td>male</td>
						<td>Viet Nam</td>
						<td>k34/36</td>
						<td><button>DELETE</button></td>
					</tr>
				</tbody>
			</table>
    );
  }
}

export default Table;
