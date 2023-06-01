
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import MovieList from './MovieList';
import { getMovies, searchMovies, searchMoviesPage } from './reducers/movies';
import throttle from 'lodash/throttle';



const Main = ({movies, setMovies, search}) => {
  
    const dispatch = useDispatch();

    useEffect(()=> { 
        if(movies.length === 0){
            dispatch(getMovies())
        }
    }, [])

    useEffect(()=> { 

            dispatch(searchMovies(search))

    }, [search])


    return (
        <div className='main #424242 grey darken-3'>
            <div className="content container">
                 <MovieList movies={movies} setMovies={setMovies}/> 
                 {/* <button className='btn' onClick={()=> dispatch(searchMoviesPage())}>Next Page</button> */}
            </div>
        </div>
    );
};

export default Main;