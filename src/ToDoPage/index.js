import React, {useState} from 'react';

import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import BottomSheetComponent from '../Components/BottomSheet';
import {HP, WP} from '../Components/Constant';
import SwipeButtonCustom from '../Components/SwipeComponent';

const ToDoPage = () => {
  const [visible, setVisible] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [lastname, setLastName] = useState('');
  const [editIndex, setEditIndex] = useState();
  const [abcData, setAbcData] = useState('Pending');

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };

  const onChangeTodoA = e => {
    setText(e);
  };

  const onChangeTodo = f => {
    setLastName(f);
  };

  const Change = index => {
    const cloneTodoData = [...todoList];
    cloneTodoData[index].completed = !cloneTodoData[index].completed;
    setTodoList(cloneTodoData);
    setAbcData('Done');
  };

  const handleTodo = () => {
    let todoClone = [...todoList];
    todoClone.push({
      id: Date.now(),
      title: text,
      lastname: lastname,
      completed: false,
    });
    setTodoList(todoClone);
    setText('');
    setLastName('');
    toggleBottomNavigationView();
  };

  const onEditRow = index => {
    const txt = [...todoList];
    setIsEdit(true);
    setText(txt[index]);
    setEditIndex(index);
  };

  const handleEditTodo = () => {
    let todoClone = [...todoList];
    todoClone[editIndex] = text;
    setTodoList(todoClone);
    setText('');
    setIsEdit(false);
  };

  const onDeleteRow = index => {
    let todoClone = [...todoList];
    todoClone.splice(index, 1);
    setTodoList(todoClone);
  };

  return (
    <View style={{flex: 1, borderWidth: 1}}>
      <View style={{padding: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{'My Tasks'}</Text>
      </View>

      <TouchableOpacity onPress={toggleBottomNavigationView}>
        <View
          style={{
            borderWidth: 1,
            marginHorizontal: '10%',
            borderRadius: 15,
            alignItems: 'center',
            padding: 5,
          }}>
          <Text>{'Add New Task'}</Text>
        </View>
      </TouchableOpacity>

      <FlatList
        data={todoList}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          width: '100%',
        }}
        renderItem={({item, index}) => {
          return (
            <SwipeButtonCustom
              onDelete={onDeleteRow}
              index={index}
              onEdit={onEditRow}>
              <View
                style={{
                  paddingHorizontal: WP('20'),
                  width: '65%',
                  height: 90,
                  borderRadius: 15,
                  backgroundColor: item.completed ? '#e0ffff' : 'white',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginTop: 10,
                  }}>
                  {item.title}
                </Text>

                <Text
                  style={{
                    paddingBottom: HP('2'),
                    paddingTop: 10,
                    flexWrap: 'wrap',
                  }}>
                  {item.lastname}
                </Text>
              </View>

              <TouchableOpacity onPress={() => Change(index)}>
                <View
                  style={{
                    borderRadius: 10,
                    backgroundColor: item.completed ? '#12ABBB' : 'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 30,
                    marginLeft: 10,
                    padding: 5,
                  }}>
                  <Text style={{color: 'white', fontSize: 16}}>{abcData}</Text>
                </View>
              </TouchableOpacity>
            </SwipeButtonCustom>
          );
        }}
      />

      <View
        style={{
          borderWidth: 0.3,
          marginHorizontal: 20,
          marginTop: 15,
          borderColor: 'grey',
        }}></View>

      <View>
        <BottomSheetComponent
          show={visible}
          onHandleClose={toggleBottomNavigationView}
          title={text}
          lastname={lastname}
          handleTodo={handleTodo}
          handleEditTodo={handleEditTodo}
          onChangeTodoA={setText}
          onChangeTodo={setLastName}
        />
      </View>
    </View>
  );
};

export default ToDoPage;
