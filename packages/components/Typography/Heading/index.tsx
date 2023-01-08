import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {HeadingTypes} from './headingTypes';

export default function ({title, wrapperStyle}: HeadingTypes) {
  return (
    <View style={[wrapperStyle]}>
      <Text style={styles.headingStyle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headingStyle: {
    fontWeight: '700',
    color: 'black',
    fontSize: 20,
  },
});
