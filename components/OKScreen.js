import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { doctor } from '../src/Data';

const OKScreen = ({ route, navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.box}
      onPress={() => {
        navigation.navigate('Doctor', {
          name: 'Терапевт',
          doctor: doctor[0],
        });
      }}>
      <Image style={styles.image} source={require('../assets/tera.jpg')} />
      <Text style={styles.header}>Терапевт</Text>
      <Text style={styles.text}>Спеціаліст загального профілю</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.box}
      onPress={() => {
        navigation.navigate('Doctor', {
          name: 'Педіатр',
          doctor: doctor[1],
        });
      }}>
      <Image style={styles.image} source={require('../assets/pediatr.jpg')} />
      <Text style={styles.header}>Педіатр</Text>
      <Text style={styles.text}>Діти та підлітки</Text>
      <Text></Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.box}
      onPress={() => {
        navigation.navigate('Doctor', {
          name: 'Гінеколог',
          doctor: doctor[2],
        });
      }}>
      <Image style={styles.image} source={require('../assets/gyne.jpg')} />
      <Text style={styles.header}>Гінеколог</Text>
      <Text style={styles.text}>Жіночі захворювання</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.box}
      onPress={() => {
        navigation.navigate('Doctor', {
          name: 'Дерматолог',
          doctor: doctor[3],
        });
      }}>
      <Image style={styles.image} source={require('../assets/derm.jpg')} />
      <Text style={styles.header}>Дерматолог</Text>
      <Text style={styles.text}>Захворювання шкіри</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.box}
      onPress={() => {
        navigation.navigate('Doctor', {
          name: 'Отоларинголог',
          doctor: doctor[4],
        });
      }}>
      <Image style={styles.image} source={require('../assets/lor.jpg')} />
      <Text style={styles.header}>Отоларинголог</Text>
      <Text style={styles.text}>Захворювання вух, горла, носа</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.box}
      onPress={() => {
        navigation.navigate('Doctor', {
          name: 'Гастроентеролог',
          doctor: doctor[5],
        });
      }}>
      <Image style={styles.image} source={require('../assets/gastro.jpg')} />
      <Text style={styles.header}>Гастроентеролог</Text>
      <Text style={styles.text}>Розлади органів травної системи</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#eee',
  },
  box: {
    width: '45%',
    height: '30%',
    borderRadius: 25,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '80%',
    height: '60%',
    borderRadius: 25,
  },
  header: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    color: '#a9a9a9',
    textAlign: 'center',
  },
});

export default OKScreen;
