import { useState } from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Main from "./components/Main";
import Search from "./components/Search";
import Filters from "./components/Filters";
import './styles.scss';


import throttle from 'lodash/throttle';



function App() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState('all');




  return (
    <div className="App #424242 grey darken-3">


      <Header/>
      <Search search={search} setSearch={setSearch} setMovies={setMovies}/>
      <Filters type={type} setType={setType}/>
      <Main movies={movies} setMovies={setMovies} search={search}/>
      {/* <button className='btn' onClick={()=> dispatch(searchMoviesPage(search))}>Next Page</button> */}
      <Footer/>
     
    </div>
  );
}

export default App;
