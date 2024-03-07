import { ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/header'
import FeaturedMovie from '../../components/featuredMovie'
import { MovieTypes } from '../../types/movie'

import { TvShowsTypes } from '../../types/tvshows'
import ContentListContainer, { fadeDirection } from '../../components/contentList/contentListContainer'
import ContentLayout from '../../layouts/contentLayout'


type HomeScreenContainerPropsType = {
    trendingMovies: Array<MovieTypes>,
    trendingTVShows: Array<TvShowsTypes>,
    popularMovies: Array<TvShowsTypes>,
    popularTVShows: Array<MovieTypes>,
}
const HomeScreenContainer: React.FC<HomeScreenContainerPropsType> = ({
    popularMovies,
    trendingMovies,
    popularTVShows,
    trendingTVShows,
}) => {


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginTop: 16, alignItems: 'center', paddingBottom: 30 }}>

            <ContentLayout>

            <Header activeScreen='Home'  />
            <FeaturedMovie content={trendingMovies[0]} />

            <ContentListContainer title='Trend Movies' content={trendingMovies} fadeDirection={fadeDirection.FadeInRight} delaytime={400} />
            <ContentListContainer title='Trend TV Shows' content={trendingTVShows} fadeDirection={fadeDirection.FadeInRight} delaytime={900} />
            <ContentListContainer title='Popular Movies' content={popularMovies} fadeDirection={fadeDirection.FadeInLeft} delaytime={100} />
            <ContentListContainer title='Popular TV Shows' content={popularTVShows} fadeDirection={fadeDirection.FadeInLeft} delaytime={600} />

        </ContentLayout>


        </ScrollView >
    )
}

export default HomeScreenContainer
