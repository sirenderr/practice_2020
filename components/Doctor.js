import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Doctor = ({ route, navigation }) => {
  let imgName;
  switch (route.params.doctor.img) {
    case 'tera.jpg':
      imgName = require('../assets/tera.jpg');
      break;
    case 'pediatr.jpg':
      imgName = require('../assets/pediatr.jpg');
      break;
    case 'gyne.jpg':
      imgName = require('../assets/gyne.jpg');
      break;
    case 'derm.jpg':
      imgName = require('../assets/derm.jpg');
      break;
    case 'lor.jpg':
      imgName = require('../assets/lor.jpg');
      break;
    case 'gastro.jpg':
      imgName = require('../assets/gastro.jpg');
      break;
  }
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState('');
  const [choise, setChoise] = useState('');
  const handlePicker = (datetime) => {
    setVisible(false);
    setDate(moment(datetime).format('MMMM Do YYYY, h:mm:ss a'));
    navigation.navigate('Home', {
      screen: 'Chat',
      params: { date: moment(datetime).format('MMMM Do YYYY, h:mm:ss a') },
    });
  };
  const showPicker = () => {
    setVisible(true);
  };
  const Item = ({ title }) => (
    <View>
      <TouchableOpacity style={styles.item} onPress={showPicker}>
        <Image
          style={{ width: 50, height: 50, marginRight: 20 }}
          source={require('../assets/me.jpg')}
        />
        <Text style={{fontSize: 16}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
  const renderItem = ({ item }) => <Item title={item} />;

  return (
    <View style={styles.container}>
      <DateTimePickerModal
        isVisible={visible}
        onConfirm={handlePicker}
        mode={'datetime'}
      />
      <Image style={styles.img} source={imgName} />
      <Text style={styles.text}>{route.params.doctor.description}</Text>
      <View style={styles.line}></View>
      <Text style={styles.text}>Наші лікарі</Text>
      <SafeAreaView>
        <FlatList data={route.params.doctor.list} renderItem={renderItem} />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  img: {
    alignItems: 'center',
    width: '100%',
    height: '30%',
    resizeMode: 'contain',
    borderRadius: 25,
    borderColor: 'purple',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  item: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "center",
    backgroundColor: 'white',
    marginVertical: 8,
    borderWidth: 1,
    borderColor: 'black'
  },
});
export default Doctor;
