import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import NewItem from "../../components/NewItem";
import HeaderSwiper from "./components/HeaderSwiper";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HeaderSearch from "../../components/HeaderSearch";
import Hot from "../Hot";

const listData = [{ key: 'Devin' }, { key: 'Dan' }, { key: 'Dominic' }]

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
    return <FlatList data={listData} renderItem={item => <NewItem/>} ListHeaderComponent={<HeaderSwiper/>}/>
}

function Home2Screen() {
    return <View>
        <Text>Home2Screen</Text>
    </View>
}


export default function Home() {
    return <View style={styles.container}>
        <HeaderSearch/>
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 16, color: '#504249' },
                tabBarActiveTintColor: '#8D5D3D',
                tabBarItemStyle: { width: 70 },
                // tabBarGap: 10,
                // tabBarStyle: { backgroundColor: 'powderblue' },
                tabBarIndicatorStyle: {
                    backgroundColor: '#8D5D3D',
                    width: 50,
                    marginBottom: 5,
                    marginLeft: 10
                },
            }}>
            <Tab.Screen name="Top" component={HomeScreen} options={{ title: "首页" }}/>
            <Tab.Screen name="Hot" component={Hot} options={{ title: "热榜" }}/>
            <Tab.Screen name="Home2" component={Home2Screen} options={{ title: "推荐" }}/>
        </Tab.Navigator>
    </View>
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    viewPager: {
        flex: 1,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
