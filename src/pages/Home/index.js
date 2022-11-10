import { useIsFocused } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {Movie, Gap, Header, Text, TopTabNavigator} from '../../components';
import { allMovieAction } from '../../redux/actions/movie';
import {colors, fonts} from '../../utils';

const Home = ({navigation}) => {
  const isFocused = useIsFocused()
  const data = useSelector(state => state.allMovieReducer.data)
  const dispatch = useDispatch();

  const [label, setLabel] = useState()
  const [tabList, setTabList] = useState([
    { name:'popular', label: 'Popular' },
    { name:'now_playing', label: 'Now Playing' },
    { name:'upcoming', label: 'Up Coming' },
    { name:'top_rated', label: 'Top Rated' },
    
])
const [tabName, setTabName] = useState({
  label: 'Popular'
})
const [initialName, setInitialName] = useState(false)

const getData = (name) => {
  dispatch(allMovieAction(name))

  if (name === 'popular') {
      setTabName({ label: 'Popular' })
      setInitialName(false)
  } else if (name === 'now_playing') {
      setTabName({ label: 'Now Playing' })
      setInitialName(false)
  } else if (name === 'upcoming') {
      setTabName({ label: 'Up Coming' })
      setInitialName(false)
  } else if (name === 'top_rated') {
      setTabName({ label: 'Top Rated' })
      setInitialName(false)
  } 
}

  useEffect(() => {
    getData('popular')
  }, [isFocused]);
console.log('data', data);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Welcome" desc="Dipstrategy Movie" height={20} />
        <View style={styles.content}>
        
            <TopTabNavigator
                setLabel={setLabel}
                tabNavigator={{
                    setLabel: setLabel,
                    tabList: tabList,
                    initialTabName: tabName.label,
                    onTabItemPress: name =>
                    getData(name),
                    initialName: initialName
                }}
            />
       
          <Movie 
          data={data}
          aspectRatio={1 / 1.15}
          containerPadding={15}
          navigation={navigation}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    marginBottom: 20,
  },
  imageWrapper: {alignItems: 'center'},
  image: {
    resizeMode: 'contain',
    width: 185,
    height: 185,
  },
  cardWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
