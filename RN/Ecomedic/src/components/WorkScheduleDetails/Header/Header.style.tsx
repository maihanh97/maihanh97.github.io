import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#2d9cdb',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15
    },
    title: {
        fontSize: 22,
        color: 'white'
    },
    view1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    viewX: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        marginBottom: 10
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        padding: 8,
        backgroundColor: 'gray'

    },
    text: {
        color: 'white',
        fontSize: 14
    },
    view2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text2: {
        fontSize: 18,
        color: 'white',
    },
    text3: {
        color: 'white',
        fontSize: 14,
        marginRight: 10,
        opacity: 0.6
    }
})