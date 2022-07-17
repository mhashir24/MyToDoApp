import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ToDoPage from './src/ToDoPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ToDoPage">
        <Stack.Screen
          options={{headerShown: false}}
          name="ToDoPage"
          component={ToDoPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
