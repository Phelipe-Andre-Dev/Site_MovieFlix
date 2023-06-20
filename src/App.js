import React, {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Cadastro from './components/pages/Cadastro'
import MovieList from './components/pages/MovieList'

import Navbar from './layout/Navbar'
import Input from './components/pages/Input'




function App(){

  const [movies, setMovies] = useState ([])
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    
    const apikey = process.env.REACT_APP_API_KEY
    const url =`https://www.omdbapi.com/?s=${searchValue}&apikey=${apikey}`


    const response = await fetch(url)
    const responseJson = await  response.json() 

    if (responseJson.Search){
      setMovies (responseJson.Search)
    }

  }
   

    useEffect (()=> {
    getMovieRequest(searchValue);
  },[searchValue]);
  


  

  return(
 
    <BrowserRouter >
      <Navbar/>
      
      
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

      <Routes>
        <Route path='/cadastro' element={<Cadastro/>}/>
      </Routes>
      
        <div>
        <Input searchValue={searchValue} setSearchValue={setSearchValue}/>
          <MovieList movies={movies} />
          
          
        </div>

    

    </BrowserRouter>
   


    
  )

}
export default App
