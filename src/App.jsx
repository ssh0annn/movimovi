import React, { useState } from 'react'
import Search from './assets/components/Search'

const App = () => {
    const [searchTerm,setSearch] = useState("");

  return (

   <main className='pattern'>

    <div className='wrapper'>

     <header>
        <img src='./hero-img.png' alt='Hero Banner'></img>
         <h1>Find <span className='text-gradient'>Movies</span> You will Enjoy Without The Hassle</h1>
     </header>

     <Search searchTerm = {searchTerm} setSearch = {setSearch}/>
     <h1 className='text-white'>{searchTerm}</h1>
   </div>
   </main>
  )
}

export default App