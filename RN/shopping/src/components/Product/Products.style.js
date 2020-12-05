import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flexDirection:'row', 
        marginTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 0.4,
        borderBottomColor: 'gray',
    },
    imgContainer: {
        width: 80,
        height: 100,
        marginLeft: 10,
        marginRight: 10
    },
    content:{
        flex:4
    },
    distance: {
        textAlign: "right",
        marginRight: 10
    },
    deal: {
        width: 80,
        borderColor: 'red',
        borderWidth: 1,
        padding: 5
    }
})