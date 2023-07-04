import React from 'react'

const SearchTask = ({search,setSearch}) => {
  return (
      <form className='add-form' onSubmit={(e)=>e.preventDefault()}>
          <div className="form-control">
              <input value={search} onChange={(e)=>setSearch(e.target.value)} style={{textAlign:"center"}} type="text" placeholder='search task' />
          </div>
    </form>
  )
}

export default SearchTask