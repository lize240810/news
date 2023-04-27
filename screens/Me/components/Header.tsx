import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';


import React from "react";

export default function Header() {
    return <LinearGradient style={styles.container} colors={['#8C5D3E', '#504249']} start={[0, 0.5]} end={[1, 0.5]}>
        <View style={styles.message}>
            <AntDesign name="message1" size={24} color="#fff"/>
        </View>
        <View style={styles.infoWrapper}>
            <View style={styles.avatarWrapper}>
                <Image style={styles.avatar}
                       source={{ uri: "https://img.js.design/assets/img/634fb462db248563bf9948ea.png#01237fbf24fe0178e18bc0f2373f6ace" }}/>
            </View>
            <View>
                <Text style={styles.userName}>八-九</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={[styles.fontColorWhite, styles.fontSize12, styles.marginRight10]}>粉丝 520</Text>
                <Text style={[styles.fontColorWhite, styles.fontSize12]}>关注 119</Text>
            </View>
            <View style={styles.userDesc}>
                <Text style={[styles.fontColorWhite, styles.fontSize12]}>终有绿洲摇曳在沙漠。又重复幸福，
                    不断地重负决绝</Text>
            </View>
        </View>
        <View style={styles.navBtnWrapper}>
            <View style={styles.navBtnActive}>
                <Text style={[styles.navBtnTxt, styles.fontSize18]}>105</Text>
                <Text style={styles.navBtnTxt}>创作</Text>
            </View>
            <View>
                <Text style={[styles.navBtnTxt, styles.fontSize18]}>105</Text>
                <Text style={styles.navBtnTxt}>喜欢</Text>
            </View>
            <View>
                <Text style={[styles.navBtnTxt, styles.fontSize18]}>105</Text>
                <Text style={styles.navBtnTxt}>收藏</Text>
            </View>
        </View>
    </LinearGradient>
}

const styles = StyleSheet.create({
    fontSize18: {
        fontSize: 18
    },
    fontSize12: {
        fontSize: 12
    },
    marginRight10: {
        marginRight: 10
    },
    fontColorWhite: {
        color: '#fff',
    },
    container: {
        flex: 1,
        // height: 413,
        padding: 13,
        color: '#fff',
        backgroundColor: 'red'
    },
    message: {
        position: "absolute",
        right: 0,
        margin: 30
    },
    avatarWrapper: {
        marginTop: 50
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 360,
    },
    infoWrapper: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    userName: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: "700",
        color: "#fff"
    },
    userInfo: {
        flexDirection: "row",
        color: "#fff",
        marginTop: 7
    },
    userDesc: {
        marginTop: 10
    },
    navBtnWrapper: {
        height: 81,
        backgroundColor: "#fff",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 8,
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 20,
    },
    navBtnActive: {
        borderBottomWidth: 3,
        borderBottomColor: "#805740",
    },
    navBtnTxt: {
        fontSize: 20,
        fontWeight: "700",
        color: '#805740'
    }
})
