import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setmoviesList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, seterror] = useState(null);

  async function fetchMoveApiHandler() {
    setLoading(true);
    seterror(null)



    try{
         const res = await fetch("https://swapi.dev/api/films");
      if(!res.ok){
        throw new Error('Something Went Wrong!')
      }
  
      const data = await res.json();

      const transformmoviestodata = data.results.map((moviedata) => {
        return {
          id: moviedata.episode_id,
          releaseDate: moviedata.release_data,
          title: moviedata.title,
          openingText: moviedata.opening_crawl,
        };
      });

      setmoviesList(transformmoviestodata);
    //  setLoading(false);
    }
    catch(error){
      seterror(error.message)
     
    }
     setLoading(false);
  }

  let content=<p>Found No Movies</p>

  if(movies.length>0){
    content= <MoviesList movies={movies}/>
  }

  if(error){
    content=<p>{error}</p>
  }

  if(isLoading){
    content=<p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoveApiHandler}>Fetch Movies</button>
      </section>
      <section>
       {content}
      </section>
    </React.Fragment>
  );
}
export default App;
