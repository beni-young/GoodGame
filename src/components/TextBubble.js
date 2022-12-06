import React from "react";
import {View, Text, StyleSheet} from "react-native";


const textBubble = (props) => {
    if(props.style === "thisUser"){
        return <View>
            <Text style={styles.thisUserName}>{`${props.user}`}</Text>
            <View >
                <Text style={styles.thisUserView}>{`${props.message}`}</Text>
            </View>
        </View>
    }
    else{
        return <View>
            <Text style={styles.otherUserName}>{`${props.user}`}</Text>
            <View >
                <Text style={styles.otherUserView}>{`${props.message}`}</Text>
            </View>
        </View>
    }
    


}

const styles = new StyleSheet.create({
    thisUserView:{
        fontSize:14,
        marginHorizontal: 15,
        marginBottom:4,
        borderWidth:1,
        borderColor:"#777",
        alignSelf:"flex-start", 
        borderRadius: 10,
        paddingHorizontal: 7,
        paddingVertical: 4,
        backgroundColor: "#4474FF",
        color: "white"
    },
    otherUserView:{
        fontSize:14,
        marginHorizontal: 15,
        marginBottom:8,
        borderWidth:1,
        borderColor:"#777",
        backgroundColor:"#FFFFFF",
        alignSelf:"flex-end",
        borderRadius: 10,
        paddingHorizontal: 7,
        paddingVertical: 4
    },
    text:{
        fontSize:10
    },
    thisUserName:{
        marginHorizontal: 15,
        color:'#777777',
        fontSize:14,
        marginTop: 4
    },
    otherUserName:{
        marginHorizontal: 15,
        color:'#777777',
        fontSize:14,
        alignSelf:"flex-end",
        marginTop: 4
    }

});

export default textBubble;
