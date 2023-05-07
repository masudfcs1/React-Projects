import NavBar from "../components/NavBar";

function App({ Component, pageprops }) {
    return (    
      <>
      <header>
        <NavBar/>
      </header>
        <Component {...pageprops}/>
      </>
    );
  }
export default App