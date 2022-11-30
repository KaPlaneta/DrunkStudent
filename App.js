import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SecondScreen from './SecondScreen';
import FirstScreen from './FirstScreen';
import ThirdScreen from './ThirdScreen';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={FirstScreen}
        />

        <Stack.Screen
          name="SecondScreen"
          options={{title: 'PARTY'}}
          component={SecondScreen}
        />
        <Stack.Screen
          name="ThirdScreen"
          options={{title: 'costam'}}
          component={ThirdScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function returnTheSame(name) {
  return name;
}

function concatenateArray(myArray) {
  //łączy stringi, zmienna i w petli dodawac nasteony element do tej zmiennej
  let name = '';
  //   for (let i=0; i < myArray.length; i++)
  // {
  //    // console.log("The member of myArray in index " + i + " is " + myArray[i]);
  //   name += myArray[i];
  // }
  for (const element of myArray) {
    name += element;
  }
  return name;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
    flexDirection: 'column',
  },
});

export default App;
