import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text} from '../../atoms';
import {colors, fonts} from '../../../utils';
import {HeaderText} from '../../../components';

const Header = ({title, desc, height}) => {
  return (
    <View style={styles.container(height)}>
      <View style={styles.Wrapper}>
        <HeaderText title={title} desc={desc} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: height => ({
    backgroundColor: colors.header,
    paddingVertical: height,
  }),
  Wrapper: {
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent:'center',
    flexDirection: 'row',
  },
  
});
