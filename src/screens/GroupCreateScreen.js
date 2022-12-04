import React, {useContext, useState} from 'react'
import { View, StyleSheet } from 'react-native'
import { Provider as PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import {Context} from "../context/GroupContext"
import GroupPostForm from '../components/GroupPostForm';

const GroupCreateScreen = (props) => {    

    const {addGroup} = useContext(Context);
    return <GroupPostForm onSubmit={(title, description, latitude, longitude, gamelist, gametype) => {
        addGroup(title, description, latitude, longitude, gamelist, gametype, () =>  {props.navigation.pop()})
    }} />
   
}

const styles = StyleSheet.create({
    
});

export default GroupCreateScreen;

