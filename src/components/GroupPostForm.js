import React, {useContext, useState} from 'react'
import { View, StyleSheet, KeyboardAvoidingView, SafeAreaView, ScrollView} from 'react-native'
import { Provider as PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import {Context} from "../context/GroupContext";
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';


const GroupPostForm = (props) => {     

    const [title, setTitle] = useState(props.initialValues.title);
    const [description, setDescription] = useState(props.initialValues.description);
    const [googleRegion, setGoogleRegion] = useState({
        latitude: 30.023432002000366, 
        longitude: -90.06559621153748
    }); 
    

    return <SafeAreaView style={{ flex: 1}}>   
    
        <View style={styles.searchContainer}> 
        <Text style={styles.label}>Location</Text>           
        <GooglePlacesAutocomplete       
            placeholder='Set Your Group Location'
            fetchDetails={true}
            onFail={error => console.log(error)}
            onNotFound={() => console.log('no results')}            
            GooglePlacesSearchQuery={{
                rankby: "distance"
            }}
            onPress={(data, details = null) => {            
            // 'details' is provided when fetchDetails = true
            console.log(details.geometry.location.lat, details.geometry.location.lng);           
            setGoogleRegion({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            })
            }}
            query={{ 
                key: 'AIzaSyAQc2g4VdIeTkjNEjUvcMQ1mtYCQHIUhQQ', 
                language: 'en',
                components: "country:us",
                radius: 30000, 
                location: `${googleRegion.latitude}, ${googleRegion.longitude}`
            }}
        />     
        <Text style={styles.label}>Give your group a name.</Text>    
        <TextInput style={styles.input}  mode="outlined" textColor="blue" value={title} 
            onChangeText={(text) => setTitle(text)}></TextInput>
        
        <Text style={styles.label}>Describe who should join and what you'll do.</Text>
        <TextInput style={styles.input} mode="outlined" value={description} 
            onChangeText={(text) => setDescription(text)}></TextInput>

        <Button style={styles.button} mode="contained"
            onPress={() => 
            {props.onSubmit(title, description, googleRegion.latitude, googleRegion.longitude);}}>Save Group</Button> 
    </View>     
</SafeAreaView>
}

GroupPostForm.defaultProps = {
    initialValues: {
        title: "",
        description: "",
        latitude: "",
        longitude: ""
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 15,
        padding: 5,
        margin: 10
    },
    label: {
        fontSize: 15,
        marginBottom: 3,
        marginLeft: 10
    },
    button: {
        margin: 15,
        padding: 10,         
    },
    searchContainer: {
        position: "absolute",
        width: "90%",
        backgroundColor: "white",
        shadowColor: "black", 
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
        padding: 2,
        marginTop: 10,
        marginLeft: 20,
        borderRadius: 8,
    },  
})

export default GroupPostForm;