import React from "react";
import {View, Text, StyleSheet} from "react-native";

const textBubble = (props) => {
    return <View style={styles.thisUserView}>
        <Text>{`${props.message}`}</Text>
    </View>
}

const styles = new StyleSheet.create({
    thisUserView:{
        width: 300,
        margin: 15,
        borderWidth:2,
        borderColor:"grey"

    },
    otherUserView:{
        width: 300,
        margin: 15,
        borderWidth:2,
        borderColor:"grey"
    },
    text:{
        fontSize:20
    }

});

export default textBubble;
