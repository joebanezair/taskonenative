import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 70,
    paddingHorizontal: 24,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  buttonRainbow:{
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#010B45',
    justifyContent: 'center',
    minWidth: 100,
    shadowColor: '#000', // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowOpacity: 0.5, // For iOS
    shadowRadius: 3.4, // For iOS
    elevation: 10, // For Android
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'normal',
    textTransform: 'capitalize',
    textAlign: 'center',
    color: '#001FDA',
    fontWeight: '300'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  Text:{
    textTransform: 'capitalize',
    color: 'white',
    fontSize: 20,
  },
  Text11:{
    textTransform: 'capitalize',
    color: 'white',
    fontSize: 19,
  },
  Text1:{
    textTransform: 'capitalize',
    color: 'black',
    marginLeft: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 20,
    fontSize: 15,
  },
  center:{
    textAlign: 'center'
  },
  buttonz:{
    margin: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#010B45',
    justifyContent: 'center',
    textAlign: 'center',
    minWidth: 100,
    shadowColor: '#000', // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowOpacity: 0.5, // For iOS
    shadowRadius: 3.4, // For iOS
    elevation: 10, // For Android
  },
  button00prev: {
    textAlign: 'center',
    padding: '2%',
    alignSelf: 'flex-start', //width: equivalent to fit-content
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 10
  },
  container: {
    flex: 1,
    justifyContent: 'top',
    marginTop: '20%',
    padding: '5%',
    alignItems: 'left',
    backgroundColor: '#fff', 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  previewbutton: {
    textAlign: 'center',
    padding: '2%',
    alignSelf: 'flex-start', //width: equivalent to fit-content
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 10
  },
  containerMain: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    paddingLeft: 20,
  },
  colblue:{
    color: 'blue'
  },
  fontZize:{
    fontSize: 20,
    color: 'blue'
  },
  fontZizes:{
    fontSize: 20,
    color: 'black'
  },
  lLeft:{
    textAlign: 'right',
    fontSize: 15,
    color: 'black'
  },
  text: {
    fontSize: 16,
    color: 'blue',
    marginTop: 10, // Margin top
  },
  buttonzz: {
    textAlign: 'left',
    padding: '2%',
    alignSelf: 'flex-start', //width: equivalent to fit-content
    borderRadius: 10,
    margin: 10
  },
  button: {
    textAlign: 'center',
    padding: '2%',
    alignSelf: 'flex-start', //width: equivalent to fit-content
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 10
  },
  
  containerView:{
    marginBottom: 5,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    alignItems: 'flex-start', // Align items to the top
    justifyContent: 'space-between', 
  },
  textStyle: {
    marginBottom: 10,
    fontWeight:'bold',
    textAlign: 'center'
  },
  textStyleText: {
    padding: 14,
  },
  textStyleText2: {
    padding: 17,
    paddingTop: 18.5,
  },
  textStyleText3: {
    padding: 17,
    paddingTop: 15
  }
});

export default styles