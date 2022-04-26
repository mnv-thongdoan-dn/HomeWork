export default function HttpRequest() {
	// get list user
	const getListUser = async (url) => {
		try {
			let res = await fetch(url, {
					method: "GET"
			});
			let dataUsers = await res.json();
			return dataUsers;
		} catch (error) {
			return error
		}
	}

	// add user
	const addUser = async (url, body) => {
		try {
			let res = await fetch(url, {
			method: 'POST', 
			body: JSON.stringify(body), 
			headers:{
				'Content-Type': 'application/json'
			}
			})
			return res;
		} catch (error) {
			console.log(error);
		}
	}

	// delete user
const deleteUser = async (url, id) => {
  try {
    let res = await fetch(`${url}/${id}`, {method: 'DELETE'})
    // let data = await res.json();
    return res ;
  } catch (error) {
    console.log(error);
  }
}

	return {addUser, getListUser, deleteUser};
}
