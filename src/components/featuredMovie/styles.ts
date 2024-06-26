import { Dimensions, StyleSheet } from "react-native"
import { colors } from "../../styles/colors"
const {  height } = Dimensions.get('screen')


export default  StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 15,
    },
    info_container: {
        width: '100%',
        height: height * 0.5,
        borderRadius: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        resizeMode : 'cover'
    },
    info_bottom_content: {
        position: 'absolute',
        bottom: 10,
        left: 30,
        right: 30,
        height: '35%',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 15,
    },
    top_text_container:{
        backgroundColor:'red',
        width : '50%',
        paddingVertical: 7,
        alignItems:'center',
        borderRadius : 15,
    },
    top_text: {
        color : colors.primary,
        fontSize : 20,
        fontWeight :'bold'
    },
})