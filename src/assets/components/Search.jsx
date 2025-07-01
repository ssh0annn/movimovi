import React from 'react'

const Search = ({searchTerm,setSearch}) => {
  return (
    <div className='search'>
        <div>
            <img src='search.svg'></img>
            <input
                type='text'
                placeholder='search thoudands of movies'
                value={searchTerm}
                onChange={(event)=> setSearch(event.target.value)}
            >
                
            </input>
        </div>
    </div>
  )
}

export default Search