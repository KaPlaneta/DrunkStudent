import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, View, processColor} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';
import moment from 'moment';

function ThirdScreen({route, navigation, props}) {
  const {date, pureAlcohol} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <BarChart
            style={styles.chart}
            xAxis={{
              granularityEnabled: true,
              granularity: 1,
              valueFormatter: date,
            }}
            data={{
              dataSets: [
                {
                  values: pureAlcohol,
                  label: 'Pure alcohol consumption over time',
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
  },
});

export default ThirdScreen;
