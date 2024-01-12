import { View,Text,StyleSheet, ScrollView, Image ,ToastAndroid,TouchableHighlight} from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import mpesaLogo from './Images/mpesaGlobalPayImg.png'
import mshwariLogo from './Images/mshwariLogo.png'
import kcbLogo from './Images/kcblogo.png'
import { useState } from "react";
import { allServices, frequentlyUsed } from './Servicedata'

export default function Growth(){
    const serviceClickedHandler = ()=>{
        ToastAndroid.showWithGravity("M-pesa is a Super App and this is A Clone of M-pesa so none of this Features Work :)",ToastAndroid.LONG,ToastAndroid.TOP)
    }
    const [highlited,setHightlighted] =useState([
        {logo : mpesaLogo,name : 'GlobalPay'},
        {logo : mshwariLogo, name : 'M-Shwari'},
        {logo : kcbLogo, name : 'KCB'}
    
    ])
    return(
        <View style={styles.MainGrothContainer}>
            <View style={styles.NavBar}>

                <Text style={styles.NavTitle}>GROWTH</Text>
                <View style={styles.NavIcon}>
                </View>

            </View>
            <View style={styles.mainGrowthBody}>
                <View>
                    <Text style={{ color: 'white', fontWeight: '600' }}>HIGHLIGHTED</Text>
                    <ScrollView horizontal={true}>
                        {
                            highlited.map((data,index)=>{
                                return(
                                    <View style={styles.HighlightedContainer} key={data.key}>
                                        <View style={styles.ImageContainer}>
                                            <Image source={data.logo} style={styles.IMG}/>
                                        </View>
                                        <View style={{flexDirection :'row',backgroundColor :'grey',margin : 5}}> 
                                            <View style={{height : 50,width :50,borderRadius :100,objectFit :'cover',padding :5}}>
                                                <Image source={data.logo} style={styles.subIMG}/>
                                            </View> 
                                            
                                            <View>
                                                <Text style={styles.topText}>{data.name}</Text>
                                                <Text style={styles.bottomText}>Go for it</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                <View>
                    <Text style={{ color: 'white', fontWeight: '600' }}>DISCOVER MORE</Text>
                    <View style={styles.AllServiesContainer}>
                        {allServices.length > 0  && allServices.map(data=>{
                            return(
                                <TouchableHighlight onPress={serviceClickedHandler}>
                                <View style={styles.Container} >
                                        <View style={styles.logoContainer} key={data.key}>
                                            <Image source={data.logo} style={styles.logoImg} />
                                        </View>
                                        <View>
                                            <Text key={Math.round() * 10000} style={{
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
    MainGrothContainer : {
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
    mainGrowthBody : {
        marginTop : 50,
        height :'100%',
        padding : 10
    },
    HighlightedContainer : {
        height : 170,
        width : 300,
        margin :10,
        borderRadius : 8,
        backgroundColor : 'grey'
    },
    ImageContainer : {
        height :110,
        width : "100%",
        objectFit : 'cover',
        borderRadius : 6
    },
    IMG : {
        height : '100%',
        width : '100%',
        objectFit :'cover',
        borderTopLeftRadius :6,
        borderTopRightRadius : 6
    },
    subIMG : {
        height : "100%",
        width : "100%",
        objectFit :'cover',
        borderRadius : 100
    },
    topText : {
        color : 'white',
        fontSize : 15,
        fontWeight : '700'
    },
    bottomText : {
        color : 'white'
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