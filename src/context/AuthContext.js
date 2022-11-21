import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import googleApi from "../api/googlemaps";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signup':
            return {errorMessage: '', token: action.payload}
        case 'signin':
            return {errorMessage: '', token: action.payload}
        case 'signout':
            return {token: null, errorMessage: ''}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        default: state;
    }
}

const signup = (dispatch) => {
    return async ({email, password}) => {
        //make Express api request to sign up with that email and password.
        //If we sign up, modify our state and say that we are authenticated
        //If signing up fails, we need to express an error message.

        try {
            const response = await googleApi.post('/signup', {email, password});
            console.log(response.data);
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signup', payload: response.data.token});

            //now we want to navigate to the 'main flow'
            navigate('Map');
        } catch(err) {
            dispatch({type: 'add_error', payload: 'Something went wrong with sign up'});
        }
    }
}

const signin = (dispatch) => {
    return async ({ email, password }) => {
        //make Express api request to sign in with that email and password.
        //If we sign in, modify our state and say that we are authenticated
        //If signing up fails, we need to express an error message.
        try {
            const response = await googleApi.post('/signin', {email, password});
            await AsyncStorage.setItem('token', response.data.toString());
            dispatch({type: 'signin', payload: response.data.token});

            //Now we want to navigate to the main flow.
            navigate('Map');            
        }
        catch(err){
            dispatch({type: 'add_error', payload: 'Something went wrong with sign in'});
        }
    }
}

const signout = (dispatch) => {
    return async () => {
        //Somehow sign out!
        await AsyncStorage.removeItem('token');
        dispatch({type: 'signout'});        
        navigate('loginFlow');
    }
}

const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch({ type: 'clear_error_message'})
    }
}

const tryLocalSignin = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            dispatch({type: 'signin', payload: token});
            navigate('Map');
        }
        else {
            navigate('loginFlow');
        }
    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup, clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage: ''}
);