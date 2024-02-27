import { Dimensions, Image, ListRenderItem, StyleSheet,  View } from "react-native";
import { MovieTypes } from "../../types/movie";

export const renderMovies: ListRenderItem<MovieTypes> = ({ item }) => {

    return (
        <View style={styles.container}>
           <Image source={{uri : `${process.env.IMAGE_PATH}/${item.poster_path}`}} style={styles.image} />
        </View>
    )
}


const{width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        margin : 5,
        borderRadius : 16,
    },
    title:{},
    image:{
        width : width * 0.3,
        height : height * 0.2,
        borderRadius : 16,
    },
})