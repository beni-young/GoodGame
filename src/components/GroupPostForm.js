import React, {useContext, useState} from 'react'
import { View, StyleSheet, ScrollView, LogBox} from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper';
import {Context} from "../context/GroupContext";
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import { MultipleSelectList } from 'react-native-dropdown-select-list'
LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);

const GroupPostForm = (props) => {     

    const [gametype, setGameType] = useState(props.initialValues.gametype);

    const data = [
        {key: 1, value: ' TableTop'},
        {key: 2, value: ' First Person Shooter'},
        {key: 3, value: ' MMORPG'},
        {key: 4, value: ' Casual'},
        {key: 5, value: ' Playstation'},
        {key: 6, value: ' Xbox'},
        {key: 7, value: ' Switch'},
        {key: 8, value: ' PC'},
        {key: 9, value: ' Sports'},
    ]

    const [title, setTitle] = useState(props.initialValues.title);
    const [description, setDescription] = useState(props.initialValues.description);
    const [gamelist, setGameList] = useState(props.initialValues.gamelist);
    const [googleRegion, setGoogleRegion] = useState(
        props.initialValues.latitude, 
        props.initialValues.longitude        
    ); 
    

    return <View style={styles.searchContainer} > 
        <ScrollView keyboardShouldPersistTaps='always'> 
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

        <Text style={styles.label}>Enter a list of games.</Text>
        <TextInput style={styles.input} mode="outlined" value={gamelist} 
            onChangeText={(text) => setGameList(text)}></TextInput>
        
        <Text style={styles.label}>Select the type of group games.</Text>
        <MultipleSelectList
            boxStyles={styles.multiselect}
            setSelected={(val) => setGameType(val)}
            data={data}
            save="value"            
            label="Game Types" 
            defaultOption={data.map((type) => {
                if (props.initialValues.gametype === type.value) {
                    {{type.key, type.value}}
                }
            })}       
        />
        
        <Button style={styles.button} mode="contained"
            onPress={() => 
            {props.onSubmit(title, description, googleRegion.latitude, googleRegion.longitude, gamelist, gametype );}}>Save Group</Button> 
    </ScrollView>
    </View>   

}

GroupPostForm.defaultProps = {
    initialValues: {
        title: "",
        description: "",
        latitude: 30.023432002000366,
        longitude: -90.06559621153748,
        gamelist: "",
        gametype: []
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 15,
        paddingBottom: 5,
        margin: 10
    },
    label: {
        fontSize: 14,        
        marginLeft: 10
    },
    button: {
        margin: 15,
        padding: 10,         
    },
    searchContainer: {
        flex: 1,        
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
        borderWidth: 1,
        borderColor: 'green'
    }, 
    multiselect: {
        margin: 15
    }
})

export default GroupPostForm;