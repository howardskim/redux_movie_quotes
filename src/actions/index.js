import types from './types';

export const signIn = () => ({type: types.SIGN_IN});

// export const signOut = () => ({type: types.SIGN_OUT});

export const signOut = () => {
    return {
        type: types.SIGN_OUT
    }
}