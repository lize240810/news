import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import NewItem from "./NewItem";
import HeaderSwiper from "./components/HeaderSwiper";

const listData = [{ key: 'Devin' }, { key: 'Dan' }, { key: 'Dominic' }]

export default function Home() {
    return <View style={styles.container}>

        <FlatList data={listData} renderItem={item => <NewItem/>} ListHeaderComponent={<HeaderSwiper/>}/>

    </View>
}

const styles = StyleSheet.create({
    container: { flex: 1 },
});
