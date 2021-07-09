import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

// Local Imports
import Card from './src/components/Card';
import Footer from './src/components/Footer';

// Data
import {workers} from './data/workers';

// Types
import {WorkerData} from './data/types';

const NoMoreCards: React.FC = () => (
  <View style={styles.noMoreCards}>
    <Text>No more cards</Text>
  </View>
);

type AppProps = {cards: Array<WorkerData>};

type AppState = {
  cards: Array<WorkerData>;
  outOfCards: boolean;
  currentCard: number;
};

class Workers extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      cards: workers,
      outOfCards: false,
      currentCard: 0,
    };
  }

  handleYup(card: WorkerData) {
    console.log('yup');
    console.log(card);
  }

  handleNope(card: WorkerData) {
    console.log('nope');
    console.log(card);
  }

  cardRemoved(index: number) {
    console.log(`The index is ${index}`);

    this.setState({currentCard: index});
  }

  render() {
    console.log(`current Index : ${this.state.currentCard}`);

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('./img/logo2.png')} />
          <Text style={styles.title}>Position: Stunt double</Text>
        </View>
        <View style={styles.cardContainer}>
          <SwipeCards
            cards={this.state.cards}
            loop={false}
            renderCard={(cardData: WorkerData) => <Card {...cardData} />}
            renderNoMoreCards={() => <NoMoreCards />}
            handleYup={this.handleYup}
            handleNope={this.handleNope}
            cardRemoved={this.cardRemoved.bind(this)}
          />
        </View>
        <Footer />
      </SafeAreaView>
    );
  }
}

export default Workers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9c9c9',
  },

  // HEADER
  header: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'grey',
  },
  logo: {
    resizeMode: 'contain',
    height: '80%',
    width: 300,
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    color: '#494747',
  },

  // BODY
  cardContainer: {
    flex: 1,
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
