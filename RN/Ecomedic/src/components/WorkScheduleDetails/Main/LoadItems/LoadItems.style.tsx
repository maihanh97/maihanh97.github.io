import { StyleSheet } from "react-native";

export default StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        margin: 15,
        flex: 1
    },
    container: {
        width: '85%'
    },
    itemContainer: {
        justifyContent: 'flex-end',
        marginLeft: 10,
        borderColor: 'orange',
        borderWidth: 1,
        padding: 5,
        borderRadius: 4,
        marginBottom: 10,
        backgroundColor: '#FFFBF8'
    },
    times: {
        marginRight: 5
    },
    timeContainer: {
        flexDirection: 'row'
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 3
    },
    name: {
        fontWeight: 'bold'
    },
    infoImage: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    type: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 3
    },
    left: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textLeft: {
        fontWeight: 'bold',
        fontSize: 18
    }
})