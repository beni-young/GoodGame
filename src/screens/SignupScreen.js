import React, {useState, useContext, useEffect} from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { NavigationEvents } from 'react-navigation'
import {Context as AuthContext} from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = (props) => {
    const {state, signup, clearErrorMessage, tryLocalSignin} = useContext(AuthContext);  
    
    useEffect(() => {
        tryLocalSignin();
    }, [])

    console.log(state);

    return <View style={styles.container}>
        <NavigationEvents
            onWillFocus={() => {clearErrorMessage()}}
        />
        <AuthForm
            headerText="Sign up for Good Game"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={({email, password}) => signup({email, password})}
        />
        <NavLink
            routeName="Signin"
            text="Already have an account? Sign in!"
        />

    </View>
}


SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    errorMesage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15
    },
    container: {        
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
    link: {
        color: 'blue'
    },

});

export default SignupScreen;