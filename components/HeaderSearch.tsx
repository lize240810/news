import { StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default function HeaderSearch() {
    return <LinearGradient style={styles.container} colors={['#8C5D3E', '#504249']} start={[0, 0.5]} end={[1, 0.5]}>
        <View style={styles.inputContainer}>
            <AntDesign name="search1" size={24} color="#504249"/>
            <TextInput style={{ padding: 10, flex: 1, color: '#504249' }} placeholder="多学校发布停课通知"/>
        </View>
        <View style={styles.buttonContainer}>
            <FontAwesome name="send" size={24} color="#fff" style={{ marginRight: 5 }}/>
            <Text style={{color: "#fff"}}>发布</Text>
        </View>
    </LinearGradient>
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flexDirection: "row",
        alignItems: "center",
    },
    inputContainer: {
        height: 39,
        borderRadius: 360,
        margin: 10,
        paddingLeft: 10,
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.55)',
        color: '#504249',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainer: {
        marginRight: 10,
        flexDirection: "row",
        alignItems: "center",
        color: '#fff'
    }
})
