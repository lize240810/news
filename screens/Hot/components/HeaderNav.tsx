import React, { useState } from "react";

import { Pressable, StyleSheet, Text, View } from "react-native";

const navArray = ['热搜榜', '本地榜', '娱乐榜', '体育榜', '财经榜']
export default function HeaderNav() {

    const [navIdx, setNavIdx] = useState(0);

    return <View style={styles.navContainer}>
        {
            navArray.map((item, idx) =>
                <Pressable onPress={() => setNavIdx(idx)} key={idx} style={styles.navBox}>
                    <Text style={[styles.navItem, navIdx === idx && styles.navItemActive]}>{item}</Text>
                    {navIdx === idx && <View style={styles.triangle}/>}
                </Pressable>)
        }
    </View>
}

const styles = StyleSheet.create({
    navContainer: {
        backgroundColor: '#8D5D3D',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        flexDirection: "row",
        height: 42,
        alignItems: "flex-end"
    },
    navItemActive: {
        color: '#fff',
    },
    navBox: {
        marginLeft: 20,
        flexDirection: "row",
        height: '75%',
        justifyContent: "center",
        overflow: "hidden"
    },
    navItem: {
        color: '#C39E89',
    },
    triangle: {
        position: "absolute",
        borderRightWidth: 10,
        borderTopWidth: 10,
        bottom: -5,
        borderTopColor: "#fff",
        borderStyle: "solid",
        borderRightColor: "transparent",
        transform: [{ rotate: "45deg" }],
    },
})
