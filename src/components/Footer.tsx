import React from 'react';

import {StyleSheet, View, Image, TouchableHighlight, Alert} from 'react-native';

const Footer: React.FC = ({}) => {
  return (
    <View style={styles.actions}>
      <TouchableHighlight
        onPress={() => {
          console.log('No');
          Alert.alert('Unfortunately this doesnt work.');
        }}
        style={styles.actionButton}>
        <Image
          source={require('../../img/no.png')}
          style={styles.actionBackground}
        />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          console.log('Yes');
          Alert.alert('Unfortunately this doesnt work either.');
        }}
        style={styles.actionButton}>
        <Image
          source={require('../../img/yes.png')}
          style={styles.actionBackground}
        />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  actionButton: {
    width: 80,
    height: 80,
  },
  actionBackground: {
    width: 80,
    height: 80,
  },
});

export default Footer;
