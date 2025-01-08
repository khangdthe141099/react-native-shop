import {StyleSheet, View, Text, Platform, Image} from 'react-native';
import React from "react";
import {splashStyles} from "@/styles/authStyles";
import {StatusBar} from "expo-status-bar";
import Animated, {FadeInDown} from "react-native-reanimated";

export default function HomeScreen() {
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
            </Animated.View>
        </View>
    );
}

