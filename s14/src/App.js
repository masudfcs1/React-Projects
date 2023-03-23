
import React, { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
   const[movies,setmoviesList]=useState([])
   const[isLoading, setLoading]=useState(false)

 async  function fetchMoveApiHandler() {
    setLoading(true) 
  const res=await fetch('https://swapi.dev/api/films')
      const data= await res.json()
          
      const transformmoviestodata=data.results.map(moviedata=>{
        return {
          id: moviedata.episode_id,
          releaseDate: moviedata.release_data,
          title: moviedata.title,
          openingText : moviedata.opening_crawl,
        }
      })
      setmoviesList(transformmoviestodata)
       setLoading(false)
   }
     
  
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoveApiHandler}>Fetch Movies</button>
      </section>
      <section>
     {!isLoading &&  movies.length>0 && <MoviesList movies={movies} />}
     {!isLoading && movies.length==0 && <p>No Movies Details</p>}
     {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}
export default App