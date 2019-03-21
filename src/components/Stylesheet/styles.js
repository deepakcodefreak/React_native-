import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  secondContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  placeInput: {
    width: "70%",
    borderBottomColor: 'darkblue',
    borderBottomWidth: 2,

  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%",
  },
  list: {
    width: '100%',
    marginTop: 5,
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection:'row',
    alignItems:'center'
  },
  placeImage: {
    width:30,
    height:30,
    marginRight:8
  },
  modalContainer:{
    margin:22
  },
  modalPlaceImage: {
    width:'100%',
    height:200,
  },
  modalText:{
    fontWeight:'bold',
    color:'black',
    textAlign:'center',
    fontSize:30,
  }

});

export default styles;