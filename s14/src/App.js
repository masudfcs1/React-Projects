
import React, { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
   const[moviest,setmoviesList]=useState([])

   const fetchMoveApiHandler = () => {
     fetch('https://swapi.dev/api/films').then(res=>{
      return res.json()
     }).then((data)=>{
      const transformmoviestodata=data.results.map(moviedata=>{
        return {
          id: moviedata.episode_id,
          tille: moviedata.title,
          releaseDate: moviedata.release_data,
          openingText : moviedata.opening_crawl,
        }
      })
      setmoviesList(transformmoviestodata)
     })
   }
     
  } 
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={moviest} />
      </section>
    </React.Fragment>
  );
}