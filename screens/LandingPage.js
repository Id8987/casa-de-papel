import React from "react";
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const LandingPage = ({navigation}) => {
    return (
       <SafeAreaView style={style.mainContainer}>
           <View>
               {/*<Text>Hello</Text>*/}
           </View>
            <View style={style.bottomContainer}>
                <Text style={style.title1}>Casa de Papel</Text>
                <Text style={style.description}>
                    Bienvenue dans votre banque en ligne
                </Text>
                <View style={style.nextButtonContainer}>
                    <View style={style.nButton}>
                        <MaterialIcons
                            name="navigate-next"
                            size={50} color="black"
                            onPress={()=> navigation.navigate('PersonalInfo')}
                        />
                    </View>
                </View>
            </View>
       </SafeAreaView>
    );
}


const style = StyleSheet.create({
    title1: {
        fontSize:25,
        fontWeight:'ultralight',
        fontFamily:'serif',
        color:'#FFFFFF'

    }
    ,bottomContainer:{
        padding:30,
        display:"flex",
        marginBottom:20
    },
    description:{
        color:'#FFFFFF',

    },
    mainContainer:{
        display:"flex",
        justifyContent:"space-between",
        height:"100%",
        backgroundColor:'#2945FF'
    },
    nextButtonContainer:{
        alignItems:"flex-end"
    },
    nButton:{
        padding:10,
        backgroundColor:'#fff',
        borderRadius:50
    }

});

export default LandingPage