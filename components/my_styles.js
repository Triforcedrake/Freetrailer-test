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

    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
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

    LanguageText: {
        fontSize: 20,
        color: 'black',
        fontWeight: "bold",
        textAlign: "left",
    },

    LanguageTextButton: {
        fontSize: 20,
        color: 'black',
        fontWeight: "bold",
        textAlign: "center",
    },

    flag: {
        textAlign: "right",
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
    },
  
  });