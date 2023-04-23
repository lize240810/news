import { Image, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react";


export default function NewItem() {

    const [ImgArr, setImgArr] = useState([
        "https://img.js.design/assets/img/634fb462db248563bf9948ea.png#01237fbf24fe0178e18bc0f2373f6ace",
        "https://img.js.design/assets/img/61658421c7bf4c1a9beb52d2.png#5224cbfa61e57b58736f7ef17005a612",
        "https://img.js.design/assets/img/63f8792db045c20466da8c76.jpg#2b2f0237ed48079e394cc04d411d5478",
        "https://img.js.design/assets/img/616416fb23a87e477ffdab98.png#90677cc90bdc2493591df31bb821ce9b",
        "https://img.js.design/assets/img/634fb462db248563bf9948ea.png#01237fbf24fe0178e18bc0f2373f6ace",
        "https://img.js.design/assets/img/61658421c7bf4c1a9beb52d2.png#5224cbfa61e57b58736f7ef17005a612",
        "https://img.js.design/assets/img/63f8792db045c20466da8c76.jpg#2b2f0237ed48079e394cc04d411d5478",
        "https://img.js.design/assets/img/616416fb23a87e477ffdab98.png#90677cc90bdc2493591df31bb821ce9b"
    ]);


    return <View style={styles.newItem}>
        <View>
            <Text style={styles.newTitle}>像太阳下山，电线杆上的灯和月微微发亮，我对你的喜欢，是一种温柔的坠落。</Text>
            <View style={styles.imgBox}>
                {ImgArr.length === 1 ?
                    <Image source={{ uri: ImgArr[0] }} style={styles.singleImage}/> :
                    <View style={styles.moreImagesContainer}>
                        {ImgArr.map((image, index) =>
                            <Image key={index} source={{ uri: image }} style={styles.moreImages}/>)
                        }
                    </View>
                }
            </View>
        </View>
        <View style={styles.newInfo}>
            <Text style={[styles.newDesc, styles.hot]}>
                <MaterialCommunityIcons name="fire"/> 热搜
            </Text>
            <Text style={[styles.newDesc]}>八-九</Text>
            <Text style={[styles.newDesc]}>520评论</Text>
            <Text style={[styles.newDesc]}>10分钟前</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    newItem: {
        marginTop: 15,
        marginLeft: 13,
        marginRight: 13,
        paddingBottom: 13,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(204, 204, 204, 1)"
    },
    newTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#504249',
        textAlign: "left",
        verticalAlign: "top",
    },
    newInfo: {
        flexDirection: "row",
        marginTop: 5,
        fontSize: 12
    },
    newDesc: {
        color: 'rgba(128, 128, 128, 1)',
        marginRight: 10,
        fontSize: 10
    },
    hot: {
        color: 'rgba(242, 61, 61, 1)'
    },
    imgBox: {
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5,
        overflow: "hidden"
    },
    singleImage: {
        aspectRatio: 2
    },
    twoImagesContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    twoImages: {
        flex: 1,
        height: undefined,
        width: undefined,
        resizeMode: 'repeat',
    },
    moreImagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    moreImages: {
        height: 84,
        width: 120,
        aspectRatio: 1,
        resizeMode: 'cover',
        marginBottom: 10,
    },
});
