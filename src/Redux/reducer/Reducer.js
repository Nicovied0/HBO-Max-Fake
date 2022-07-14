import {
    ADD_MOVIE_FAVORITE,
    GET_MOVIES,
    GET_MOVIES_DETAIL,
    REMOVE_MOVIE_DETAIL,
} from '../action/Actions';

const initialState = {
    moviesFavourities: [],
    moviesLoaded: [],
    moviesDeatail: {}
}

function rootReducer(state = initialState, action) {
    if (action.type === ADD_MOVIE_FAVORITE) {
        return {
            ...state,
            moviesFavourities: [...state.moviesFavourities.concat(action.payload)]
        }
    }
    
    if (action.type === GET_MOVIES) {
        return {
            ...state,
            moviesLoaded: [...state.payload.Search]
        }
    }

    if(action.type === GET_MOVIES_DETAIL ){
        return{
            ...state,
            moviesDeatail: action.payload
        }
    }

    if(action.type ===REMOVE_MOVIE_DETAIL){
        return{
            ...state,
            moviesFavourities:  state.moviesFavourities.filter( movie =>{
                movie.id !== action.payload
            })
        }
    }
}







export default rootReducer;