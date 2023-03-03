import React,{useState,useEffect} from 'react';
import MovieBox from './components/MovieBox';
import './App.css';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=3b359ba49bd6af5cddb0dc11162cffe0"; 

function App() {
  const [movies, setMovies]=useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])
  return (
    <div className='container'>
      <div className="grid">
      {movies.map((movieReq)=>
          <MovieBox key={movieReq.id} {...movieReq}/>)}
      </div>
    </div>
  );
}

export default App;
