import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import TransactScreen from "./TransactScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Growth from "./Growth";
import Services from "./Services";
export default function MainScreen(){
    const Tab = createBottomTabNavigator()
    return(
            <Tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon : ({focused,color,size})=>{
                    let iconsName 
                    if(route.name == "Home"){
                    iconsName = focused ? "home" : "home-outline"
                    return <MaterialCommunityIcons name={iconsName} size={size} color={color}/>
                    }else if(route.name == "Transact"){
                        iconsName = focused ? "compare-arrows" :"compare-arrows"
                        return <MaterialIcons name={iconsName} size={size} color={color}/>
                    }else if(route.name == "Services"){
                        iconsName = focused ? "shapes" :"shapes"
                        return <FontAwesome6 name={iconsName} size={size} color={color}/>
                    }else if(route.name == "Growth"){
                        iconsName = focused ? "bar-chart" :"bar-chart-outline"
                        return <Ionicons name={iconsName} size={size} color={color}/>
                    }
                },
                tabBarActiveTintColor :'rgb(45, 198, 107)',
                tabBarInactiveTintColor: 'rgb(142, 142, 142)',
                tabBarStyle: { backgroundColor: 'rgb(45, 45, 45)' },
                
            })}
             >
                <Tab.Screen name="Home" component={HomeScreen} options={
                    {
                        headerShown : false,
                        
                    }
                    
                }

                />
                <Tab.Screen name="Transact" component={TransactScreen} options={
                    {
                        headerShown : false,
                    }
                }/>
                <Tab.Screen name="Services" component={Services}
                    options={
                    {
                        headerShown : false,
                    }
                }
                />
                <Tab.Screen name="Growth" component={Growth}options={
                    {
                        headerShown : false,
                    }
                }/>
            </Tab.Navigator>
    )
}