import React, {useContext} from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import {Context} from "../context/GroupContext"
import { FontAwesome } from '@expo/vector-icons'

const GroupDetailScreen = (props) => {

    const { state } = useContext(Context);

    const groupID = props.navigation.getParam("id");

    const groupPost = state.find((groupPost) => {
        return groupID === groupPost.id;
    })


    return <View>
        <Text style={{ fontSize: 48 }}>GroupDetailScreen</Text>
        <Text>{groupPost.title}</Text>
        <Text>{groupPost.description}</Text>
    </View>
}

GroupDetailScreen.navigationOptions = (props) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => { props.navigation.navigate("GroupEdit") }}>
                <FontAwesome name="pencil" size={20} />
            </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({});

export default GroupDetailScreen;