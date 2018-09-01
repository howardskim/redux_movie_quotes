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
    return {
        type: types.SIGN_OUT
    }
}

export const signUp = (credentials) => async dispatch => {
    const response = await axios.post('http://api.reactprototypes.com/signup', credentials);
    console.log('sign up response: ', response);
}