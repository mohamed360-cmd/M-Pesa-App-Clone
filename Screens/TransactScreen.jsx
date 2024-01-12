import { View, Text, StyleSheet, ScrollView } from "react-native"
import { useState } from "react"
import Feather from 'react-native-vector-icons/Feather'
import ServiceContainers from "./ServiceContainers"
import { FinancesData, PublicSector, pochiData } from './Servicedata'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function TransactScreen() {

    return (
        <View style={styles.MainTrasctScreen}>
            <View style={styles.NavBar}>

                <Text style={styles.NavTitle}>TRANSACT</Text>
                <View style={styles.NavIcon}>
                    <Feather name="search" color="white" size={20} />
                </View>

            </View>
            <ScrollView style={styles.MainTransactBody}>
                <ServiceContainers serviceName={"FINACIAL SERVICES"} displayData={FinancesData} enableShowMore={false} />
                <ServiceContainers serviceName={"WALLETS"} displayData={pochiData} enableShowMore={false} />
                <View style={styles.SuperLinksContainer}>
                    <View style={styles.SuperLinksContainerHeader}>
                        <Text style={{ color: 'white', fontWeight: '900' }}> SEND AND REQUEST </Text>
                    </View>
                    <View style={styles.serviceIconsContainer}>
                        <View style={styles.Container}>
                            <View style={styles.logoContainer} >
                                <AntDesign name={"arrowup"} color="white" size={20} />
                            </View>
                            <View>
                                <Text style={styles.subText}>SEND MONEY</Text>
                            </View>
                        </View>
                        <View style={styles.Container}>
                            <View style={styles.logoContainer} >
                                <AntDesign name={"arrowdown"} color="white" size={20} />
                            </View>
                            <View>
                                <Text style={styles.subText}>RECEIVE MONEY</Text>
                            </View>
                        </View>
                        <View style={styles.Container}>
                            <View style={styles.logoContainer} >
                                <FontAwesome name={"angle-double-up"} color="white" size={20} />
                            </View>
                            <View>
                                <Text style={styles.subText}>ANOTHER NETWORK</Text>
                            </View>
                        </View>
                        <View style={styles.Container}>
                            <View style={styles.logoContainer} >
                                <FontAwesome name={"group"} color="white" size={20} />
                            </View>
                            <View>
                                <Text style={styles.subText}>SEND TO MANY</Text>
                            </View>
                        </View>
                        <View style={styles.Container}>
                            <View style={styles.logoContainer} >
                                <Ionicons name={"globe"} color="white" size={20} />
                            </View>
                            <View>
                                <Text style={styles.subText}>GLOBAL</Text>
                            </View>
                        </View>

                    </View>
                </View>
        {/* ------------------------------------------------------------------------------------------------------*/ }
                <View style={styles.SuperLinksContainer}>
                    <View style={styles.SuperLinksContainerHeader}>
                        <Text style={{ color: 'white', fontWeight: '900' }}>PAY</Text>
                    </View>
                    <View style={styles.serviceIconsContainer}>
                        <View style={styles.Container}>
                            <View style={styles.logoContainer1} >
                                <FontAwesome5 name={"receipt"} color="white" size={20} />
                            </View>
                            <View>
                                <Text style={styles.subText}>PAY BILL</Text>
                            </View>
                        </View>
                        <View style={styles.Container}>
                            <View style={styles.logoContainer1} >
                                <FontAwesome name={"shopping-basket"} color="white" size={20} />
                            </View>
                            <View>
                                <Text style={styles.subText}>BUY GOODS</Text>
                            </View>
                        </View>
                        <View style={styles.Container}>
                            <View style={styles.logoContainer1} >
                                <Feather name="smartphone" color="white" size={20} />
                            </View>
                            <View>
                                <Text style={styles.subText}>POCHI LA BIASHARA</Text>
                            </View>
                        </View>
                        <View style={styles.Container}>
                            <View style={styles.logoContainer1} >
                                <Ionicons name={"card"} color="white" size={20} />
                            </View>
                            <View>
                                <Text style={styles.subText}>SEND TO MANY</Text>
                            </View>
                        </View>
                        <View style={styles.Container}>
                            <View style={styles.logoContainer1} >
                                <Ionicons name={"globe"} color="white" size={20} />
                            </View>
                            <View>
                                <Text style={styles.subText}>GLOBAL PAY</Text>
                            </View>
                        </View>

                    </View>
                </View>
                 {/* ------------------------------------------------------------------------------------------------------*/ }
                 <View style={styles.SuperLinksContainer}>
                    <View style={styles.SuperLinksContainerHeader}>
                        <Text style={{ color: 'white', fontWeight: '900' }}>WIDTHDRAW</Text>
                    </View>
                    <View style={styles.serviceIconsContainer}>
                        <View style={styles.Container}>
                            <View style={styles.logoContainer2} >
                                <MaterialCommunityIcons name={"store"} color="white" size={20} />
                            </View>
                            <View>
                                <Text style={styles.subText}>WIDTHDRAW AT AGENT</Text>
                            </View>
                        </View>
                        <View style={styles.Container}>
                            <View style={styles.logoContainer2} >
                                <MaterialCommunityIcons name={"bank-transfer-out"} color="white" size={20} />
                            </View>
                            <View>
                                <Text style={styles.subText}>WIDTHDRAW AT ATM</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    MainTrasctScreen: {
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
    MainTransactBody: {
        marginTop: 50,
        padding: 20
    },

    SuperLinksContainer: {
        backgroundColor: 'rgb(30, 30, 30)',
        marginTop: 10,
        height: "auto",
        padding: 10,
        borderRadius: 10
    },
    serviceIconsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    Container: {
        marginLeft: 10,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal :15,
        marginVertical : 5
    },
    logoContainer: {
        height: 40,
        width: 40,
        objectFit: 'cover',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'rgb(49, 196, 108)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 10,
        fontWeight: '700'
    },
    logoContainer1 : {
        height: 40,
        width: 40,
        objectFit: 'cover',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'rgb(14, 117, 254)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer2 :{
        height: 40,
        width: 40,
        objectFit: 'cover',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'rgb(255, 42, 88)',
        justifyContent: 'center',
        alignItems: 'center'
    }


})