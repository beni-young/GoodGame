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
        <Text>{groupPost.latitude}</Text>
        <Text>{groupPost.longitude}</Text>
        <Text>{groupPost.gamelist}</Text>
        <Text>{groupPost.gametype}</Text>
    </View>
}

GroupDetailScreen.navigationOptions = (props) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => { props.navigation.navigate("GroupEdit", {id: props.navigation.getParam("id")}) }}>
                <FontAwesome style={styles.pencil} name="pencil" size={40} />
            </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    pencil: {
        marginRight: 25
    }
});

export default GroupDetailScreen;