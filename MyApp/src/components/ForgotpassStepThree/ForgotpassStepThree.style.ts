import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  icBack: {
    width: 18,
    height: 18,
    marginLeft: 10, 
    marginRight: 10
  },
  txtHeader: {
    fontWeight: 'bold',
    fontSize: 18
  },
  content:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 15
  },
  inputPass:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    marginRight: 15
  },


  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})