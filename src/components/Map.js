import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import MapView, {Polyline, Marker} from 'react-native-maps';

const Map = () => {

    const[mapRegion, setMapRegion] = useState ({
        latitude: 30.01947000085054, 
        longitude: -90.06525841636753       
    });

    const[testRegion, setTestRegion] = useState ({
        latitude: 30.020515134607734, 
        longitude: -90.06645451835102       
    });

    const[schoolRegion, setSchoolRegion] = useState ({
        latitude: 30.023432002000366, 
        longitude: -90.06559621153748
    });    

    return <MapView style={styles.map} 
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
         <Marker coordinate={schoolRegion} title={"School!!!"} />
         
    </MapView>
};

const styles = StyleSheet.create({
    map: {
        height: 600
    }
});

export default Map;