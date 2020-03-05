import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Platform,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const {width: WIDTH} = Dimensions.get('window');

export default class TelaCadastroUser extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.buscaContainer}>
          <Image 
            style={styles.buscaImage} 
            source={require("../assets/logo-small.png")} 
          />

          <View style={styles.inputBuscaBody}>
            <Ionicons
              name={'ios-search'}
              size={28}
              color={'gray'}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.inputBusca}
              placeholder={'Enter your keyword'}
              placeholderTextColor={'gray'}
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.menuBody}>
              <TouchableOpacity style={{alignItems:'center', justifyContent: 'center'}} onPress={()=>{}}>
                  <View style={{width:30, height:4, marginBottom:4, backgroundColor:'#000'}}/>
                  <View style={{width:30, height:4, margin:4, backgroundColor:'#000'}}/>
                  <View style={{width:30, height:4, margin:4, backgroundColor:'#000'}}/>
              </TouchableOpacity>

          </View>

        </View>
        <View style={styles.bodyContainer}>
          <Text>tela Home</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 24 : 0
  },
  buscaContainer:{
    width:WIDTH,
    height:70,
    flexDirection:'row'
    
  },
  buscaImage:{
    width:50,
    height:50,
    margin:9,
  },
  inputBuscaBody:{
    flex:1,
    marginTop: 10,
  },
  inputBusca: {
    width:'100%',
    height: 45,
    borderRadius: 5,
    fontSize: 16,
    paddingLeft: 45,
    borderWidth:1

  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 14,
  },
  menuBody:{
    width:70,
    height:70,
    alignItems:'center',
    justifyContent:'center'
  },
  bodyContainer:{
    flex:1,
    backgroundColor:'#c9c9c9'
  },
});
