import {SafeAreaView, TouchableOpacity, View, Image} from "react-native"
import {FC} from "react";
import {useSharedState} from "@/app/(tabs)/SharedContext";
import {homeStyles} from "@/styles/homeStyles";
import Animated, {interpolate, useAnimatedStyle} from "react-native-reanimated";
import Icon from "../globals/Icon";
import CustomText from "@/components/globals/CustomText";

type LocationHeaderProps = {}

const LocationHeader: FC<LocationHeaderProps> = () => {
    const {scrollY, scrollYGlobal} = useSharedState()
    const textColor = "#fff"
    const styles = homeStyles(true)
    const opacityFadingStyles = useAnimatedStyle(() => {
        const opacity = interpolate(scrollYGlobal.value, [0, 80], [1, 0])

        return {
            opacity: opacity
        }
    })


    return (
        <Animated.View style={[opacityFadingStyles]}>
            <SafeAreaView/>
            <View style={styles.flexRowBetween}>
                <View style={styles.flexRowGap}>
                    <View style={styles.flexRowGap}>
                        <Icon name="map-marker" color={textColor} iconFamily="MaterialCommunityIcons" size={32}/>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.flexRow}>
                            <CustomText variant="h5" fontFamily="OkraBold" color={textColor}>Cau Giay, Ha Noi</CustomText>
                            <Icon name="chevron-down" color={textColor} iconFamily="MaterialCommunityIcons" size={18}/>
                        </TouchableOpacity>
                        <CustomText fontFamily="OkraMedium" color={textColor}>342 Ho Tung Mau</CustomText>
                    </View>
                </View>

                <View style={styles.flexRowGap}>
                    <TouchableOpacity style={styles.translation}>
                        <Image source={require('@/assets/icons/translation.png')} style={styles.translationIcon}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.profileAvatar}>
                        <Image source={require('@/assets/icons/golden_circle.png')} style={styles.goldenCircle}/>
                        <Image source={require('@/assets/images/mancity.png')} style={styles.profileImage}/>
                    </TouchableOpacity>
                </View>
            </View>
        </Animated.View>
    )
}

export default LocationHeader