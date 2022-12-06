import React, {useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { View, StyleSheet } from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return <>
        <Spacer>
            <Text h2 style={styles.header}>{headerText}</Text>
        </Spacer>
        <Input
            autoCapitalize="none"
            autoCorrect={false}            
            label="Email"
            value={email}
            onChangeText={(newEmail) => {setEmail(newEmail)}}
            style={styles.inputStyle}            
        />
        <Spacer />
        <Input 
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            label="Password"
            value={password}            
            onChangeText={(newPassword) => { setPassword(newPassword) }}
            style={styles.inputStyle}
        />
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        <Spacer>
            <TouchableOpacity
                onPress={() => {onSubmit({email,password})}}
            >
                <Text style={styles.submitButton}>{`${submitButtonText}`}</Text>
            </TouchableOpacity>     
        </Spacer>      
    </>
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize : 16,
        color: 'red',
        textAlign: 'center',
        marginBottom:5
    },
    header:{
        marginTop:50, 
        alignSelf:'center'
    },
    inputStyle:{
        backgroundColor:'white',
        paddingLeft:10,
        marginTop:6
    },submitButton:{
        backgroundColor:"#4474FF",
        color:"white",
        alignSelf:"center",
        textAlign:"center",
        padding:20,
        width:200,
        fontSize:18,
        fontWeight: 'Bold',
        borderRadius:25
    }
});

export default AuthForm;