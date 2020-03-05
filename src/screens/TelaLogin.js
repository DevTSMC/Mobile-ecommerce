import React, { useState, useEffect } from 'react';
import { 
  StyleSheet,
  Text, 
  View, 
  ImageBackground, 
  StatusBar, 
  Image,
  TouchableOpacity, 
  TextInput, 
  Switch,
  Dimensions,
  Alert
 } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//import ClassTest from './src/screens/class_testes';

const {width: WIDTH} = Dimensions.get('window');

export default function App({ navigation }) {
  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  return (
    <ImageBackground 
      style={styles.backgroundContainer}
      >
        <StatusBar backgroundColor='#1397d5' />
        <View style={styles.logoContainer}>
          <Image
            style={{width:200, height:180, marginBottom:30, resizeMode:'contain'}} 
            source={require('../assets/logo-small.png')}
          />
          <Text style={styles.logoText}>
            Ajudando seu negócio a ir pra vala:
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Ionicons
            name={'ios-person'}
            size={28}
            color={'rgba(255, 255, 255, 0.7)'}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={'Email'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons
            name={'ios-lock'}
            size={28}
            color={'rgba(255, 255, 255, 0.7)'}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={'Password'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid="transparent"
          />

          <TouchableOpacity style={styles.btnEye} onPress={()=>{}}>
            <Ionicons
              name={'ios-eye'}
              size={26}
              color={'rgba(255, 255, 255, 0.7)'}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={()=>{
          navigation.navigate('NavInicial');
        }}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop: 20}} onPress={()=>{}}>
          <View>
            <Text style={styles.text}>Cadastrar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop: 10}} onPress={()=>{}}>
          <View>
            <Text style={styles.text}>esqueci minha senha</Text>
          </View>
        </TouchableOpacity>
        
        <View style={styles.switchBody}>
          <Switch
            trackColor={{true: 'blue'}}
            value={check}
            onValueChange={setCheck}
          />
          <Text style={styles.switchText}>Salvar dados</Text>
        </View>
      </ImageBackground>
  );
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
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(19, 151, 213, 0.2)',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
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
