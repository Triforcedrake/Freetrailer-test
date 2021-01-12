import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    
    container: {
        flex: 1,
    },

    buttonContainer: {
        flexDirection: 'row',
    },

    title: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
    },

    languageTitle: {
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "left",
        marginLeft: 60,
    },
  
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold",
        textAlign: "center",
    },

    languageText: {
        fontSize: 20,
        color: 'black',
        fontWeight: "bold",
        textAlign: "left",
        paddingLeft: 10,
    },

    flag: {
        textAlign: "right",
        paddingRight: 10, 
    },
  
    standardButton: {
        marginRight: 60,
        marginLeft: 60,
        marginTop:20,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        fontSize: 20
    },

    transparentButton: {
        marginRight: 60,
        marginLeft: 60,
        marginTop:20,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor: 'transparent',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        fontSize: 20
    },

    languageButton: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginRight: 60,
        marginLeft: 60,
        marginTop:20,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:10, 
        borderWidth:2,
        borderColor: 'transparent'
  }});