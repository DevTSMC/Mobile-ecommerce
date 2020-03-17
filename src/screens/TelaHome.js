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
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const {width: WIDTH} = Dimensions.get('window');

export default class TelaCadastroUser extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      menuStatus: styles.invisible,
      menuOffStatus: styles.invisible,
      status: null,
    };
      this.menu = this.menu.bind(this);
      this.menuOff = this.menuOff.bind(this);
      this.navigationMenu = this.navigationMenu.bind(this);
  }

  menuOff(){
    let s = this.state;
    s.menuStatus = styles.invisible;
    s.menuOffStatus = styles.invisible;
    this.setState(s);
  }

  menu(){
    let s = this.state;

    if(s.menuStatus == styles.visible){
      s.menuStatus = styles.invisible;
    }else{
      s.menuStatus = styles.visible;
      s.menuOffStatus = styles.visible2;
    }
    this.setState(s);
  }

  navigationMenu(index){
    switch (index){
      case 1:
        this.props.navigation.navigate('TelaPerfil');
        this.menu();
        this.menuOff();
        break;
      case 2:
      this.props.navigation.navigate('TelaClientes');
        this.menu();
        this.menuOff();
      break;
      case 3:
        this.props.navigation.navigate('TelaFornecedores');
        this.menu();
        this.menuOff();
      break;
      case 4:
        this.props.navigation.navigate('TelaCaixa');
        this.menu();
        this.menuOff();
      break;
      case 5:
          this.props.navigation.navigate('TelaGraficos');
          this.menu();
          this.menuOff(); 
        break;
      case 6:
          this.props.navigation.navigate('TelaRelatorios');
          this.menu();
          this.menuOff();
        break;
      case 7:
          this.props.navigation.navigate('TelaContato');
          this.menu();
          this.menuOff(); 
        break;
      case 8:
          this.props.navigation.navigate('TelaSobre'); 
          this.menu();
          this.menuOff();
        break;
      case 9:
          this.props.navigation.navigate('TelaConfiguracoes');
          this.menu();
          this.menuOff(); 
        break;
      default:
        break;
    }   
  }
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={[this.state.menuOffStatus,{ width:"100%", height:4000, marginBottom:-4000,}]} >
          <TouchableOpacity
                style={{flex:1}}
                onPress={this.menuOff}
              >
          </TouchableOpacity> 
        </View>
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

          <View style={{alignItems:"flex-end", marginRight:-55, marginTop:10,}}>
            <View style={[this.state.menuStatus, {backgroundColor:"#c6c6c6",
              width:"100%", marginBottom:-300, borderRadius:10,padding:10,}]}>

              <View style={styles.photoPerfilMenu}>
                <Ionicons
                  name={'ios-person'}
                  size={70}
                  color={'rgba(255, 255, 255, 0.7)'}
                  style={styles.inputIconMenu}
                />
              </View>
                
              <TouchableOpacity onPress={()=>{this.navigationMenu(1);}}>
                <Text>Perfil</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.navigationMenu(2);}}>
                <Text>Clientes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.navigationMenu(3);}}>
                <Text>Fornecedores</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.navigationMenu(4);}}>
                <Text>Caixa</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.navigationMenu(5);}}>
                <Text>Gráficos</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.navigationMenu(6);}}>
                <Text>Relatórios</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.navigationMenu(7);}}>
                <Text>Contatos</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.navigationMenu(8);}}>
                <Text>Sobre</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.navigationMenu(9);}}>
                <Text>Configurações</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.menuBody}>
              <TouchableOpacity style={{alignItems:'center', justifyContent: 'center'}} onPress={this.menu}>
                  <View style={{width:30, height:4, marginBottom:4, backgroundColor:'#000'}}/>
                  <View style={{width:30, height:4, margin:4, backgroundColor:'#000'}}/>
                  <View style={{width:30, height:4, margin:4, backgroundColor:'#000'}}/>
              </TouchableOpacity>

          </View>

        </View>
        <View style={styles.bodyContainer}>
        <ScrollView >
            <View style={{height:200}}>
              <ScrollView pagingEnabled={true} horizontal={true}>
                <ImageBackground style={styles.bannerDestaque}
                  source={require("../assets/celular.jpeg")}>
                  <Text style={{fontWeight:'bold', fontSize: 30}}>Banner em destaque 1</Text>
                </ImageBackground>

                <ImageBackground style={styles.bannerDestaque}
                source={require("../assets/mouse.jpeg")}>
                  <Text style={{fontWeight:'bold', fontSize: 30}}>Banner em destaque 2</Text>
                </ImageBackground>

                <ImageBackground style={styles.bannerDestaque}
                source={require("../assets/notebook.jpeg")} >
                  <Text style={{fontWeight:'bold', fontSize: 30}}>Banner em destaque 3</Text>
                </ImageBackground>

              </ScrollView>
            </View>
          
            <View style={{margin:5, marginTop:10}}>
              <Text style={styles.txtTopicos}>Product Category</Text>

              <View style={{flexDirection:'row', height:100}}>

                <View style={{flex:1, borderRadius:5, margin:5, backgroundColor:'#fff'}}>
                  <Text>Women's</Text>
                </View>
                <View style={{flex:1, borderRadius:5, margin:5, backgroundColor:'#fff'}}>
                  <Text>Lifestyle</Text>
                </View>
                <View style={{flex:1, borderRadius:5, margin:5, backgroundColor:'#fff'}}>
                  <Text>Foods</Text>
                </View>

              </View>

              <View style={{flexDirection:'row', height:100}}>

                <View style={{flex:1, borderRadius:5, margin:5, backgroundColor:'#fff'}}>
                  <Text>Sports</Text>
                </View>
                <View style={{flex:1, borderRadius:5, margin:5, backgroundColor:'#fff'}}>
                  <Text>Men's</Text>
                </View>
                <View style={{flex:1, borderRadius:5, margin:5, backgroundColor:'#fff'}}>
                  <Text>Travel</Text>
                </View>

              </View>

            </View>

            <View style={{margin:5, marginTop:10}}>
              <Text style={styles.txtTopicos}>Flash Sale</Text>

              <View style={{height:150}}>
                <ScrollView horizontal={true}>
                  <View style={{flex:1, width:100, borderRadius:5, margin:5, backgroundColor:'red'}}>
                    <Text>Sports</Text>
                  </View>
                  <View style={{flex:1, width:100, borderRadius:5, margin:5, backgroundColor:'green'}}>
                    <Text>Men's</Text>
                  </View>
                  <View style={{flex:1, width:100, borderRadius:5, margin:5, backgroundColor:'purple'}}>
                    <Text>Travel</Text>
                  </View>
                  <View style={{flex:1, width:100, borderRadius:5, margin:5, backgroundColor:'yellow'}}>
                    <Text>Sports</Text>
                  </View>
                  <View style={{flex:1, width:100, borderRadius:5, margin:5, backgroundColor:'orange'}}>
                    <Text>Men's</Text>
                  </View>
                  <View style={{flex:1, width:100, borderRadius:5, margin:5, backgroundColor:'pink'}}>
                    <Text>Travel</Text>
                  </View>
                </ScrollView>
              </View>
            </View>

            <View style={{margin:5}}>
              <Text style={styles.txtTopicos}>Top Products</Text>

              <View style={{flexDirection:'row', height:300}}>

                <View style={{flex:1, borderRadius:5, margin:5, backgroundColor:'#fff'}}>
                  <Text>Sports</Text>
                </View>
                <View style={{flex:1, borderRadius:5, margin:5, backgroundColor:'#fff'}}>
                  <Text>Men's</Text>
                </View>

              </View>

              <View style={{flexDirection:'row', height:300}}>

                <View style={{flex:1, borderRadius:5, margin:5, backgroundColor:'#fff'}}>
                  <Text>Sports</Text>
                </View>
                <View style={{flex:1, borderRadius:5, margin:5, backgroundColor:'#fff'}}>
                  <Text>Men's</Text>
                </View>

              </View>

              <View style={{flexDirection:'row', height:300}}>

                <View style={{flex:1, borderRadius:5, margin:5, backgroundColor:'#fff'}}>
                  <Text>Sports</Text>
                </View>
                <View style={{flex:1, borderRadius:5, margin:5, backgroundColor:'#fff'}}>
                  <Text>Men's</Text>
                </View>

              </View>

              <View style={{flexDirection:'row', height:300}}>

                <View style={{flex:1, borderRadius:5, margin:5, backgroundColor:'#fff'}}>
                  <Text>Sports</Text>
                </View>
                <View style={{flex:1, borderRadius:5, margin:5, backgroundColor:'#fff'}}>
                  <Text>Men's</Text>
                </View>

              </View>

              <View style={{height:300, backgroundColor:'rgba(19, 151, 213, 0.7)', borderRadius:5, margin:5, marginTop:15}}>
                <Text style={{fontSize:20, alignSelf:'center', fontWeight:'bold'}}>Desconto de 20%</Text>
              </View>

            </View>
          </ScrollView>
          
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
    width:'110%',
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
  invisible:{
    zIndex:0,
    opacity:0
  },
  visible:{
    zIndex:3,
    opacity:1
  },
  visible2:{
    zIndex:2,
    opacity:1
  },
  bannerDestaque:{
    height:200,
    width:WIDTH-15,
    marginLeft:5,
    backgroundColor:"#ffffff",
    borderRadius:20
  },
  txtTopicos:{
    fontSize:20,
    color:'blue',
    fontWeight:'bold'
  }
});
