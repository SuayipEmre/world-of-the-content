import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useFetchMoviesBySearchQuery } from '../../store/features/APIs/movies'
import MovieScreensContainer from '../../containers/movieScreensContainer'
import { colors } from '../../styles/colors'
import { MainNavigatorStackParamList } from '../../navigators/types'
import Error from '../../components/errorAnimation'
import Loading from '../../components/loading'
import { MovieTypes } from '../../types/movie'
import { TvShowsTypes } from '../../types/tvshows'
import MovieCard from '../../components/movieCard'
import { useFetchTVShowsBySearchValueQuery } from '../../store/features/APIs/tvseries'


type ProfileProps = NativeStackScreenProps<MainNavigatorStackParamList, 'ContentBySearchScreen'>

const ContentBySearchScreen: React.FC<ProfileProps> = ({ route, navigation }) => {

  const { value, activeSearchContent } = route.params
  console.log('active search', activeSearchContent);


  const { data: moviesData, isLoading: moviesLoading, isError: moviesError } = useFetchMoviesBySearchQuery(value, {
    skip : activeSearchContent != 'Movie'
  })
  const { data: tvData, isLoading: tvLoading, isError: tvError } = useFetchTVShowsBySearchValueQuery(value,{
    skip: activeSearchContent != 'Tv'
  })

  const renderMovies: ListRenderItem<MovieTypes | TvShowsTypes> = ({ item, index }) => <MovieCard movieItem={item} index={index} />


  if (activeSearchContent == 'Tv') {
    if (tvError) return <Error />
    else if (tvLoading) return <Loading />
  } 
  else if  (activeSearchContent == 'Movie'){
    if (moviesError) return <Error />
    else if (moviesLoading) return <Loading />
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={activeSearchContent == 'Tv' ? tvData.results : moviesData.results}
        renderItem={renderMovies}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}

      />
    </View>
  )
}

export default ContentBySearchScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.third,
    flex: 1,
  }
})