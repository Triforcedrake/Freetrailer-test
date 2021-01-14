import { StyleSheet } from "react-native";


export default StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    
    container: {
        flex: 1,
        justifyContent: "space-around",
    },

    flex2: {
        flex: 2, 
        justifyContent: "space-around",
    },

    topMargin: {
        marginTop: 60, 
    },

    title: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        marginRight: 30,
        marginLeft: 30,
    },

    languageTitle: {
        color: "black",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "left",
        marginLeft: 60,
        marginBottom: 50, 
    },
  
    text: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },

    languageText: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        marginLeft: 10,
    },

    flag: {
        paddingRight: 10, 
    },

    buttonBorder: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "#fff",
    },

    standardButton: {
        marginRight: 60,
        marginLeft: 60,
        marginTop:20,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:"#68a0cf",
        borderRadius:20,
    },

    languageMenu: {
        flexDirection: "row", 
        justifyContent: "center",
        marginRight: 60,
        marginLeft: 60,
        marginBottom: 50,
        marginTop: 20,
        paddingTop: 10,
    },

    languageButton: {
        display: "flex",
        flexDirection: "row", 
        justifyContent: "space-between",
        marginRight: 60,
        marginLeft: 60,
        marginTop:20,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:20, 
        borderWidth:2,
        borderColor: "transparent",
    },
});