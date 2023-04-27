import { Pressable, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Checkbox from 'expo-checkbox';

import { Text, View } from "../../components/Themed";
import { Colors } from "../../constants/Colors";
import { useState } from "react";


export default function Login() {
    const [isChecked, setChecked] = useState(false);


    return <View style={styles.container}>
        <View style={styles.passWrapper}>
            <Text>免密登录</Text>
            <MaterialCommunityIcons name="cursor-default-click" size={24} color={Colors.primary} style={{marginLeft: 5}} />
        </View>

        <View style={styles.titleWrapper}>
            <Text style={styles.titleTxt}>欢迎注册</Text>
            <View>
                <Text>注册登录账号即可查看更多精彩资讯</Text>
            </View>
        </View>

        <View style={styles.fromWrapper}>
            <View style={styles.textInputContainer}>
                <Text style={styles.textInputLabel}>账号</Text>
                <TextInput style={styles.textInput}/>
            </View>

            <View style={styles.textInputContainer}>
                <Text style={styles.textInputLabel}>密码</Text>
                <TextInput style={styles.textInput}/>
            </View>

            <Pressable style={styles.button}>
                <Text style={styles.buttonLabel}>注册</Text>
            </Pressable>
        </View>

        <View style={styles.textWrapper}>
            <Checkbox value={isChecked} onValueChange={setChecked}
                      style={{ marginRight: 5 }}
                      color={isChecked ? Colors.primary : undefined}/>
            <Pressable onPress={()=>setChecked(!isChecked)}>已阅读并同意</Pressable>
            <Text style={{ color: Colors.primary }}>《服务条款》</Text>
            <Text>和</Text>
            <Text style={{ color: Colors.primary }}>《隐私权政策》</Text>
        </View>
    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        paddingLeft: 20,
        paddingRight: 20,
        position: "relative"
    },

    passWrapper: {
        position: "absolute",
        right: 50,
        marginTop: 50,
        zIndex: 1,
        flexDirection: "row",
        alignItems: "center"
    },

    titleWrapper: {
        marginTop: 100
    },
    titleTxt: {
        color: '#7194C2',
        fontSize: 36,
        fontWeight: '900',
        marginBottom: 10
    },
    fromWrapper: {
        marginTop: 40
    },
    textInputContainer: {
        marginBottom: 23
    },
    textInputLabel: {},
    textInput: {
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 8,
        height: 56,
        paddingLeft: 5,
        marginTop: 14
    },
    button: {
        width: '100%',
        height: 56,
        borderRadius: 8,
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonLabel: {
        color: Colors.white
    },
    textWrapper: {
        flexDirection: "row",
        marginTop: 40,
        alignItems: "center"
    }

})
