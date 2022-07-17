import React, {useState} from 'react';

import {
  SwipeItem,
  SwipeButtonsContainer,
  SwipeProvider,
} from 'react-native-swipe-item';

import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {HP, WP} from '../Constant';

export default function SwipeButtonCustom({
  children,
  onDelete,
  index,
  onEdit,
  toggleBottomNavigationView,
}) {
  console.log(index, 'index')
  const leftButton = (
    <SwipeButtonsContainer
      style={{
        backgroundColor: 'red',
        width: '20%',
        height: 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => onDelete(index)}>
        <View>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
            {'DELETE'}
          </Text>
        </View>
      </TouchableOpacity>
    </SwipeButtonsContainer>
  );

  const rightButton = (
    <SwipeButtonsContainer
      style={{
        backgroundColor: '#add8e6',
        width: '20%',
        height: 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => onEdit(toggleBottomNavigationView)}>
        <View>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
            {'EDIT'}
          </Text>
        </View>
      </TouchableOpacity>
    </SwipeButtonsContainer>
  );

  return (
    <SwipeProvider>
      <SwipeItem
        style={styles.button}
        swipeContainerStyle={styles.swipeContentContainerStyle}
        leftButtons={leftButton}
        rightButtons={rightButton}>
        <Text>{children}</Text>
      </SwipeItem>
    </SwipeProvider>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '75%',
    height: 100,
    alignSelf: 'center',
    marginVertical: 5,
  },
  swipeContentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: '#e3e3e3',
    borderWidth: 1,
  },
});
