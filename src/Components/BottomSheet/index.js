import React, {useState} from 'react';
import {BottomSheet} from 'react-native-btr';
import {HP, WP} from '../Constant';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const BottomSheetComponent = ({
  show,
  onHandleClose,
  handleTodo,
  title,
  lastname,
  onChangeTodoA,
  onChangeTodo,
  isEdit,
}) => {
  return (
    <BottomSheet
      visible={show}
      onBackButtonPress={onHandleClose}
      onBackdropPress={onHandleClose}>
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: 280,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: HP('3'),
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingVertical: HP('1'),
            }}>
            {'New Task'}
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: WP('5'),
            justifyContent: 'space-between',
            marginTop: HP('1'),
          }}></View>

        <View
          style={{
            borderWidth: 0.5,
            borderColor: '#778899',
            width: '90%',
            borderRadius: 5,
            marginHorizontal: WP('5'),
            marginTop: HP('1'),
          }}>
          <TextInput
            style={{paddingLeft: 20}}
            value={title}
            onChangeText={onChangeTodoA}
            placeholder="Enter Title"
          />
        </View>

        <View
          style={{
            borderWidth: 0.5,
            borderColor: '#778899',
            width: '90%',
            borderRadius: 5,
            marginHorizontal: WP('5'),
            marginTop: HP('1'),
          }}>
          <TextInput
            style={{paddingLeft: 20}}
            value={lastname}
            onChangeText={onChangeTodo}
            placeholder="Enter New Task"
          />
        </View>

        {isEdit ? (
          <TouchableOpacity onPress={handleEditTodo}>
            <View
              style={{
                width: '90%',
                borderRadius: 10,
                marginHorizontal: WP('5'),
                marginTop: HP('2'),
                paddingVertical: HP('2.2'),
                backgroundColor: '#12ABBB',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 16}}>{'Edit Task'}</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleTodo}>
            <View
              style={{
                width: '90%',
                borderRadius: 10,
                marginHorizontal: WP('5'),
                marginTop: HP('2'),
                paddingVertical: HP('2.2'),
                backgroundColor: '#12ABBB',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 16}}>{'Add Task'}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </BottomSheet>
  );
};

export default BottomSheetComponent;
