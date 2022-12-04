import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Context} from "../context/GroupContext"
import GroupPostForm from '../components/GroupPostForm'

const GroupEditScreen = (props) => {

    const groupID = props.navigation.getParam("id");

    const { state, editGroup } = useContext(Context);

    const groupPost = state.find((currentPost) => {
        return currentPost.id === groupID
        }
    )

    return <GroupPostForm 
            onSubmit={(title, description) => { editGroup(groupID, title, description, () => {props.navigation.pop()})}}
                initialValues={ {title: groupPost.title, description: groupPost.description}}
              />
}

const styles = StyleSheet.create({});

export default GroupEditScreen;