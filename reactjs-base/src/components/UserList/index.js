import React from 'react';
import Pagination from '../Pagination'

const Table = ({dataUsers, getIdUser, setCurrentPage}) => {

  const {page, total_pages, data} = dataUsers;

  return (
    <>
      <table className='table-user'>
        <thead>
          <tr>
            <th>Index:</th>
            <th>Email:</th>
            <th>First Name:</th>
            <th>Last Name:</th>
            <th>Avatar:</th>
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
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td><img alt={item.avatar} src={item.avatar}/></td>
                  <td><button onClick={() => getIdUser(item.id)}>DELETE</button></td>
                </tr>
              )
            }) 
          }
        </tbody>
      </table>
      <Pagination 
      setCurrentPage={setCurrentPage} 
      totalPages={total_pages} 
      page={page}
      />
    </>
  );
}

export default Table;
