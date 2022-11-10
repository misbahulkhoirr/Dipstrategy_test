import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Gap } from '../../../components';
import { Card } from '../../atoms';

import { colors, screenWidth, fonts } from '../../../utils';

const Movie = ({data,
  aspectRatio,
  columns,
  columnSpacing,
  disableSpacing,
  containerPadding,
  navigation,
}) => {
  const currAspRatio = aspectRatio ? aspectRatio : 1 / 1
    const currColumns = columns ? (columns > 6 ? 6 : columns) : 2
    const currSpacing = columnSpacing ? columnSpacing : 10
    const columnWidth =
        (containerPadding ? screenWidth - containerPadding * 2 : screenWidth) /
            currColumns -
        (currSpacing - currSpacing / currColumns)

  return (
    <FlatList
      style={{
      padding: containerPadding ? containerPadding : 0}}
      data={data.results}
      renderItem={({ item, index }) => (
            <>
                <View
                    style={styles.columnWrapper(
                        columnWidth,
                        currAspRatio,
                        currColumns,
                        currSpacing,
                        disableSpacing,
                        index
                    )}>
                    <Card
                        id={item.id}
                        image={
                          item.poster_path
                        }
                        title={item.title}
                        date={item.release_date}
                        vote_average={item.vote_average}
                        navigation={navigation}
                    />
                </View>
            </>
        )}
        keyExtractor={item => item.id}
        numColumns={currColumns}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={<Gap height={20} />}
    />
  );
};

export default Movie;

const styles = StyleSheet.create({
columnWrapper: (width, aspRatio, cols, spacing, disableSpacing, index) => ({
  flex:1,
  width: width,
  marginRight: disableSpacing
      ? 0
      : (index + 1) % cols !== 0
      ? spacing
      : 0,
  marginBottom: disableSpacing ? 0 : spacing,
  borderWidth: 1,
  borderColor: '#f3f3f3',
  borderRadius: 8,
  backgroundColor: colors.white
}),
emptyCartWrapper: { alignItems: 'center', paddingTop: 50 },
emptyCartText: {
  color: colors.text.secondary,
  fontFamily: fonts.primary[400],
  fontSize: 16,
  marginTop: 10
},
buttonLoad: {
  marginHorizontal: 20
}
});
