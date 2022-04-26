import React, { useState ,useEffect } from 'react'

const Pagination = ({totalPages, page, setCurrentPage}) => {

  const [firstArr, setFirstArr] = useState([]);
  const [lastArr, setlastArr] = useState([]);

  useEffect(() => {
    const newArr = [...Array(totalPages)].map((_, i) => i + 1);
    if(totalPages - page >= 3){
      setFirstArr(newArr.slice(page -1, page + 2));
      setlastArr(newArr.slice(totalPages - 1));
    }else{
      setFirstArr(newArr.slice(totalPages - 3, totalPages));
      setlastArr([]);
    }
  }, [totalPages, page])

  const isActive = (index) => {
    if(index === page) return "active";
    return ;
  }

  const prev = () => {
    const newPage = Math.max(page - 1, 1);
    console.log( "prev",newPage)
    setCurrentPage(newPage)
  }

  const next = () => {
    const newPage = Math.min(page + 1, totalPages);
    console.log("next", newPage)
    setCurrentPage(newPage)
  }

  const jump = (num) => {
    console.log("num", num)
    setCurrentPage(num)
  }

  return (
    <div className='pagination'>
      <button onClick={prev}>&laquo;</button>
      {
        firstArr.map((num, index) => {
          return (
            <button 
            key={index}
            className={`${isActive(num)}`}
            onClick={() => jump(num)}
            >
              {num}
            </button>
          )
        })
      }
      <button>...</button>
      {
        lastArr.map((num, index) => {
          return (
            <button 
            key={index}
            className={`${isActive(num)}`}
            onClick={() => jump(num)}
            >
              {num}
            </button>
          )
        })
      }
      <button onClick={next}>&raquo;</button>
    </div>
  )
}

export default Pagination;
