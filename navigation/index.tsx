import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from '../screens/Home'
import Detail from '../screens/Detail'
import About from "../screens/About";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator()

/**
 * 注册Tab栏的 屏幕页面，会自动生成到tab
 * @constructor
 */
function BottomTabNavigator(){
  return <BottomTab.Navigator initialRouteName="Detail">
    <BottomTab.Screen name="Home" component={Home} options={{headerShown: false}} />
    <BottomTab.Screen name="Detail" component={Detail}/>
  </BottomTab.Navigator>
}

/**
 * 注册所有非Tab栏的 屏幕页面
 * @constructor
 */
export default function Navigation(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="About" component={About}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}