import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {  colors, fonts, IMAGE_URL } from '../../../utils'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { IconStar } from '../Icon'
import moment from 'moment'

const Card = ({ id, image, title, date, vote_average, navigation }) => {

    
    return (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={()=>{navigation.navigate('MovieDetail',{id})}}
            >
            <Image
                style={styles.imageContent}
                source={{ uri: `${IMAGE_URL}${image}` }}
            />
            <View style={{padding:5}}>
            <Text style={styles.itemName}>{title}</Text>
             <Text style={styles.itemName}> {moment(date.split(' ')[0]).format(
                                     'DD MMMM YYYY'
                                 )}  {date.split(' ')[1]}</Text>
            <View style={{flexDirection:'row', padding:10, justifyContent:'space-between'}}>     
                <AnimatedCircularProgress
                    size={40}
                    width={4}
                    fill={vote_average*10}
                    tintColor="#00e0ff"
                    backgroundColor="#3d5875">
                    {
                        (vote_average) => (
                        <Text>
                            { vote_average }
                        </Text>
                        )
                    }
                    </AnimatedCircularProgress>
                <View style={{flexDirection:'row', paddingTop:8}}>     
                <IconStar size={22} filled color="#FFEB3B" />
                <Text style={styles.ratingPoint}>{vote_average/2}</Text>
                </View>
            </View>
            </View>
             
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'flex-end',
    },
    imageContent: {
        height: undefined,
        aspectRatio: 1 / 1,
        borderRadius: 5
    },
    itemName: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 16,
        color: colors.text.primary,
        fontFamily: fonts.primary[500],
        textAlign:'center'
    },
    ratingPoint:
    {
        fontSize: 18,
        marginLeft: 5,
    }
})
