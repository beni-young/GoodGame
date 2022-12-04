import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextBubble from '../components/TextBubble';

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
        {user: "Person1",   
        message: "testing chat 1"},
        {user: "Person2",
        message: "testing chat 2"},
        {user: "Person3",
        message: "testing chat 3"}
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
                    group name goes here
                </Text>
            </View>

            <View style={styles.messageArea}>    
                <FlatList 
                    data = {chat}
                    renderItem={({item})=>{
                        return <TextBubble message={item.message}/>;
                    }}
                />
            </View>

            <View style={styles.inputStyle}>
                <TextInput 
                    value={inputString}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(newText)=>{setInputString(newText)}}
                    onEndEditing={ ()=>{
                        const newChat = [...chat,{user: "inputtingUser2", message: `${inputString}`}];
                        setChat(newChat);
                        console.log(chat);
                        console.log(inputString);}}
                />
            </View>
            
        </SafeAreaView>
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"black",
        height: 45,
        padding:8,
    }, 
    groupName:{
        color: "white",
        fontSize: 20
    },  
    messageArea:{
        height: 575,
        borderWidth:3,
        borderColor:"red"
    },
    inputStyle:{
        backgroundColor: "grey",
        height: 75
    }
});

export default ChatScreen;