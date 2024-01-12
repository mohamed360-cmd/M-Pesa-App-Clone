import {View,Text,StyleSheet,Image} from 'react-native'
import mpesaLogo from './Images/mpesaGlobalPayImg.png'
import mshwariLogo from './Images/mshwariLogo.png'
import kcbLogo from './Images/kcblogo.png'
import { useState } from 'react'
export default function ServiceContainers({serviceName,displayData,enableShowMore }){

    return(
        <View style={styles.SuperLinksContainer}>
        <View style={styles.SuperLinksContainerHeader}>
            <Text style={{ color: 'white',fontWeight:'900' }}>{serviceName} </Text>
            {
                enableShowMore && <Text style={{ color: 'rgb(61, 188, 117)' }}>VIEW ALL</Text>
            }
            
        </View>
        <View style={styles.serviceIconsContainer}>
            {
                displayData.length > 0 && displayData.map((data,index)=>{
                    return(
                        <View style={styles.Container}>
                            <View style={styles.logoContainer} key={Math.random() *10000}>
                                <Image source={data.logo} style={styles.logoImg}/>
                            </View>
                            <View>
                                <Text key={Math.random() *10000} style={{       
                                     color: 'white',
                                    textAlign: 'center',
                                     fontSize: 12,
                                    fontWeight: '700'
                                     }}>{data.name}
                                </Text>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    SuperLinksContainer : {
        backgroundColor: 'rgb(30, 30, 30)',
        marginTop :10,
        height : 150,
        padding :10,
        borderRadius :10
    },
    SuperLinksContainerHeader : {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    serviceIconsContainer : {
        flexDirection :'row'
    },
    Container : {
        marginLeft :10,
        width : 70,
    },
    logoContainer : {
        height :60,
        width : 60,
        objectFit : 'cover',
        padding :10,
        borderRadius :30
    },
    logoImg : {
        height :'100%',
        width : '100',
        objectFit : 'cover',
        borderRadius :30
    }
})