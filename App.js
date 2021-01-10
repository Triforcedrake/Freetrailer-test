import React from 'react';
import { Text, TouchableOpacity, View, ImageBackground, Modal, Alert } from 'react-native';
import StyleSheet from './components/my_styles';
import { Flag } from 'react-native-svg-flagkit'

export default class App extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={StyleSheet.container}>
        <ImageBackground source={require('./assets/img/background.jpg')} style={StyleSheet.background}>

          <Text style={StyleSheet.title}>
            LÅN EN GRATIS FREETRAILER NÆR DIG
          </Text>

          <TouchableOpacity style={StyleSheet.standardButton}>
            <Text style={StyleSheet.text}>Kom godt igang</Text>
          </TouchableOpacity>

          <TouchableOpacity style={StyleSheet.transparentButton}>
            <Text style={StyleSheet.text}>Find en freetrailer</Text>
          </TouchableOpacity>

          <TouchableOpacity style={StyleSheet.languageButton} onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={StyleSheet.text}>Sprog</Text>
            <Text style={StyleSheet.flag}> <Flag id={'DK'} size={0.15}/></Text> 
          </TouchableOpacity>
        </ImageBackground>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          >
          <View style={{marginTop: 60}}>
            <View>
              <Text style={StyleSheet.languageTitle}>
                Vælg Sprog
              </Text>

              <TouchableOpacity style={StyleSheet.languageButton} onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={StyleSheet.LanguageText}>Dansk</Text> 
                <Text style={StyleSheet.flag}> <Flag id={'DK'} size={0.15}/></Text> 
              </TouchableOpacity>

              <TouchableOpacity style={StyleSheet.languageButton} onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={StyleSheet.LanguageText}>Tysk</Text>
                <Text style={StyleSheet.flag}> <Flag id={'DE'} size={0.15}/></Text> 
              </TouchableOpacity>

              <TouchableOpacity style={StyleSheet.languageButton} onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={StyleSheet.LanguageText}>Fransk</Text>
                <Text style={StyleSheet.flag}> <Flag id={'FR'} size={0.15}/></Text> 
              </TouchableOpacity>

              <TouchableOpacity style={StyleSheet.languageButton} onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={StyleSheet.LanguageText}>Engelsk</Text> 
                <Text style={StyleSheet.flag}> <Flag id={'GB'} size={0.15}/></Text> 
              </TouchableOpacity>

              <TouchableOpacity style={StyleSheet.standardButton}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={StyleSheet.LanguageText}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      
    );
  }
}