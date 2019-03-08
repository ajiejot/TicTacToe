/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component{
  render() {
    return (
        <View style={styles.gameBoard}>
          <View style={styles.rowTiles}>
            <View style={styles.tile}>
              <Text style={styles.tileText}>x</Text>
            </View>
            <View style={[styles.tile,styles.tileLeftRight]}>
              <Text style={styles.tileText}>x</Text>
            </View>
            <View style={styles.tile}>
              <Text style={styles.tileText}>x</Text>
            </View>
          </View>
          
          <View style={styles.rowTiles}>
            <View style={[styles.tile,styles.tileTop]}>
              <Text style={styles.tileText}>x</Text>
            </View>
            <View style={[styles.tile,styles.tileLeftRight,styles.tileTop]}>
              <Text style={styles.tileText}>x</Text>
            </View>
            <View style={[styles.tile,styles.tileTop]}>
              <Text style={styles.tileText}>x</Text>
            </View>
          </View>

          <View style={styles.rowTiles}>
            <View style={[styles.tile,styles.tileTop]}>
              <Text style={styles.tileText}>x</Text>
            </View>
            <View style={[styles.tile,styles.tileLeftRight,styles.tileTop]}>
              <Text style={styles.tileText}>x</Text>
            </View>
            <View style={[styles.tile,styles.tileTop]}>
              <Text style={styles.tileText}>x</Text>
            </View>
          </View>

        </View>

    );
  }
}

const styles = StyleSheet.create({
  gameBoard: {
    flex: 1,
    backgroundColor: '#34495e',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowTiles: {
    flexDirection: 'row',
  },
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
