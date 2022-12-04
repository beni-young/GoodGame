import React, {useContext, useState} from 'react'
import { View, StyleSheet } from 'react-native'
import { Provider as PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import {Context} from "../context/GroupContext"

const GroupPostForm = (props) => {

    const [title, setTitle] = useState(props.initialValues.title);
    const [description, setDescription] = useState(props.initialValues.description);

    return <PaperProvider>
    <Text style={{ fontSize: 24, textAlign: 'center' }}>Group Screen</Text>
    <Text style={styles.label}>Title</Text>
    <Text style={styles.label}>Give your group a name.</Text>
    
    
    <TextInput style={styles.input}  mode="outlined" textColor="blue" value={title} 
    onChangeText={(text) => setTitle(text)}></TextInput>

    <Text style={styles.label}>Description</Text>
    <Text style={styles.label}>Describe who should join and what you'll do.</Text>
    <TextInput style={styles.input} mode="outlined" value={description} 
    onChangeText={(text) => setDescription(text)}></TextInput>
    
    <Text style={styles.label}>Location</Text>
    <TextInput style={styles.input} mode="outlined">Google Search for Location you want your Event. If its individual 
                than its automatically your address. If its Group Event then search where
                you want the location</TextInput>

    <Button style={styles.button} mode="contained"
            onPress={() => 
            {props.onSubmit(title, description);}}>Save Group</Button>
</PaperProvider>
}

GroupPostForm.defaultProps = {
    initialValues: {
        title: "",
        description: ""
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        padding: 10,
        margin: 5
    },
    label: {
        fontSize: 15,
        marginBottom: 3,
        marginLeft: 10
    },
    button: {
        margin: 15,
        padding: 10    
    }
})

export default GroupPostForm;