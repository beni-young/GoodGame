import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const SignupScreen = (props) => {
    return <View>
        <Text style={{ fontSize: 48 }}>SignupScreen</Text>
        <Button title="Go to signin" onPress={() => {props.navigation.navigate("Signin")}} />
        <Button title="Go to main flow" onPress={() => { props.navigation.navigate("mainFlow") }} />
    </View>
}

const styles = StyleSheet.create({});

export default SignupScreen;