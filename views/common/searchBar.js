import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} {...this.props}
                      underlineColorAndroid='transparent'></TextInput>
                </View>
                <TouchableOpacity style={styles.btn} {...this.props}>
                  <Icon name="search" size={30} color="#617984"/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 44,
        marginTop: 10,
    },
    inputContainer: {
        flex: 1,
        marginLeft: 5,
    },
    input: {
        flex: 1,
        height: 44,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ccc',
        paddingLeft: 5,
    },
    btn: {
        width: 55,
        height: 44,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "#23BEFF",
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    search: {
        flex: 1,
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});