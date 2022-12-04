import React, {useState, useContext} from 'react';
import {View,Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Context} from "../context/GroupContext";
import GroupDetailScreen from '../screens/GroupDetailScreen';

const Map = (props) => {   

    const {state} = useContext(Context);

    const[mapRegion, setMapRegion] = useState ({
        latitude: 30.01947000085054, 
        longitude: -90.06525841636753       
    });

    const[testRegion, setTestRegion] = useState ({
        latitude: 30.020515134607734, 
        longitude: -90.06645451835102       
    });  

    const [googleRegion, setGoogleRegion] = useState({
        latitude: 30.023432002000366, 
        longitude: -90.06559621153748
    });    

    return <View>   
        <MapView style={styles.map} 
            initialRegion= {{
                latitude: 30.0273,
                longitude: -90.0680,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}   
    >       
        <Marker draggable coordinate={{latitude: 30.01947000085054, longitude: -90.06525841636753}}
            title={"Hello!!!"}            
         />
        
         <Marker coordinate={testRegion} title={"Test!!!"} />         
         <Marker coordinate={{latitude: googleRegion.latitude, longitude: googleRegion.longitude}} title={"Google"} />
          
                   
         
    </MapView>
    <View style={styles.searchContainer}>
    <GooglePlacesAutocomplete       
        placeholder='Set Your Group Location'
        fetchDetails={true}
        GooglePlacesSearchQuery={{
            rankby: "distance"
        }}
        onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);       
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
    </View>
    </View>    
};

const styles = StyleSheet.create({
    map: {
        height: 600
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
        padding: 8,
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 8,
    },   
});

export default Map;