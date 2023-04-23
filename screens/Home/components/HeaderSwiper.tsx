import React from "react";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Dimensions, StyleSheet, Text, View } from "react-native";

const colors = ['tomato', 'thistle', 'skyblue', 'teal'];
export default function HeaderSwiper() {
    return <View style={styles.swiper}>
        <SwiperFlatList
            autoplay autoplayLoop showPagination autoplayDelay={2} index={2} data={colors}
            renderItem={({ item }) => (
                <View style={[styles.child, { backgroundColor: item }]}>
                    <Text style={styles.text}>{item}</Text>
                </View>
            )}
        />
    </View>
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    child: { width, justifyContent: 'center' },
    text: { fontSize: width * 0.2, textAlign: 'center' },
    swiper: {
        width: 393, height: 187
    }
});
