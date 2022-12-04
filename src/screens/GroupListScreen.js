import React, {useContext} from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import { Provider as PaperProvider, Button } from 'react-native-paper';
import {Context} from "../context/GroupContext";
import {Feather} from '@expo/vector-icons'


const GroupListScreen = (props) => {

    const {state, addGroup, deleteGroup} = useContext(Context);

    return <View>              
        <Button style={styles.button} mode="contained"
        onPress={() => {props.navigation.navigate("GroupCreate")}}>
            Create Group </Button>
        <FlatList
            data={state}
            keyExtractor={(groupPost) => {return groupPost.title}}
            renderItem={ ({item}) => {
                return <TouchableOpacity onPress={() => {props.navigation.navigate("GroupDetail", {id: item.id})}}>
                            <View style={styles.row}>                     
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity onPress={() => {deleteGroup(item.id)} }     >
                                <Feather name="trash" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                
            } }
        />
    </View>
}

const styles = StyleSheet.create({
    row : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    title: {
        fontSize: 18,
        textAlign: 'center'
    },
    icon: {
        fontSize: 24
    },
    button: {
        margin: 5
    }
});

export default GroupListScreen;