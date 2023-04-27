import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import NewItem from "../../components/NewItem";
import Header from "./components/Header";

const listData = [{ key: 'Devin' }, { key: 'Dan' }, { key: 'Dominic' }]
const Me = () => (
    <View style={styles.screen}>
        <FlatList data={listData} renderItem={item => <NewItem/>} ListHeaderComponent={<Header/>}/>
    </View>
)

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        flex: 1,
    },
    title: {
        padding: 20,
        fontSize: 42,
    },
})

export default Me
