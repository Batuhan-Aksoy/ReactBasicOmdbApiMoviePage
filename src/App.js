import './App.css';
import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import {useSelector,useDispatch} from 'react-redux'
import { modeSet, setLanguage } from './redux/states/page';
import {routes} from './routes'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

function App() {

  const [movies,setMovie] = useState([]);
  const [searchValue,setSearchValue] = useState('');

  const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=2d1a237c";
 
  const searchMovies = async (SearchValue) => {
      const response = await fetch(`${apiUrl}&s=${SearchValue}`)
      const moviesData = await response.json();
      if(moviesData.Search != undefined)
        setMovie(moviesData.Search);
      
  }

  useEffect(()=>{
    searchMovies('Superman');
  },[])



  const languages = ["tr","en","sp"];
  const darkMode = useSelector((state) => state.page.darkMode);
  const language = useSelector((state) => state.page.language);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();



  return (
    <Router>
    <div className={darkMode ? 'darkMode' : 'lightMode'}>
        
          
        <nav>
          <NavLink to="/" className="navLink">
            Anasayfa
          </NavLink>
          <NavLink to="/about" className="navLink" >
            About
          </NavLink>
          <NavLink to="/Profile">
            Profile
          </NavLink>
        </nav>

        <div className='header'>
            <div>
              <input type='text' className='searchInput' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" className='searchSvg' onClick={()=> searchMovies(searchValue)}>
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
              </svg>
            </div>
            <div className='pageSection'>
              <span>Sayfa Renk Modu : {darkMode ? 'Dark' : 'Light'}</span><br/>
              <button onClick={() => dispatch(modeSet())}>{darkMode ? 'lighMode \' a geç' : 'Dark Moda a geç'}</button><br/>
              <span>Seçili Dil :{language}</span><br/>
              <span>Dil Seç : </span>
              {
                languages.map((lang) => (
                  <button className={lang === language ? 'activeLang' : ''} onClick={() => dispatch(setLanguage(lang))} key={lang} >{lang}</button>
                  
                ))
              }
            </div>
        </div>
        <Routes>
          {
            routes.map((route) => (
              <Route  path={route.path} Component={
                (route.auth && !user) ? route.redirect : route.component}
                />
              ))
          }
        </Routes>
        <div className='container'>
          {
            movies.map((movie) => (

              <Movie movie= {movie} />

            ))
          }
          
        </div>
      </div>
    </Router>
  );
}

export default App;
