import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const GroupListScreen = (props) => {
    return <View>
        <Text style={{ fontSize: 48 }}>GroupListScreen</Text>
        <Button title="Go to Group Detail"
        onPress={() => {props.navigation.navigate("GroupDetail")}} />
        <Button title="Create Group"
        onPress={() => {props.navigation.navigate("GroupCreate")}} />
    </View>
}

const styles = StyleSheet.create({});

export default GroupListScreen;