import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HotItem({ title, index, hotnum }: { title: string, index: number, hotnum: number }) {
    return <View style={styles.container}>
        <Text style={{ marginRight: 15 }}>{index + 1}</Text>
        <Text>
            {title}
            {hotnum > 5000000 && <MaterialCommunityIcons name="fire" size={18} color="#F23D3D"/>}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
        marginLeft: 10,
        marginRight: 10,
        fontSize: 16
    }
})
