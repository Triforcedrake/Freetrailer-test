import React from "react";
import { Text, TouchableOpacity, View, ImageBackground, Modal } from "react-native";
import StyleSheet from "./components/my_styles";

import { Flag } from "react-native-svg-flagkit"
import i18n from "./components/i18n"; 

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    //Setting up our states for the modal and the language highligt
    this.state = { 
        selectedButton: "dk", 
        modalVisible: false,
    };
    
    this.selectionOnPress = this.selectionOnPress.bind(this);
  } 

  //Logic for changing selected language highlight
  selectionOnPress(languageType) {
    this.setState({ selectedButton: languageType });
  }

  //logic for showing or hiding the slide up menu. 
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={StyleSheet.container}>
        <ImageBackground source={require("./assets/img/background.jpg")} style={StyleSheet.background}>
            <View style={StyleSheet.flex2}>
              <Text style={StyleSheet.title}>
                {i18n.t("title")}
              </Text>
            </View>

            <TouchableOpacity style={StyleSheet.standardButton}>
              <Text style={StyleSheet.text}>{i18n.t("start")}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[StyleSheet.standardButton, StyleSheet.buttonBorder]}>
              <Text style={StyleSheet.text}>{i18n.t("find")}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={StyleSheet.languageMenu} onPress={() => {
                this.setModalVisible(true);
              }}>
                <Text style={StyleSheet.text}>{i18n.t("languageBase")} </Text>
                <Text style={StyleSheet.flag}><Flag id={i18n.t("flagID")} size={0.15}/> </Text>
            </TouchableOpacity>
        </ImageBackground>

        {/*The slide up menu setup*/}
        <Modal animationType="slide" visible={this.state.modalVisible}>
          <View style={StyleSheet.container}>
    
              <Text style={StyleSheet.languageTitle}>
                {i18n.t("choose")}
              </Text>

              {/*The buttons within the slide up will close the modal slide up and set the new language with i18n*/}
              <TouchableOpacity style={[StyleSheet.languageButton, {borderColor: this.state.selectedButton === "dk" ? "black" : "transparent"}]} 
                onPress={() => { 
                  this.setModalVisible(!this.state.modalVisible); 
                  i18n.locale = "dk";
                  this.selectionOnPress("dk");
                }}>
                <Text style={StyleSheet.languageText}>{i18n.t("danish")}</Text> 
                <Text style={StyleSheet.flag}> <Flag id={"DK"} size={0.15}/></Text> 
              </TouchableOpacity>

              <TouchableOpacity style={StyleSheet.languageButton} 
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={StyleSheet.languageText}>{i18n.t("german")}</Text>
                <Text style={StyleSheet.flag}> <Flag id={"DE"} size={0.15}/></Text> 
              </TouchableOpacity>

              <TouchableOpacity style={StyleSheet.languageButton} 
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={StyleSheet.languageText}>{i18n.t("french")}</Text>
                <Text style={StyleSheet.flag}> <Flag id={"FR"} size={0.15}/></Text> 
              </TouchableOpacity>

              <TouchableOpacity style={[StyleSheet.languageButton, {borderColor: this.state.selectedButton === "en" ? "black" : "transparent"}]}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible); 
                  i18n.locale = "en";
                  this.selectionOnPress("en");
                }}>
                <Text style={StyleSheet.languageText}>{i18n.t("english")}</Text> 
                <Text style={StyleSheet.flag}> <Flag id={"GB"} size={0.15}/></Text> 
              </TouchableOpacity>

              <TouchableOpacity style={[StyleSheet.standardButton, StyleSheet.topMargin]}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={StyleSheet.text}>OK</Text>
              </TouchableOpacity>

            </View>
        </Modal>
      </View>
      
    );
  }
}