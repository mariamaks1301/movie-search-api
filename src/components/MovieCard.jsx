import React from 'react';

const MovieCard = ({item}) => {
    return (
        <>
             <div className='card'>
                 <img className='card__img' src={item.Poster} alt={item.Title} />

                 <div className='card__info'>
                     <h2 className='card__title'>{item.Title}</h2>
                     <div className='card__row'>
                         <p className='card__desc'>Year: {item.Year}</p>
                         <p className='card__desc'>Type: {item.Type}</p>
                     </div>
                 </div>
             </div>
            
        </>
    );
};

export default MovieCard;