import types from './types';
import axios from 'axios';

// export const signIn = () => ({type: types.SIGN_IN});

export const signIn = credentials => async dispatch => {
   try {
       const response = await axios.post('http://api.reactprototypes.com/signin', credentials);
       console.log('Sign In Resp: ', response)
        localStorage.setItem('token', response.data.token)

        dispatch({
            type: types.SIGN_IN
        })
   } catch(error){
       dispatch({
           type: types.AUTH_ERROR,
           error: 'Invalid email and or password'
       })
   }

}

// export const signOut = () => ({type: types.SIGN_OUT});

export const signOut = () => {
    localStorage.removeItem('token')
    return {
        type: types.SIGN_OUT
    }
}

export const signUp = (credentials) => async dispatch => {
    try {
        const response = await axios.post('http://api.reactprototypes.com/signup', credentials);
        localStorage.setItem('token', response.data.token)
        dispatch({
            type: types.SIGN_UP
        })
    } catch (error){
        dispatch({
            type: types.AUTH_ERROR,
            error: 'Error creating account'
        })
    }
}

export const getMovieQuote = () => async dispatch => {
    const axiosConfig = {
        headers: {  // <-- we have to add a header to our request with a property of authorization that has the token
            authorization: localStorage.getItem('token')
        }
    };

    const response = await axios.get('http://api.reactprototypes.com', axiosConfig);

    dispatch({
        type: types.GET_MOVIE_QUOTE,
        quote: response.data.message
    })

}