import React from 'react'
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class Tile extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
        <View style={styles.tile}>
            <Text style={styles.tileText}>x</Text>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    tile:{
      width: 100,
      height: 100,
      borderColor: '#2c3e50',
      borderRadius: 0.5,
      margin: 0,
      alignItems: 'center'
    },
    tileLeftRight:{
      borderLeftWidth: 5,
      borderRightWidth: 5,
    },
    tileTop:{
      borderTopWidth:5,
    },
    tileText:{
      fontSize: 50,
      fontWeight: 'bold',
      color: 'white',
    },
  });