import React from 'react'

const SearchTask = ({search,setSearch,tasks}) => {
  return (
    <>
      {tasks.length ? (
        <form className='add-form' onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input value={search} onChange={(e) => setSearch(e.target.value)} style={{ textAlign: "center" }} type="text" placeholder='search task' />
          </div>
        </form>) : null}
      </>
  )
}

export default SearchTask