
import React from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from './reducers/movies';
import ReactDOM from 'react-dom';
import {DebounceInput} from 'react-debounce-input';
// import debounce from 'lodash/debounce';

const Search = ({search, setSearch, setMovies}) => {

    const dispatch = useDispatch();
    
       const handleKey = (event) => {
           if(event.key === 'Enter'){
               dispatch(searchMovies(search));
           }
       }
     
    return (
        <div className='#424242 grey darken-3 '>
            <form className="container search__block">   
                <DebounceInput  
                    minLength={3}
                    debounceTimeout={500}
                    placeholder='Search'
                    type="search" 
                    className="validate search"
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                    onKeyDown={handleKey}
                 />
                {/* <button className='btn'>Search</button>      */}
            </form>
 
        </div>
    );
};

export default Search;