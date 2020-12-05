import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    name:{
        fontSize: 20,
        fontWeight: '700'
    },
    age:{
        fontSize: 14,
        fontWeight: '400'
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 140,
        marginTop: -50,
        borderWidth: 5,
        borderColor: 'white'
    }
});