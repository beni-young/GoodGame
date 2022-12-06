import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextBubble from '../components/TextBubble';
import {Ionicons} from '@expo/vector-icons';

// Need a FlatList that displays the chat
// The actual chat needs to be kept track of using state, and needs to come from the server
// Chat can be an array of objects, where each object has a message and username
// If the username matches the user name of the person using the app, the style should reflect that
// Since there is a network aspect to the chat, we'll have to use await and include error handling
// The name of the group should be inherited as a prop

const ChatScreen = () => {

    //Array built to test the FlatList
    //In actual version, this should be inherited from props and kept track of in state
    const testChat = [
        {user: "Vincent",   
        message: "Y'all see the trailer that just dropped",
        style: "otherUser"},
        {user: "John",
        message: "Yeah dude, can't wait to play the new DLC 💪😎",
        style: "otherUser"},
        {user: "Ben",
        message: "When are we getting some matches going?",
        style: "otherUser"}
    ]

    // State declaration that will be used to keep track of chat
    // Parameter of use state should be an object where elements have the keys "message" with a value of the message string and "username", with the username of the sender
    const [chat, setChat] = useState(testChat);
    const [inputString, setInputString] = useState("");

    //Using this to test TextInput

    // Currently structured in 3 seperate parts: the header (including the name of the group), the actual chat, and a textbox that can be used to enter messages 
    // - For the header, we'll need to have use the name of the group associated with the chat
    // - For the FlatList, I have to figure out how to get a unique key to implemenet the keyExtractor
    // - For the TextInput, we need the chat to be updated and we need to implement error handling and await, since this would be asynchronous
    return <SafeAreaView>

            <View style={styles.header}>
                <Text style={styles.groupName}>
                    The Group's name
                </Text>
            </View>

            <View style={styles.messageArea}>    
                <FlatList 
                    data = {chat}
                    renderItem={({item})=>{
                        return <TextBubble message={item.message} user={item.user} style={item.style}/>;
                    }}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput 
                    value={inputString}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(newText)=>{setInputString(newText)}}
                    onSubmitEditing={ ()=>{
                        const newChat = [...chat,{user: "You", message: `${inputString}`, style: "thisUser"}];
                        setChat(newChat);
                        setInputString("");
                        }}
                    style={{
                        borderColor:"#BBBBBB", 
                        borderBottomWidth:2,
                        height:25,
                        padding: 2,
                        flex: 9,
                        marginRight:12
                    }}
                    placeholder="enter text here"
                />
                <TouchableOpacity style={{flex:1}}>
                    <Ionicons name="send" size={20} style={{color:"#4474FF"}}/>
                </TouchableOpacity>
                
            </View>
            
        </SafeAreaView>
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#333333",
        height: 45,
        padding:6,
        paddingLeft:20,
        borderBottomColor:"#999999",
        borderBottomWidth: 5
        
    }, 
    groupName:{
        color: "#999999",
        fontSize: 18,
        alignSelf: 'flex-start'
    },  
    messageArea:{
        height: 575,
        backgroundColor: "#DDDDDD"
    },
    inputView:{
        backgroundColor: "#FFFFFF",
        height: 30,
        paddingVertical: 5,
        paddingHorizontal: 14,
        topBorderWidth:5,
        topBorderColor: "#999999",
        flexDirection:"row"
    }
});

export default ChatScreen;