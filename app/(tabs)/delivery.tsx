import {Platform, View} from "react-native";
import {homeStyles} from "@/styles/homeStyles";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useSharedState} from "@/app/(tabs)/SharedContext";
import Animated, {Extrapolation, interpolate, useAnimatedStyle} from "react-native-reanimated";
import Graphics from "@/components/home/Graphics";
import HeaderSection from "@/components/home/HeaderSection";

export default function Delivery() {
    const insets = useSafeAreaInsets()
    const styles = homeStyles(true)
    const {scrollY, scrollYGlobal} = useSharedState()

    const backgroundColorChanges = useAnimatedStyle(() => {
        const opacity = interpolate(scrollYGlobal.value, [1, 50], [0, 1])

        return {
            backgroundColor: `rgba(255,255,255,${opacity})`
        }
    })

    const moveUpStyle = useAnimatedStyle(() => {
        const translateY = interpolate(
            scrollYGlobal.value,
            [0, 50],
            [0, -50],
            Extrapolation.CLAMP
        )

        return {
            transform: [{translateY: translateY}]
        }
    })

    const moveUpStyleNotExtrapolate = useAnimatedStyle(() => {
        const translateY = interpolate(
            scrollYGlobal.value,
            [0, 50],
            [0, -50],
        )

        return {
            transform: [{translateY: translateY}]
        }
    })

    return (
        <View style={styles.container}>
            <View style={{height: Platform.OS === "android" ? insets.top : 0}}/>
            <Animated.View style={moveUpStyle}>
                <Animated.View style={moveUpStyleNotExtrapolate}>
                    <Graphics/>
                </Animated.View>

                <Animated.View style={[backgroundColorChanges, styles.topHeader]}>
                    <HeaderSection/>
                </Animated.View>
            </Animated.View>
        </View>
    )
}