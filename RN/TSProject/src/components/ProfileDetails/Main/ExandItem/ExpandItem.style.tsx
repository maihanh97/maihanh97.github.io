import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    containerItem: {
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    text: {
        marginRight: 8, 
        marginBottom: 5
    },
    image:{
        transform: [{ rotate: "180deg" }]
    }

})