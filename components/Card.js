import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  Picker
} from 'react-native';
import Constants from 'expo-constants';
import DatePicker from 'react-native-datepicker';
import Avatar from './Avatar'

export default class Card extends React.Component {
  state = {
    name: null,
    illness: null,
    allerg: null,
    blood: '0 Rh+',
    weight: null,
    height: null,
    date: '3-10-2000',
    isFocused: false,
  };
  toggle = () => {
    if (this.state.editable) {
      this.setState({ editable: false });
    } else {
      this.setState({ editable: true });
    }
  };
  handleFocus = (event) => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };
  render() {
    const { onFocus } = this.props;
    return (
      <View style={styles.container}>
      <View style={styles.person}>
      <View style={styles.name}>
      <TextInput
          style={styles.textinput}
          placeholder={'Ім`я'}
          onChangeText={(text) => this.setState({ name: text })}
          selectionColor={'#694fad'}
          underlineColorAndroid={this.state.isFocused ? '#694fad' : 'd3d3d3'}
          onFocus={this.handleFocus}
        />
        <TextInput
          style={styles.textinput}
          placeholder={'Прізвище'}
          onChangeText={(text) => this.setState({ name: text })}
          selectionColor={'#694fad'}
          underlineColorAndroid={this.state.isFocused ? '#694fad' : 'd3d3d3'}
          onFocus={this.handleFocus}
        />
        <DatePicker
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          onDateChange={(date) => {
            this.setState({ date: date });
          }}
          showIcon={false}
        />
        </View>
        <Avatar/>
        </View>
      
        <Text>Захворювання</Text>
        <TextInput
          placeholder={'Опишіть ваші захворювання'}
          style={styles.textinput}
          onChangeText={(text) => this.setState({ illness: text })}
          selectionColor={'#694fad'}
          underlineColorAndroid={this.state.isFocused ? '#694fad' : 'd3d3d3'}
          onFocus={this.handleFocus}
        />
        <Text>Алергічні реакції</Text>
        <TextInput
          style={styles.textinput}
          placeholder={'Речовини, що викликають алергічну реакцію'}
          onChangeText={(text) => this.setState({ name: text })}
          selectionColor={'#694fad'}
          underlineColorAndroid={this.state.isFocused ? '#694fad' : 'd3d3d3'}
          onFocus={this.handleFocus}
        />
        <Text>Медикаменти</Text>
        <TextInput
          style={styles.textinput}
          placeholder={'Ліки, що ви приймаєте'}
          onChangeText={(text) => this.setState({ name: text })}
          selectionColor={'#694fad'}
          underlineColorAndroid={this.state.isFocused ? '#694fad' : 'd3d3d3'}
          onFocus={this.handleFocus}
        />
        <Text>Вага</Text>
        <TextInput
          style={styles.textinput}
          placeholder={'Ваша вага'}
          onChangeText={(text) => this.setState({ name: text })}
          selectionColor={'#694fad'}
          underlineColorAndroid={this.state.isFocused ? '#694fad' : 'd3d3d3'}
          onFocus={this.handleFocus}
        />
        <Text>Зріст</Text>
        <TextInput
          style={styles.textinput}
          placeholder={'Ваш зріст'}
          onChangeText={(text) => this.setState({ name: text })}
          selectionColor={'#694fad'}
          underlineColorAndroid={this.state.isFocused ? '#694fad' : 'd3d3d3'}
          onFocus={this.handleFocus}
        />
        <Text>Группа крові</Text>
        <Picker
          selectedValue={this.state.blood}
          onValueChange={(value) => this.setState({ blood: value })}
          >
          <Picker.Item label="O Rh+" value="O Rh+" />
          <Picker.Item label="A Rh+" value="A Rh+" />
          <Picker.Item label="B Rh+" value="B Rh+" />
          <Picker.Item label="AB Rh+" value="AB Rh+" />
          <Picker.Item label="O Rh-" value="O Rh-" />
          <Picker.Item label="A Rh-" value="A Rh-" />
          <Picker.Item label="B Rh-" value="B Rh-" />
          <Picker.Item label="AB Rh-" value="AB Rh-" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#eee',
    paddingHorizontal: 20,
  },
  textinput: {
    height: 40,
    paddingLeft: 6,
  },
  person: {
    flexDirection:"row",
    flexWrap: "wrap",
    justifyContent:"space-evenly",
    paddingBottom: 20
  },
  name: {
    width: '40%',
    justifyContent: 'center'
  }
});
