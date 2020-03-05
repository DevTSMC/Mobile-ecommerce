import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  SafeAreaViewBase
} from 'react-native';
//import firebase from 'react-native-firebase';
const {width: WIDTH} = Dimensions.get('window');

export default class TelaCadastroUser extends Component {
  
  render() {
    return (
      <SafeAreaView>
        <Text>tela config</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9e9e9',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 12,
    marginTop: -25,
  },
  logo: {
    width: 120,
    height: 120,
  },
  input: {
    width: WIDTH - 14,
    height: 45,
    fontSize: 12,
    paddingLeft: 10,
    marginHorizontal: 7,
    borderBottomWidth:1,
    borderBottomColor:'#1397d5',
    marginVertical:5,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 10,
  },
  inputContainer: {
    marginTop: 10,
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#1397d5',
    justifyContent: 'center',
    marginTop: 20,
  },
  textButton: {
    color: '#FFF',
    fontSize: 16,
    fontWeight:'bold',
    textAlign: 'center',
  },
  text: {
    color: 'rgba(19, 151, 213, 0.4)',
    fontSize: 16,
    fontWeight:'bold',
    textAlign: 'center',
  },
  switchBody: {
    flexDirection: 'row',
    marginTop: 15,
  },
  switchText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
