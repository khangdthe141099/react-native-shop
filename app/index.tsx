import {StyleSheet, View, Text, Platform, Image} from 'react-native';
import React, {useEffect} from "react";
import {splashStyles} from "@/styles/authStyles";
import {StatusBar} from "expo-status-bar";
import Animated, {FadeInDown} from "react-native-reanimated";
import CustomText from '../components/globals/CustomText'
import { router } from 'expo-router';

export default function SplashScreen() {
    useEffect(() => {
        const timeoutId = setTimeout(async () => {
            router.replace('/sign-in')
        }, 3000)

        return () => clearTimeout(timeoutId)
    }, [])

    return (
        <View style={splashStyles.container}>
            <StatusBar hidden={Platform.OS !== "android"}/>
            <Image
                source={require('@/assets/images/logo_t.png')}
                style={splashStyles.logoImage}
            />
            <Animated.View
                style={splashStyles.animatedContainer}
                entering={FadeInDown.delay(400).duration(800)}
            >
                <Image
                    source={require('@/assets/images/tree.png')}
                    style={splashStyles.treeImage}
                />

                <CustomText
                    variant="h5"
                    style={splashStyles.msgText}
                    fontFamily="OkraMedium"
                    color='#fff'
                >
                    Carbon and Plastic Neutral Deliveries in Vietnamese
                </CustomText>
            </Animated.View>
        </View>
    );
}

