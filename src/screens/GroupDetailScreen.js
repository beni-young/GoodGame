import React, {useContext} from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import {Context} from "../context/GroupContext"
import { FontAwesome } from '@expo/vector-icons'
// example banner taken from: https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/c3bedc075378d34386e0227463938244.png

const GroupDetailScreen = (props) => {

    const { state } = useContext(Context);

    const groupID = props.navigation.getParam("id");

    const groupPost = state.find((groupPost) => {
        return groupID === groupPost.id;
    })


    return <View>
        <View style={styles.titleView}>
            <Text style={styles.titleText}>{groupPost.title}</Text>
        </View>

        <Image source={require("../../assets/group-banner.png")} style={{height: 200, width:500}}/>

        <View style={styles.bodyView}>

            
            <Text style={styles.bodyHeader}>GROUP DESCRIPTION</Text>
            <Text style={styles.bodyText}>{groupPost.description}</Text>

            <Text style={styles.bodyHeader}>GAMES</Text>
            <Text style={styles.bodyText}>{groupPost.gamelist}</Text>

            <Text style={styles.bodyHeader}>PLATORMS</Text>
            <Text style={styles.bodyText}>{groupPost.gametype}</Text>

            <Text style={styles.bodyHeader}>LOCATION</Text>
            <Text style={styles.bodyText}>
            Longitude: {groupPost.longitude}{'\n'}Latitude: {groupPost.latitude}
            </Text>


        </View>

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
        marginRight: 25,
    },titleView:{
        alignItems: "center",
        backgroundColor:"#333333",
        height:50,
        justifyContent: "center"
    },titleText:{
        fontSize:25,
        color:"#999999"
    },bodyView:{
        backgroundColor: "white",
        height: 500
    },bodyText:{
        fontSize: 14,
        marginHorizontal: 10,
        marginBottom: 8,
        borderBottomWidth: 3,
        borderBottomColor:"#777777"

    },bodyHeader:{
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 5,
        marginHorizontal:10,
        color:'#777777'
    }
});

export default GroupDetailScreen;