// export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
// export const GET_MOVIES = 'GET_MOVIES';
// export const GET_MOVIES_DETAIL = 'GET_MOVIES_DETAIL';
// export const REMOVE_MOVIE_DETAIL = 'REMOVE_MOVIE_DETAIL';

// export function addMovieFavorite(payload) {
//     console.log('action',payload)
//     return { type: ADD_MOVIE_FAVORITE, payload };
// };

// export const getMovies = (title) => {
//     return async (dispatch) => {
//         const res = await axios.get("http://www.omdbapi.com/?apikey=20dac387&s=" + title)
//         dispatch({ type: GET_MOVIES, payload: res.data })
//     };
// };

// export const getMovieDetail = (id) => {
//     return async (dispatch) => {
//         const res = await axios.get("http://www.omdbapi.com/?apikey=20dac387&i=" + id)
//         dispatch({ type: GET_MOVIES_DETAIL, payload: res.data })
//     };
// };

// export const removeMovieFavorite = (id) => {
//     return { type: REMOVE_MOVIE_DETAIL, payload: id };
// };

/// Using Fetch //////////

const API_KEY = "1977a73f";
// http://www.omdbapi.com/?apikey=$1977a73f&i=${id}`   

export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_DETAIL = 'GET_DETAIL';
export const REMOVE_MOVIE_DETAIL = 'REMOVE_MOVIE_DETAIL';





export function addMovieFavorite(payload) {
    return {
        type: ADD_MOVIE_FAVORITE,
        payload
    };
}

export function removeMovieFavorite(payload) {
    return {
        type: REMOVE_MOVIE_DETAIL,
        payload
    }
}

export function getMovies(titule) {
    return function (dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${titule}`)
            .then(response => response.json())
            .then(movie => {
                dispatch({
                    type: GET_MOVIES,
                    payload: movie
                });
            });
    }
}


export function getMovieDetail(id) {
    return function (dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(r => r.json())
            .then(movie => {
                dispatch({
                    type: GET_MOVIES_DETAIL,
                    payload: movie
                });
            });
    }
}