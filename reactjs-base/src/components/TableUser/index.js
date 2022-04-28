import React, {Component} from 'react';
import PopupConfirm from './Confirm';
import ItemUSer from './ItemUser';
class Table extends Component {
	constructor(props){
		super(props)
		this.state = {
			onPopupConfirm: false,
			idUser: '',
		}
	}

	handleOk = () => {
		const newData = this.props.data.filter((item) => {
			return item.id !== this.state.idUser;
		})
		this.props.upData(newData)
	}

	handleCancel = () => {
		this.setState({onPopupConfirm: false})
	}

	deleteUser = (id) => {
		this.setState({onPopupConfirm: true, idUser: id})
	}

  render(){
		const {data} = this.props;
    return (
			<>
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
							data.map((item, index) => {
								return (
									<ItemUSer  
									deleteUser={this.deleteUser} 
									data={item}
									index={index}
									/>
								)
							})
						}
					</tbody>
				</table>
				{
					this.state.onPopupConfirm && 
					<PopupConfirm
					title={"Confirm Item"}
					content={"Do you want to delete this item?"}
					handleOk={this.handleOk}
					handleCancel={this.handleCancel}
					/>
				}
			</>
    );
  }
}

export default Table;
