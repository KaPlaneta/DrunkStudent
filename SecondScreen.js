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
import moment from 'moment';

const drinking = {
  vodka: {
    name: 'VODKA',
    models: ['25ml', '40ml', '100ml', '200ml'],
  },
  beer: {
    name: 'BEER',
    models: ['250ml', '300ml', '500ml'],
  },
  wine: {
    name: 'WINE',
    models: ['250ml', '300ml', '500ml'],
  },
};

const percent = {
  vodka: 0.4,
  beer: 0.05,
  wine: 0.14,
};

function getPureAlcohol(capacity, drink) {
  return parseInt(drinking[drink].models[capacity]) * percent[drink];
}

function SecondScreen({route, navigation}) {
  const [date, setDate] = React.useState([]);
  const [pureAlcohol, setPureAlcohol] = React.useState([]);

  const [drink, setDrink] = React.useState('vodka');
  const [capacity, setCapacity] = React.useState(0);
  const make = drinking[drink];
  const selectionString = make.name + ' ' + make.models[capacity];

  const getCurrentDate = () => {
    const currentDate = moment().utcOffset('+0').format('DD.MM hh:mm a');

    const currentPureAlcohol = getPureAlcohol(capacity, drink);
    setDate([...date, currentDate]);
    console.log(pureAlcohol);

    let lastElement = pureAlcohol[pureAlcohol.length - 1]; //last element in array
    if (pureAlcohol.length == 0) {
      lastElement = 0;
    }
    setPureAlcohol([...pureAlcohol, lastElement + currentPureAlcohol]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Text>Choose drink:</Text>
          <Picker
            style={{width: 200}}
            selectedValue={drink}
            onValueChange={value => {
              setDrink(value);
              setCapacity(0);
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
            onValueChange={value => setCapacity(value)}>
            {drinking[drink].models.map((modelName, value) => (
              <Picker.Item
                key={`${drink}_${value}`}
                value={value}
                label={modelName}
              />
            ))}
          </Picker>
          <Button
            title="ADD"
            color="#70431d"
            onPress={() => getCurrentDate()}
          />

          <Text>You selected: {selectionString}</Text>
          <Text style={[{color: '#e3d9af'}]}>
            You
            selectedjdsbkjbdskjbkbsdkbckjsdkjvckjsdbcjkkdjscdkjjdsjcjbjcbcckcbjkc
          </Text>

          <Button
            title="END PARTY"
            color="#70431d"
            onPress={() =>
              navigation.navigate('ThirdScreen', {
                date: date,
                pureAlcohol: pureAlcohol,
              })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
