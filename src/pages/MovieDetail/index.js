import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    colors,
    fonts,
    IMAGE_URL
} from '../../utils'
import {
    ScrollView,
    StyleSheet,
    View,
    Image
} from 'react-native'
import { Gap, Header, IconStar, Text } from '../../components'
import { detailMovieAction } from '../../redux/actions/movie'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import moment from 'moment'


const MovieDetail = ({route}) => {
    const data = useSelector(state => state.detailMovieReducer.data)
    const id = route?.params?.id
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(detailMovieAction(id))
    }, []);

    return (
        <>
            <View style={styles.container}>
            <Header title="Detail Movie"height={10} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.wrapper}>
                    <Image
                        style={styles.imageContent}
                        source={{ uri: `${IMAGE_URL}${data.backdrop_path}` }}
                    />
                    <View style={styles.wraprating}>
                        <Text style={styles.title}>{data.title}</Text>
                        <View style={{flexDirection:'row', paddingTop:20, paddingBottom:10, alignSelf:'center' }}>    
                                <AnimatedCircularProgress
                                    size={50}
                                    width={3}
                                    fill={data.vote_average*10}
                                    tintColor="#00e0ff"
                                    backgroundColor="#3d5875">
                                    {
                                        (fill) => (
                                        <Text>
                                            { data.vote_average }
                                        </Text>
                                        )
                                    }
                                </AnimatedCircularProgress>
                            <View style={{flexDirection:'row', paddingTop:10, marginLeft:10 }}>
                                <IconStar size={22} filled color="#FFEB3B" />
                                <Text style={styles.ratingPoint}>{data.vote_average/2}</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.desc}>{data.release_date}</Text>
                        {data && data.genres.map((item,index)=>(
                            <Text style={styles.desc}>- {item.name}</Text>
                        ))}
                    </View>
                    <Text style={styles.tagline(data.tagline)}>{data.tagline}</Text>
                    <Text style={styles.desc}>{data.overview}</Text>
                </View>
                <Gap height={20}/>
            </ScrollView>
            </View>
        </>
    )
}

export default MovieDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    content: { paddingHorizontal:15 },
    wrapper: {
        backgroundColor: colors.white,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 10,
        marginTop: 10,
    },
    imageContent:{
        width:'100%',
        height:400
    },
    title: {
        flex: 1,
        fontFamily: fonts.primary[500],
        color: colors.text.primary,
        fontSize: 40,
        fontWeight:'bold',
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal:1,
        textAlign:'center',
        
    },
   
    tagline: (tag)=>({
        fontFamily: fonts.primary[400],
        color: colors.text.primary,
        fontSize: 20,
        paddingVertical: tag ? 10 : 0
    }),
    desc: {
        fontFamily: fonts.primary[400],
        color: colors.text.primary,
        fontSize: 14,
        paddingVertical: 10
    },
    wraprating:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    ratingPoint:
    {
        fontSize: 18,
        marginLeft: 5,
    }
})