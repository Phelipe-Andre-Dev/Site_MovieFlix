import React, {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from 'axios'
import Home from './components/pages/Home'
import Cadastro from './components/pages/Cadastro'
import MovieList from './components/pages/MovieList'

import Navbar from './layout/Navbar'
import Input from './components/pages/Input'

const api = axios.create({
  baseURL: 'http://www.omdbapi.com',
  headers: {accept: 'application/json'}
})


function App(){

  const [movies, setMovies] = useState ([])
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {

    const apikey = process.env.REACT_APP_API_KEY

    const { data } = await api.get(`/?s=${searchValue}&apikey=${apikey}`)

    if (data.Search){
      setMovies (data.Search)
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
