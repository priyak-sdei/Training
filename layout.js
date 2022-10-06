import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <View style={[styles.row1,{flex:1}]}> 
       </View>
       <View style={[styles.row1,{flex:1}]}> 
       </View>
       <View style={[styles.row1,{flex:1}]}> 
       </View>
       <View style={[styles.row1,{flex:1}]}> 
       </View>
    </View>

     <View style={{flexDirection:'row', justifyContent:'space-between', }}>
       <View style={[styles.row1,{flex:0.5}]}> 
       </View>
         <View style={[styles.row1,{flex:0.25}]}> 
       </View>
    </View>

    <View style={{flexDirection:'row', justifyContent:'flex-end', }}>
       <View style={[styles.row1,{flex:0.5}]}> 
       </View>
         <View style={[styles.row1,{flex:0.25}]}> 
       </View>
    </View>
    <View style={{flexDirection:'column',  flex:1  }}>
       <View style={[styles.row1,{flex:0.5}]}> 
       </View>
         <View style={[styles.row1,{flex:0.3}]}> 
       </View>
        <View style={[styles.row1,{flex:0.2}]}> 
       </View>
    </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
container:{
  flex:1,
  padding:5,
 backgroundColor:'yellow'
},
row1:{
backgroundColor:'red',
margin:2,
height:50,
 borderRadius:5
}

});
