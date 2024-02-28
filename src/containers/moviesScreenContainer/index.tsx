import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native'
import React from 'react'
import { MovieTypes } from '../../types/movie'
import MovieCard from '../../components/movieCard'

type moviesScreenContainerProps = {
    movie : Array<MovieTypes> | [],
}
const MoviesScreenContainer : React.FC<moviesScreenContainerProps> = ({movie = []}) => {



    const renderMovies: ListRenderItem<MovieTypes> = ({ item, index }) => <MovieCard movieItem={item} index={index} />
  
    return (
    <View>
      <FlatList 
        data={movie}
        renderItem={renderMovies}
        numColumns={2}
        contentContainerStyle={{alignItems:'center'}}
    
        />
    </View>
  )
}

export default MoviesScreenContainer

const styles = StyleSheet.create({})