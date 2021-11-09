import React, { useState, useEffect, useContext } from 'react';
import {Post} from '../components/RestPost';
import { TouchableOpacity, TextInput, StyleSheet, Text, View } from "react-native";

const AddFriendBar = ( props ) => {
const [friend, setFriend] = useState("");
    return(
        <View style={styles.link}>
            <TextInput
                style={styles.input}
                onChangeText={setFriend}
                value={friend}
                placeholder={ props.search }
            />
            <TouchableOpacity onPress={() => Post("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_1/friend-request",
                                                             JSON.stringify({
                                                              userEmail: props.email,
                                                              friendEmail: friend,
                                                              }))}>
                <Text style={styles.blueTextButton}>{ props.button }</Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    link: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 20,
    },
    input: {
        width: '60%',
        borderWidth: 1,
        borderRadius: 7,
        padding: 10,
        backgroundColor: 'white',
    },
    blueTextButton: {
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 7,
        overflow: "hidden",
        padding: 10,
        marginLeft: 10,
        color: '#2196F3',
        backgroundColor: 'white',
    },
});

export default AddFriendBar;