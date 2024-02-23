import { StyleSheet } from "react-native";

// generalized design
export const Styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: 'white',
        padding: 15
    },
    button_groupFlex:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 7.5,
        justifyContent: 'center'
    },
    button_normal:{
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        margin: 2.5
    },
    text_normal_center:{
        textAlign: 'center',
        fontSize: 18,
        color: 'black'
    },
    button_text:{
        fontSize: 15,
        color: 'black'
    }
});