import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import { logo} from '../../assets';
import {Text} from '../../components';
import {colors} from '../../utils';

const Splashscreen = ({navigation}) => {
  useEffect(() => {
        setTimeout(() => {
          navigation.replace('Home');
        }, 1500);
  }, []);
  return (
    <View style={styles.page}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.title}>TEST</Text>
      <Text style={styles.title}>MISBAHUL KHOIR</Text>
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight:'bold',
    color: colors.text.primary,
  },
  image: {
    width:'50%',
    height: 80,
  },
});
