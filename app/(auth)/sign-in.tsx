import {Platform, View, Image, TouchableOpacity, ActivityIndicator, Animated} from 'react-native';
import React, {useEffect, useRef, useState} from "react";
import {loginStyles, splashStyles} from "@/styles/authStyles";
import CustomText from "@/components/globals/CustomText";
import {StatusBar} from "expo-status-bar";
import BreakerText from "@/components/ui/BreakerText";
import PhoneInput from "@/components/ui/PhoneInput";
import SocialLogin from "@/components/ui/SocialLogin";
import {router} from "expo-router";
import useKeyboardOffsetHeight from "@/utils/useKeyboardOffsetHeight";


export default function LoginScreen() {
    const animatedValue = useRef(new Animated.Value(0)).current
    const keyboardOffsetHeight = useKeyboardOffsetHeight();
    const [phone, setPhone] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const handleLogin = async () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            router.replace('/delivery')
        }, 2000)
    }

    useEffect(() => {
        if (keyboardOffsetHeight == 0) {
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }).start()
        } else {
            Animated.timing(animatedValue, {
                toValue: -keyboardOffsetHeight * 0.25,
                duration: 500,
                useNativeDriver: true
            }).start()
        }
    }, [keyboardOffsetHeight])

    return (
        <View style={loginStyles.container}>
            <StatusBar hidden={Platform.OS !== "android"}/>
            <Image
                source={require('@/assets/images/login.png')}
                style={loginStyles.cover}
            />
            <Animated.ScrollView
                bounces={false}
                keyboardShouldPersistTaps={'handled'}
                keyboardDismissMode={'on-drag'}
                contentContainerStyle={loginStyles.bottomContainer}
                style={{
                    transform: [{translateY: animatedValue}]
                }}
            >
                <CustomText
                    fontFamily="OkraBold"
                    variant='h2'
                    style={loginStyles.title}
                >
                    Vietnamese's #1 Food Delivery and Dining App
                </CustomText>

                <BreakerText text={"log in or sign up"}/>

                <PhoneInput
                    onFocus={() => {
                    }}
                    onBlur={() => {
                    }}
                    value={phone}
                    onChangeText={setPhone}
                />

                <TouchableOpacity style={loginStyles.buttonContainer} onPress={handleLogin} activeOpacity={0.8}>
                    {
                        loading ?
                            <ActivityIndicator size="small" color="#fff"/>
                            : <CustomText color="#fff" fontFamily="OkraMedium" variant="h5">Continue</CustomText>
                    }
                </TouchableOpacity>

                <BreakerText text="or"/>

                <SocialLogin/>
            </Animated.ScrollView>

            <View style={loginStyles.footer}>
                <CustomText>
                    By continuing, you agree to our
                </CustomText>
                <View style={loginStyles.footerTextContainer}>
                    <CustomText style={loginStyles.footerText}>Terms of Service</CustomText>
                    <CustomText style={loginStyles.footerText}>Privacy Policy</CustomText>
                    <CustomText style={loginStyles.footerText}>Content Policies</CustomText>
                </View>
            </View>
        </View>
    );
}

