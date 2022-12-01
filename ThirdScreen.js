import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  ImageBackground,
  Dimensions,
  AppRegistry,
  processColor,
} from 'react-native';

import {LineChart} from 'react-native-charts-wrapper';
import moment from 'moment';

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

// const originalWidth = 210;
// const originalHeight = 297;
// const aspectRatio = originalWidth / originalHeight;
// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;
var date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss a');
console.log(date);

function ThirdScreen({route, navigation, props}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <LineChart
            style={styles.chart}
            xAxis={{
              granularityEnabled: true,
              granularity: 1,
              valueFormatter: ['Jan', 'Feb', 'Mar'],
            }}
            data={{
              dataSets: [
                {
                  values: [{y: 100}, {y: 105}, {y: 102}],
                  label: 'Bar dataSet',
                  config: {
                    color: processColor('teal'),
                    barShadowColor: processColor('lightgrey'),
                    highlightAlpha: 90,
                    highlightColor: processColor('red'),
                  },
                },
              ],
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  chart: {
    flex: 1,
    width: '100%',
    height: 300,
  },
});

export default ThirdScreen;
