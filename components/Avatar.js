import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View, Platform, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

export default function Avatar() {
  const [image, setImage] = useState(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setVisible(false);
    }
  };

  return (
    <TouchableOpacity
      title="Pick an image from camera roll"
      onPress={pickImage}>
      <View
        style={{
          width: 200,
          height: 200,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: '#694fad',
          borderWidth: 3,
          borderRadius: 100,
        }}>
        {visible && <Text>Оберіть зображення</Text>}
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
