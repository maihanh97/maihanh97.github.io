import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    // Row Two
    fontWeight: {
        fontWeight: 'bold'
    },
    rowTwo:{
        flexDirection: "row",
        marginLeft: 10, 
        marginRight: 10, 
        justifyContent: 'center', 
        alignItems: "center", 
        borderTopWidth: 1, 
        borderTopColor: '#ddd',
        paddingTop :15
    },
    viewRowTwo: {
        flex:5, 
        flexDirection :'row', 
        justifyContent: 'space-around',
    },

    // Row Three

    rowThree:{
        flexDirection: 'row',
        marginTop: 15,
        borderTopColor: '#ddd',
        borderTopWidth: 1,
        justifyContent: 'space-around',
        paddingTop: 15,
    },
    threeDotOne:{
        justifyContent: 'center',
        alignItems: "center",
        borderRightWidth: 1,
        borderRightColor: '#ddd',
        paddingRight: 20
    },
    threeDotTwo:{
        justifyContent: 'center',
        alignItems: "center",
        borderRightWidth: 1,
        borderRightColor: '#ddd',
        paddingRight: 20
    },
    threeDotThree:{
        justifyContent: 'center',
        alignItems: "center"
    },

});