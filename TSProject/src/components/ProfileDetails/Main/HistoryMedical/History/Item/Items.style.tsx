import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginTop :15,
        alignItems: "center",
        justifyContent: 'center',
        paddingBottom: 15,
    },
    image: {
        marginLeft: 10,
        marginRight: 10
    },
    view:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-between', 
        marginRight: 15,
        paddingRight: 10
    }

})