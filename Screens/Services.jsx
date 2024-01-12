import { View, Text, StyleSheet, ScrollView, Image, TouchableHighlight, ToastAndroid } from "react-native";
import { allServices, frequentlyUsed } from './Servicedata'
import Feather from 'react-native-vector-icons/Feather'

export default function Services() {
    const serviceClickedHandler = ()=>{
        ToastAndroid.showWithGravity("M-pesa is a Super App and this is A Clone of M-pesa so none of this Features Work :)",ToastAndroid.LONG,ToastAndroid.TOP)
    }
    return (
        <View style={styles.MainServieContainer}>
            <View style={styles.NavBar}>

                <Text style={styles.NavTitle}>SERVICES</Text>
                <View style={styles.NavIcon}>
                    <Feather name="search" color="white" size={20} />
                </View>
            </View>
            <View style={styles.bodyConatiner}>

                {/** ____________________-----------------------------------------------------____________----- */}
                <View>
                    <Text style={{ color: 'white', fontWeight: '700' }}>FREQUENTS</Text>
                    <ScrollView horizontal={true} style={styles.freqentsConatiner}>

                        {
                            frequentlyUsed.length > 0 && frequentlyUsed.map((data, index) => {
                                return (
                                    <TouchableHighlight onPress={serviceClickedHandler} key={data.key}>
                                    <View style={styles.Container}>
                                        <View style={styles.logoContainer}>
                                            <Image source={data.logo} style={styles.logoImg} />
                                        </View>
                                        <View>
                                            <Text  style={{
                                                color: 'white',
                                                textAlign: 'center',
                                                fontSize: 12,
                                                fontWeight: '700'
                                            }}>{data.name}
                                            </Text>
                                        </View>
                                    </View>
                                    </TouchableHighlight>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                {/** ____________________-----------------------------------------------------____________----- */}
                <View style={{marginTop : 20}}>
                    <Text style={{ color: 'white', fontWeight: '700' }}>DISCOVER MORE</Text>
                    <View style={styles.AllServiesContainer}>
                        {allServices.length > 0  && allServices.map(data=>{
                            return(
                                <TouchableHighlight onPress={serviceClickedHandler}key={data.key}>
                                <View style={styles.Container} >
                                        <View style={styles.logoContainer} >
                                            <Image source={data.logo} style={styles.logoImg} />
                                        </View>
                                        <View>
                                            <Text  style={{
                                                color: 'white',
                                                textAlign: 'center',
                                                fontSize: 12,
                                                fontWeight: '700'
                                            }}>{data.name}
                                            </Text>
                                        </View>
                                    </View>
                                    </TouchableHighlight>
                            )
                        })}
                    </View>
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    MainServieContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(18, 18, 18)',
    },
    NavBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 50,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',

    },
    NavTitle: {
        color: 'white',
        width: '90%',
        textAlign: 'center',
        marginLeft: 15,
        fontSize: 20
    },
    NavIcon: {
        width: '10%',
        height: '100%',
        justifyContent: 'center'
    },
    bodyConatiner: {
        marginTop: 50,
        height: '100%',
        width: '100%',
        padding: 10
    },
    AllServiesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    Container: {
        marginLeft: 10,
        width: 70,
        margin: 5
    },
    logoContainer: {
        height: 60,
        width: 60,
        objectFit: 'cover',
        padding: 10,
        borderRadius: 30
    },
    logoImg: {
        height: '100%',
        width: '100',
        objectFit: 'cover',
        borderRadius: 30
    }
})