import React, {useState} from 'react';
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
import {Picker} from '@react-native-picker/picker';
import {ThemedButton} from 'react-native-really-awesome-button';
import moment from 'moment';

function SecondScreen({route, navigation}) {
  const [drink, setdrink] = React.useState('vodka');
  const [capacity, setcapacity] = React.useState(1);
  // console.log(drink);
  const make = drinking[drink];
  const selectionString = make.name + ' ' + make.models[capacity];

  function getCurrentDate() {
    var date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss a');
    console.log(date);
    console.log(drink);
    console.log(capacity);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          {/* <Text>Choose drink:</Text>
          <Picker
            selectedValue={selectedValue}
            style={{width: 150}}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="1/4" value="1/4" />
            <Picker.Item label="2/4" value="2/4" />
            <Picker.Item label="3/4" value="3/4" />
            <Picker.Item label="4/4" value="4/4" />
          </Picker> */}

          <Text>Choose drink:</Text>
          <Picker
            style={{width: 200}}
            selectedValue={drink}
            onValueChange={value => {
              setdrink(value);
              setcapacity(0);
            }}>
            {Object.keys(drinking).map(value => (
              <Picker.Item
                key={value}
                value={value}
                label={drinking[value].name}
              />
            ))}
          </Picker>
          <Text>Please choose amount {make.name}:</Text>
          <Picker
            style={{width: 200}}
            selectedValue={capacity}
            key={drink}
            onValueChange={value => setcapacity(value)}>
            {drinking[drink].models.map((modelName, value) => (
              <Picker.Item
                key={`${drink}_${value}`}
                value={value}
                label={modelName}
              />
            ))}
          </Picker>
          <ThemedButton
            name="bruce"
            type="secondary"
            // backgroundColor="#a82f7a"
            // textColor="#FFFFFF"
            activityColor="#FFFFFF"
            style={styles.button}
            onPress={() => getCurrentDate()}>
            ADD
          </ThemedButton>

          <ThemedButton
            name="bruce"
            type="primary"
            // backgroundColor="#a82f7a"
            // textColor="#FFFFFF"
            activityColor="#FFFFFF"
            style={styles.button}
            onPress={() =>
              navigation.navigate('ThirdScreen', {
                capacity: make.models[capacity],
              })
            }>
            END PARTY
          </ThemedButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const drinking = {
  vodka: {
    name: 'VODKA',
    models: ['20ml', '40ml', '100ml', '0,5l', '1l'],
  },
  beer: {
    name: 'BEER',
    models: ['250ml', '300ml', '500ml', '1l'],
  },
  wine: {
    name: 'WINE',
    models: ['250ml', '300ml', '500ml', '1l'],
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3d9af',
    flexDirection: 'column',
  },
  elementContainer: {
    marginTop: 8,
  },
  heading: {
    fontSize: 22,
    color: 'black',
  },
});

export default SecondScreen;
