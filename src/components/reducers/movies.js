import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

export const getMovies = createAsyncThunk(
    'movies/getMovies',
    async (_, {rejectWithValue}) => {
        try {
            const res = await axios(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            if(res.data.Response !== 'True'){
                throw new Error('Can\'t fetch  data movies')
            }
   
            return res.data.Search


        } catch (error) {
            return rejectWithValue(error.message)
            
        }
    },
    { 
        condition: (_, {getState}) => {
            const {loading} = getState().movies

            if(loading === 'loading'){
                return false
            }
        }
    }
)

export const searchMovies = createAsyncThunk(
    'movies/searchMovies',
    async (search, {rejectWithValue}) => {

        try {
            const res = await axios(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
              if(res.data.Response !== 'True'){
                  throw new Error('Can\'t fetch search data movies')
              }
        
            return res.data.Search


        } catch (error) {
            return rejectWithValue(error.message, 'Catch fetch search data')
            
        }
    }
   
)



const initialState = {
    data: [],
    filter: {
        type: 'all'
    }, 
    error: '',
    status: '',
}


const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.filter = {
                ...state.filter,
                type: action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state, action)=> {
                state.status = 'loading'
                state.err = null  
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.error = action.payload
                state.status = 'error'
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = 'done'
            })
            .addCase(searchMovies.pending, (state, action)=> {
                state.status = 'loading'
                state.err = null  
            })
            .addCase(searchMovies.rejected, (state, action) => {
                state.error = action.payload
                state.status = 'error'
            })
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = 'done'
            })
    }
})

export const {changeFilter} = moviesSlice.actions
export const moviesReducer = moviesSlice.reducer;

// selectors

export const selectedType = (state) => state.movies.filter.type


export const selectMovies = (state) => {
    return state.movies.data.filter(item => item.type !== 'movie')
}

export const selectSeries = (state) => {
    return state.movies.data.filter(item => item.type !== 'series')
}



