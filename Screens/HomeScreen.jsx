import { View, Text, StyleSheet, ToastAndroid, ScrollView, Image, TouchableHighlight, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Img1 from './Images/Im1.jpg';
import Img2 from './Images/Im2.jpg';
import Img3 from './Images/Im3.jpg'
import ServiceContainers from './ServiceContainers';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import OpaceScreen from './OpaceScreen';
import {FinancesData,PublicSector} from './Servicedata'
export default function HomeScreen() {
    const [hideAccountDetails,setHideAccountDetails] = useState(false)
    const [firstName, setFirstName] = useState('');
    const [avaterText, setAvaterText] = useState('');
    const [timeOfDay, setTimeOfDay] = useState('evening');
    const [balance,setBalance] = useState('')
    const [fulizaLimit,setFulizaLimit] = useState('')
    const [balancePlaceholder,setBalancePlaceHolder] = useState('')
    const [fulizaPlaceholder,setFulizaPlaceHolder] = useState('')
    const [scrollListData ,setScrollListData] = useState([
        { imgAddress: Img1,key :'hhaown99' },
        { imgAddress: Img2 ,key :'679a'},
        { imgAddress: Img3 ,key :'9juia'},
    
    ])
    const getTimeofDay = () => {
        //this function set the time weather it is morning or evening
        const time = new Date();
        const timeInHours = time.getHours();
        if (timeInHours < 12) {
            setTimeOfDay('morning');
        } else {
            setTimeOfDay('evening');
        }
    };
    const getOnlineTheuserName = fullname => {
        var firstNameLetters = '';
        for (var i = 0; i < fullname.length; i++) {
            if (fullname[i] === ' ') {
                break;
            } else {
                firstNameLetters += fullname[i];
            }
        }

        return firstNameLetters;
    };
    const getInitalsFromFullName = fullName => {
        const words = fullName.split(' ');
        const initials = words.map(word => word.charAt(0));
        return initials.join('');
    };
    const getFullName = async () => {
        try {
            const userFullName = await AsyncStorage.getItem('FullName');
            if (userFullName == null) {
                ToastAndroid.show('Error in getting  Name', ToastAndroid.LONG);
            } else {
                setFirstName(getOnlineTheuserName(userFullName.trim()));
                setAvaterText(getInitalsFromFullName(userFullName));
            }
        } catch (error) {
            console.log('Error in getFullName ', error);
        }
    };
    const hideAccountDetailsHandler =()=>{
        if(hideAccountDetails){
            setHideAccountDetails(false)
        }else{
            setHideAccountDetails(true)
        }
    }
    const storeBalance =async()=>{
        try {
            await AsyncStorage.setItem("Balance",balance)
            ToastAndroid.showWithGravity("Balance  set",ToastAndroid.LONG,ToastAndroid.CENTER)
        } catch (error) {
            
        }
    }
    const storeFulizaAmount =async()=>{
        try {
            await AsyncStorage.setItem("Fuliza",fulizaLimit)
            ToastAndroid.showWithGravity("Fuliza  set",ToastAndroid.LONG,ToastAndroid.CENTER)
        } catch (error) {
            
        }
    }
    const getBalanceAmount =async ()=>{
        try {
            const balance = await AsyncStorage.getItem("Balance")
            if(balance == null){
                setBalancePlaceHolder('ksh.00')
                ToastAndroid.showWithGravity("Balance not set",ToastAndroid.LONG,ToastAndroid.TOP)
            }else{
                setBalancePlaceHolder("Ksh. "+balance)
            }
        } catch (error) {
            
        }
    }
    const getFulizaLimit =async ()=>{
        try {
            const fuliza = await AsyncStorage.getItem("Fuliza")
            if(fuliza == null){
                setFulizaPlaceHolder('set Limit')
                ToastAndroid.showWithGravity("Fuliza not set",ToastAndroid.LONG,ToastAndroid.TOP)
            }else{
                setFulizaPlaceHolder(fuliza)
            }
        } catch (error) {
            
        }
    }
    const balanceHandler =()=>{
        storeBalance(balance)
    }
    const fulizaLimitHandler = ()=>{
        storeFulizaAmount(fulizaLimit)
    }
    useEffect(() => {
        getFullName();
        getTimeofDay();
        getBalanceAmount()
        getFulizaLimit()
    }, []);
    return (
        <View style={styles.MainHomeContainer}>
            <View style={styles.Navbar}>
                <View style={styles.leftSideContainer}>
                    <View style={styles.Avater}>
                        <Text style={styles.AvaterText}>{avaterText}</Text>
                    </View>
                    <View style={styles.InfoContainer}>
                        <Text style={{ color: 'white' }}>Good {timeOfDay},</Text>
                        <Text style={{ color: 'white', fontWeight: '800' }}>
                            {firstName} 👋{' '}
                        </Text>
                    </View>
                </View>
                <View style={styles.rightSideContainer}>
                    <MaterialCommunityIcons
                        name="bell-outline"
                        color="white"
                        size={23}
                        marginRight={15}
                    />
                    <Ionicons
                        name="pie-chart-outline"
                        color="white"
                        size={23}
                        marginRight={15}
                    />
                    <MaterialCommunityIcons
                        name="qrcode-scan"
                        color="white"
                        size={23}
                        marginRight={5}
                    />
                </View>
            </View>
            <ScrollView style={[styles.MainHomeBody]}>
                <View style={styles.AccountBalancesAndControlsContainer}>
                    <View style={styles.balanceContainer}>
                        <Text style={{ color: 'white', width: '100%', alignSelf: 'center', fontSize: 15 }}>Balance</Text>
                        <View style={{flexDirection:'row',justifyContent :'center',alignItems :'center'}}>
                            <View style={{position :'relative'}}>
                                <TextInput style={styles.balanceAmount} placeholder={balancePlaceholder} placeholderTextColor={'white'} onChangeText={e=>setBalance(e)} onSubmitEditing={balanceHandler}></TextInput>
                                {
                                    hideAccountDetails &&  <OpaceScreen/>
                                }
                               
                            </View>
                            <TouchableHighlight onPress={hideAccountDetailsHandler} style={{marginLeft:5,padding :5}} >
                                <FontAwesome5 name={hideAccountDetails ? "eye" : "eye-slash"} color="white" size={20}/>
                            </TouchableHighlight>
                            
                        </View>
                        <View style={{flexDirection :'row',justifyContent :'center',alignItems :'center', position :'relative'}}>

                            <Text style={styles.fulizaAmount}>Available FULIZA :KSH</Text>
                            <TextInput style={styles.fulizaAmount} placeholder={fulizaPlaceholder} placeholderTextColor={'rgb(78, 164, 230)'} onChangeText={e=>setFulizaLimit(e)} onSubmitEditing={fulizaLimitHandler}></TextInput>
                            {
                                hideAccountDetails &&  <OpaceScreen/>
                             }
                        </View>
                        
                    </View>
                </View>
                <View style={styles.controlsContainer}>

                    <View style={styles.control}>
                        <View style={[styles.IconContainer, { backgroundColor: 'rgb(48, 198, 108)' }]}>
                            <View style={[{ transform: [{ rotate: '309deg' }] }]}>
                                <FontAwesome5 name="exchange-alt" color="white" size={20} />
                            </View>
                        </View>

                        <View style={styles.stylesdescriptionContainer}>
                            <Text style={[styles.ControlStyleDescription]}>
                                SEND AND REQUEST{' '}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.control}>
                        <View style={[styles.IconContainer, { backgroundColor: 'rgb(15, 115, 255)' }]}>
                            <MaterialIcons name="payments" color="white" size={22} />
                        </View>
                        <View style={styles.stylesdescriptionContainer}>
                            <Text style={styles.ControlStyleDescription}>PAY</Text>
                        </View>
                    </View>

                    <View style={styles.control}>
                        <View style={[styles.IconContainer, { backgroundColor: 'rgb(255, 42, 88)' }]}>
                            <AntDesign name="download" color="white" size={22} />
                        </View>
                        <View style={styles.stylesdescriptionContainer}>
                            <Text style={styles.ControlStyleDescription}>WIDTHDRAW</Text>
                        </View>
                    </View>

                    <View style={styles.control}>
                        <View style={[styles.IconContainer, { backgroundColor: 'rgb(0, 195, 255)' }]}>
                            <Feather name="smartphone" color="white" size={22} />
                        </View>
                        <View style={styles.stylesdescriptionContainer}>
                            <Text style={styles.ControlStyleDescription}>AIRTIME</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.statementMainContainer}>
                    <View style={styles.statemntsContainerHeader}>
                        <Text style={{ color: 'white' }}>M-PESA STATEMENTS</Text>
                        <Text style={{ color: 'rgb(61, 188, 117)' }}>SEE ALL</Text>
                    </View>
                    <View style={styles.statmentTilesContainer}>
                        
                        <View style={styles.statementTile}>
                            <View style={styles.leftSideOfTile}>
                                <View style={styles.StatementavaterTile}>
                                    <Text style={styles.statementTileAvater}>TD</Text>
                                </View>
                                <View style={styles.statementInfoContainer}>
                                    <Text style={styles.NameHolder}>Tom Dow</Text>
                                    <Text style={styles.NumberContainer}>0711***152</Text>
                                </View>
                            </View>
                            <View style={styles.rightSideOfTile}>
                                <Text style={styles.transactionAmount}>- Ksh. 45230.00</Text>
                                <Text style={styles.TimeStamp}>02 Jan 11.03 AM</Text>
                            </View>
                        </View>
                        {
                             hideAccountDetails &&  <OpaceScreen/>
                        }
                    </View>
                </View>
                <ScrollView horizontal={true} style={styles.scrollViewContianer}>
                    {scrollListData.length>1  && scrollListData.map((data,index)=>{
                        return(
                            <View style={styles.MainImageContainer} key={data.key}>
                                <Image source={data.imgAddress} style={styles.IMG}/>
                            </View>
                        )
                    })}
                </ScrollView>
                <ServiceContainers serviceName={"FINACIAL SERVICES" } displayData={FinancesData} enableShowMore={false}/>
                <ServiceContainers serviceName={"Public Sector" } displayData={PublicSector} enableShowMore={false}/>
            </ScrollView>

        </View>
    );
}
const styles = StyleSheet.create({
    MainHomeContainer: {
        height: '100%',
        width: '100%',
        position: 'relative',
        backgroundColor: 'rgb(18, 18, 18)',
    },
    Navbar: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgb(18, 18, 18)',
        padding: 5,
    },
    leftSideContainer: {
        flexDirection: 'row',
        marginLeft: 5,
    },
    Avater: {
        height: 40,
        width: 40,
        borderRadius: 100,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginRight: 2,
        borderColor: 'rgb(0, 188, 246)',
    },
    AvaterText: {
        color: 'rgb(0, 188, 246)',
    },
    rightSideContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    MainHomeBody: {
        height: '100%',
        marginTop: 60,
        padding :10
    },
    AccountBalancesAndControlsContainer: {
        backgroundColor: 'rgb(30, 30, 30)',
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 20
    },
    balanceAmount: {
        color: 'white',
        fontSize: 30,
        fontWeight: '100',
        textAlign :'right',
    },
    fulizaAmount: {
        color: 'rgb(78, 164, 230)',
        fontSize: 15

    }
    ,
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '70%',
        paddingHorizontal: 10
    },
    control: {
        width: 70,
        marginLeft: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    IconContainer: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        padding: 3,
    },
    statmentTilesContainer : {
        position : 'relative'
    },
    stylesdescriptionContainer: {
        marginTop: 5
    },
    ControlStyleDescription: {
        color: 'white',
        fontSize: 10,
        fontWeight: '600'
    },
    statementMainContainer: {
        marginTop :5,
    },
    statemntsContainerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    statementTile :{
        flexDirection :'row',
        justifyContent :'space-between',
        padding :5,
        marginTop : 10
    },
    leftSideOfTile :{
        flexDirection :'row',
        justifyContent :'center',
        alignItems :'center'
    },
    StatementavaterTile : {
        height : 40,
        width : 40,
        justifyContent :'center',
        alignItems :'center',
        borderRadius :100,
        backgroundColor : 'white',
        padding : 2,
         marginRight : 5,
    },
    statementTileAvater :{
        color :'rgb(83, 210, 132)'
    },
    NameHolder :{
        color :'white',
        fontSize :13,
        fontWeight :'700'
    },
    NumberContainer : {
        color :'rgb(134, 134, 134)',
        fontSize : 12
    },
    transactionAmount : {
        color :'white',
        fontSize :13,
        fontWeight :'700'
    },
    TimeStamp : {
        color :'rgb(134, 134, 134)',
        fontSize : 12

    },
    scrollViewContianer : {
        height :170,
        padding : 10,
        marginBottom :10
    },
    MainImageContainer : {
        height :150,
        width  : 250,
        borderRadius :20,
        objectFit :'contain',
        marginRight :15,
        marginBottom : 5
    },
    IMG : {
        height :'100%',
        width : '100%',
        borderRadius : 10
    },

    
});
