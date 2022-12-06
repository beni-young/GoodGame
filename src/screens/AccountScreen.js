import React, {useContext} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {Button} from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext} from '../context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);

    return <SafeAreaView>
        <Text style={styles.title}>USERNAME</Text>
        
        <FontAwesome name="user-circle-o" size={175} style={styles.placeHoldericon}/>

        <View style={{flexDirection:"row"}}>
            <Text style={styles.bio}>Bio:</Text>
            <Feather name="edit" size={25} style={styles.editIcon}/>
        </View>

        <View style={{borderWidth:5, borderColor:"black", margin: 25, height: 275}}>
            <Text style={{margin: 5}}>Example Bio here.... Hi, I like games.</Text>
        </View>

        <Spacer>
            <Button style={{position: "absolute"}} title="Sign Out" onPress={() => {signout()}} />
        </Spacer>

    </SafeAreaView>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 48,
        alignSelf: "center",
        marginTop: 25,
        fontWeight: "bold"
    },
    placeHoldericon: {
        alignSelf:"center",
        marginTop: 25
    },
    editIcon: { 
        height: 35, 
        width: 35, 
        alignSelf:"center", 
        marginLeft:200
    },
    bio: {
        fontSize: 36,
        fontWeight: "bold",
        marginLeft: 35,
    }
});

export default AccountScreen;
