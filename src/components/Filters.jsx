
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from './reducers/movies';

const Filters = ({type, setType}) => {

    const dispatch  = useDispatch();


    useEffect(()=> {
        dispatch(changeFilter(type));
    }, [type])
    


    return (
        <form action="#" className='container #424242 grey darken-3 filters'>
            <label>
                <input 
                    className="with-gap" 
                    name="type" 
                    value={'all'} 
                    type="radio" 
                    checked={type === 'all'}
                    onChange={(e) => setType(e.target.value)}  

                />
                <span>All</span>
            </label>
            
           
            <label>
                <input 
                    className="with-gap" 
                    name="type" 
                    value={'movie'} 
                    type="radio" 
                    checked={type === 'movie'}
                    onChange={(e) => setType(e.target.value)}  

                />
                <span>Movie</span>
            </label>
         
          
            <label>
                <input 
                    className="with-gap" 
                    name="type" 
                    value={'series'} 
                    type="radio" 
                    checked={type === 'series'}
                    onChange={(e) => setType(e.target.value)}  
                />
                <span>Series</span>
            </label>
            
        </form>

    );
};

export default Filters;