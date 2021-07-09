import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {WorkerData} from '../../data/types';

const Card: React.FC = ({image, name}: WorkerData) => {
  return (
    <View style={styles.card}>
      <Image style={styles.thumbnail} source={{uri: image}} />
      <Text style={styles.workerName}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    width: '70%',
    padding: 20,
    borderRadius: 8,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    width: 300,
    height: 400,
  },
  workerName: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    color: '#494747',
  },
});

export default Card;
