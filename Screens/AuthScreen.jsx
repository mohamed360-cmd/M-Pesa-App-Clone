import { View, StyleSheet, Text, TouchableHighlight,alert, Alert, ToastAndroid, TextInput, PermissionsAndroid } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import TouchID from 'react-native-touch-id';
import { useEffect, useState } from 'react';
import DeviceInfo, { getAndroidId } from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS from 'react-native-fs'
export default function AuthScreen({setIsLogedIn}) {
    const [pinNumber ,setPinNumber] = useState([])
    const [namePlacholder,setNamePlaholder] = useState('Enter Full Name')
    const [phoneNumberPlaceholder,setPhoneNumberPlaceholder] = useState("Enter Phone Number")
    const [phoneNumber,setPhoneNumber] = useState("Enter Phone Number")
    const [fullName ,setFullName] = useState("Enter FUll Name ")
    const [avaterText,setAvaterText] = useState("")
    const [successGetPhoneNumber,setSuccessGetPhoneNumber] = useState(false)
    const [arraypin1Present,setArrayPin1Present] = useState(false)
    const [arraypin2Present,setArrayPin2Present] = useState(false)
    const [arraypin3Present,setArrayPin3Present] = useState(false)
    const [arraypin4Present,setArrayPin4Present] = useState(false)
    const [isuserAuthTrue,setIsUserAuthTrue] = useState(false)
    const [photos, setPhotos] = useState([]);
    const fingerprintConfigerationObject = {
        title: 'Finger M-PESA  Required', // Android
        imageColor: 'green', // Android
        imageErrorColor: '#ff0000', // Android
        sensorDescription: 'Touch sensor', // Android
        sensorErrorDescription: 'Failed', // Android
        cancelText: 'Cancel', // Android
    }
    //function for storing full name in the local storage 
    const storeFullName = async ()=>{
        try {
            await AsyncStorage.setItem("FullName",fullName)

        } catch (error) {
            console.log("error in storing fullName ",error)
        }
    }
    //functuion for storing the phone number 
    const storePhoneNumber = async()=>{
        try {
            const phoneNUMber = phoneNumber.toString()
            await AsyncStorage.setItem("PhoneNumber",phoneNUMber)
        } catch (error) {
            console.log("error in storing PhoneNumber ",error)
        }
    }
    //
    const chechArray = ()=>{//this function chech if their is any number int eh array and changes the style to reflect the input value inficator
        const arrayLenght = pinNumber.length +1
        switch(arrayLenght){
            case 1:
                setArrayPin1Present(true)
                break
            case 2 :
                setArrayPin2Present(true)
                break
            case 3 :
                setArrayPin3Present(true)
                break
            case 4 :
                setArrayPin4Present(true)
                break
            default :
            console.log("")
        }
    }

    const getSimCarrier = async ()=>{
        const simCardProvider = await DeviceInfo.getCarrier()
         ToastAndroid.show(simCardProvider+" sim detected",ToastAndroid.LONG)

    }
    ////permisons to read phone state 
    const readPhoneStateRequestPermisions = async()=>{
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
                {
                    title :'Hey I Need to read the Phone State',
                    message :' Give me Access :)',
                    buttonPositive :' Yes',
                    buttonNegative :'I am ugly and i Refuse'
                }
            )
            if(granted == PermissionsAndroid.RESULTS.GRANTED){
                //getPhoneNumber()
            }else{
                ToastAndroid.show("The Hell is wrong with you NKT!!",ToastAndroid.LONG)
            }
        } catch (error) {
            console.log("error in the readPhoneStateRequestPermisions function",error)
        }
    }
    //permisin to read sms
    const permissonToReadSms = async()=>{
try {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_SMS,{
            title :'HEY ,Do you Trust me ;)',
            message : ' Hey Friend i hope you trust me Give me Access to the SMS so i can work properly .Yours Truly Me',
            buttonPositive : 'i Trust You',
            buttonNegative : 'I am ugly and i Refuse'
        }

        )
        if(granted == PermissionsAndroid.RESULTS.GRANTED){
           // getPhoneNumber()
        }else{
            ToastAndroid.show("The Hell is wrong with you NKT!!",ToastAndroid.LONG)

        }
} catch (error) {
    
}
    }
    const fingerprintNotSupportedObject ={
        unifiedErrors: false ,// use unified error messages (default false)
        passcodeFallback: false
    }
    const fingerprintAuth = async()=>{
        const isFingerprintSupported = await TouchID.isSupported(fingerprintNotSupportedObject)
        if(isFingerprintSupported){
            const AuthFingerprintStatus = await TouchID.authenticate("Finger M-PESA",fingerprintConfigerationObject)
            if(AuthFingerprintStatus){
                console.log("User Can log in")
                ToastAndroid.show("Authenticaton Success",ToastAndroid.LONG)
                setArrayPin1Present(true)
                setArrayPin2Present(true)
                setArrayPin3Present(true)
                setArrayPin4Present(true)
                setIsUserAuthTrue(true)
            }else{
                console.log("Authentication Failed")
            }
        }else{
            ToastAndroid.show("Fingerprint not supported use pin 0000",ToastAndroid.LONG)
        }
    }   
    const pinPressHandler = (value) => {
        if(pinNumber.length == 3){
            setIsUserAuthTrue(true)
        }else{
            setPinNumber((prevPin) => {
                const newPin = [...prevPin, value];
                //console.log(newPin); // Log the updated pin
               
                return newPin;
              });
              chechArray();
        }
      };
      function getInitials(name) {
        const words = name.split(' '); 
        const initials = words.map(word => word.charAt(0)); 
        return initials.join(''); 
    }
      const fullNameHandler = (value)=>{
        setFullName(value.toUpperCase())
      }
      const phoneNumberHandler =(value)=>{
        setPhoneNumber(value)
      }
      const get_Name_Phonenumber_FromStore = async()=>{
        try {
            const FullName = await AsyncStorage.getItem("FullName")
            if(FullName == null){
                ToastAndroid.show("No Name Saved",ToastAndroid.LONG)
            }else{
                //setFullName(FullName)
                setNamePlaholder(FullName)
                //console.log(FullName)
                setAvaterText(getInitials(FullName).toUpperCase())

            }
            const PHONENUMBER = await AsyncStorage.getItem("PhoneNumber")
            if(PHONENUMBER == null){
                ToastAndroid.show("No Phonenumber Saved",ToastAndroid.LONG)

            }else{
                //setPhoneNumber(PHONENUMBER)
                setPhoneNumberPlaceholder(PHONENUMBER)
                //console.log(PHONENUMBER)
            }
        } catch (error) {
            
        }
      }

      const CheckIfUserIsAthenicated =()=>{
        if(arraypin1Present && arraypin2Present && arraypin3Present &&arraypin4Present){
            setIsLogedIn(isuserAuthTrue)
        }else{
            setIsLogedIn(isuserAuthTrue)
        }
      }
      //function to get permision to read and Write to Storage 
      const PERMISSION_READ_WRITE_STORAGE = async()=>{
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,{
                    title :'Need to read and write in the Storage',
                    message : 'In order to Save you Data like Name ,phonenumber ,generated receipt and the Cash balances to create a more belivable  way of using this app',
                    buttonPositive :'Allow :)',
                    buttonNegative :' I am Stupid'
                }
            )
            if(granted == PermissionsAndroid.RESULTS.GRANTED){
                getGalleryPhotos()
            }else{
                Alert.alert("You Dont Trust Me  !!","Hello Friend It seems like you Dont trust me Give me Access to the Storage ")
            }
        } catch (error) {
            console.log("Error in read and writing permissions function ",error)
        }
      }
      const getGalleryPhotos = async () => {
        try {
            const galleryPath =   RNFS.ExternalStorageDirectoryPath  + "/Pictures" ; 

            const files = await RNFS.readdir(galleryPath);
            console.log(files);
        } catch (error) {
          console.error('Error reading gallery:', error);
        }
      };
    useEffect(()=>{
//fingerprintAuth()
readPhoneStateRequestPermisions()
permissonToReadSms()
get_Name_Phonenumber_FromStore()
CheckIfUserIsAthenicated()
getSimCarrier()
PERMISSION_READ_WRITE_STORAGE()
    },[isuserAuthTrue])
    return (
        <View style={styles.MainAuthScreen}>
            <View style={styles.personIdentifiebleInfoContainer}>
                <View style={styles.AvaterContainer}>
                    <Text style={styles.AvaterText}>{avaterText}</Text>
                </View>
                <TextInput style={styles.UsersFullName} placeholder={namePlacholder} placeholderTextColor={'white'} onChangeText={fullNameHandler} onSubmitEditing={storeFullName}/>
                {!successGetPhoneNumber  && <TextInput placeholder={phoneNumberPlaceholder} placeholderTextColor={'white'} style={styles.UsersMobileNumberInput} onChangeText={phoneNumberHandler}onSubmitEditing={storePhoneNumber}/>  }
                {successGetPhoneNumber &&  <Text style={styles.UsersMobileNumber}>{phoneNumber}</Text>}
            </View>
            <View style={styles.InputContainer}>
                <Text style={{color :'white',fontWeight:'600'}}>ENTER M-PESA PIN</Text>
                <View style={styles.inputVaditaionContainer}>
                    <View style={styles.inputIdentifier}>
                        <View style={arraypin1Present ? styles.pinValuePresent : styles.pinValueAbsent }></View>
                    </View>
                    <View style={styles.inputIdentifier}>
                        <View style={arraypin2Present ? styles.pinValuePresent : styles.pinValueAbsent }></View>
                    </View>
                    <View style={styles.inputIdentifier}>
                        <View style={arraypin3Present ? styles.pinValuePresent : styles.pinValueAbsent }></View>
                    </View>
                    <View style={styles.inputIdentifier}>
                        <View style={arraypin4Present ? styles.pinValuePresent : styles.pinValueAbsent }></View>
                    </View>
                </View>
            </View>
            <View style={styles.numberPadContainer}>
                <View style={[styles.numRow, styles.Top]}>
                    <TouchableHighlight style={styles.keyPadNumberButton} onPress={()=>pinPressHandler('1')}>
                        <Text style={styles.KeypAdNumber}>1</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.keyPadNumberButton} onPress={()=>pinPressHandler('2')}>
                        <Text style={styles.KeypAdNumber}>2</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.keyPadNumberButton} onPress={()=>pinPressHandler('3')}>
                        <Text style={styles.KeypAdNumber}>3</Text>
                    </TouchableHighlight>
                </View>
                <View style={[styles.numRow, styles.secondTop]}>
                    <TouchableHighlight style={styles.keyPadNumberButton} onPress={()=>pinPressHandler('4')}>
                        <Text style={styles.KeypAdNumber}>4</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.keyPadNumberButton} onPress={()=>pinPressHandler('5')}>
                        <Text style={styles.KeypAdNumber}>5</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.keyPadNumberButton} onPress={()=>pinPressHandler('6')}>
                        <Text style={styles.KeypAdNumber}>6</Text>
                    </TouchableHighlight>
                </View>
                <View style={[styles.numRow, styles.secondLast]}>
                    <TouchableHighlight style={styles.keyPadNumberButton}onPress={()=>pinPressHandler('7')} >
                        <Text style={styles.KeypAdNumber}>7</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.keyPadNumberButton} onPress={()=>pinPressHandler('8')}>
                        <Text style={styles.KeypAdNumber}>8</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.keyPadNumberButton} onPress={()=>pinPressHandler('9')}>
                        <Text style={styles.KeypAdNumber}>9</Text>
                    </TouchableHighlight>
                </View>
                <View style={[styles.numRow, styles.last]}>
                    <TouchableHighlight style={styles.keyPadNumberButton}>
                        <Text style={styles.KeypAdNumber}></Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.keyPadNumberButton} onPress={()=>pinPressHandler('0')}>
                        <Text style={styles.KeypAdNumber}>0</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.keyPadNumberButton} onPress={fingerprintAuth}>
                        <MaterialIcons name="fingerprint" color="white" size={35}/>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    MainAuthScreen : {
        height : '100%',
        width :'100%',
        backgroundColor : 'rgb(18, 18, 18)'
    },
    personIdentifiebleInfoContainer : {
        height :'20%',
        display :'flex',
        justifyContent :'center',
        alignItems :'center',

    },
    InputContainer : {
        height :' 30%',
        display :'flex',
        alignItems  : 'center',
        justifyContent :'center'
    },
    numberPadContainer : {
        height :'50%',
        justifyContent :'flex-end'
    },
    AvaterContainer :{
        height :70,
        width :70,
        backgroundColor :'white',
        borderRadius : 100,
        justifyContent : 'center',
        alignItems :'center'
    },
    AvaterText : {
        fontSize :25,
        color :'rgb(0, 188, 246)'
    },
    UsersFullName : {
        color: 'white',
        textAlign:'center',
        padding :0,
        
        
    },
    UsersMobileNumber : {
        color :'white'
    },
    UsersMobileNumberInput: {
        color :'white',
        textAlign :'center'
    },
    inputVaditaionContainer :{
        flexDirection : 'row',
        
    },
    inputIdentifier : {
        height :40,
        width : 40,
        marginTop: 15,
        marginLeft :10,
        borderRadius :100,
        borderColor :'white',
        borderWidth : 1,
        justifyContent : 'center',
        alignItems :'center'
    },
    numRow : {
        flexDirection :'row',
        width :'100%',
        marginBottom :5,

    },
    keyPadNumberButton : {
        height :60,
        width :'33.33%',
        justifyContent :'center',
        alignItems :'center',
        
    },
    KeypAdNumber : {
        color :'white',
        fontSize : 30
    },
    
    pinValuePresent : {
        height : 20,
        width : 20,
        borderRadius : 100,
        borderWidth : 1,
        backgroundColor : 'limegreen'
    }
})