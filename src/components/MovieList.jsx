
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from './MovieCard';
import Preloader from './Preloader';


const MovieList = () => {

    const {data, status, error, filter} = useSelector((state)=> state.movies)

    console.log(filter.type);


    if(filter.type === 'movie'){
        return (
            <div className='list'>          
                 {
                    status === 'loading' ? <Preloader/> : data.filter(el => el.Type === 'movie').map(item => (
                        <MovieCard key={item.imdbID}  item={item}/>                   
                    )) 
                } 
            </div>
        );
    }

    if(filter.type === 'series'){
        return (
            <div className='list'>          
                 {
                     status === 'loading' ? <Preloader/> : data.filter(el => el.Type === 'series').map(item => (
                        <MovieCard key={item.imdbID}  item={item}/>                   
                    )) 
                } 
            </div>
        );
    }

    return (
        <div className='list'>          
            {
                 status === 'loading' ? <Preloader/> : data.map(item => (
                    <MovieCard key={item.imdbID}  item={item}/>                   
                )) 
            }  
        </div>
    );
};

export default MovieList;