import React, {useEffect, useState} from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/Map'
import { Text } from 'react-native-elements'
import { requestForgroundPermissionAsync } from 'expo-location';

const MapScreen = () => {
    return <SafeAreaView>
        <Text h3>Home</Text>
        <Map />
    </SafeAreaView>
}

const styles = StyleSheet.create({

});

export default MapScreen;