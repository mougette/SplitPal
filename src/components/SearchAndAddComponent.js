import React from 'react';
import { TouchableOpacity, TextInput, StyleSheet, Text, View } from "react-native";

const SearchAndAdd = ( props ) => {

    return(
        <View style={styles.link}>
            <TextInput
                style={styles.input}
                placeholder={ props.search }
            />
            <TouchableOpacity onPress={() => props.onPress()}>
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

export default SearchAndAdd;