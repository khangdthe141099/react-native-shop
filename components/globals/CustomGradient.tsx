import {View, ViewStyle} from "react-native"
import {FC} from "react";
import {LinearGradient} from 'expo-linear-gradient';

type CustomGradientProps = {
    position: "top" | "bottom",
    mode?: "light" | "dark",
    style?: ViewStyle
}

const darkColors = [
    'rgba(0,0,0,0.7)',
    'rgba(0,0,0,0.4)',
    'rgba(0,0,0,0.1)',
    'rgba(0,0,0,0.0)'
]

const lightColors = [
    'rgba(255,255,255,1)',
    'rgba(255,255,255,0.9)',
    'rgba(255,255,255,0.1)',
]

const CustomGradient: FC<CustomGradientProps> = ({position = "top", mode = "dark", style}) => {

    const bottomColors = [...(mode == "dark" ? darkColors : lightColors)].reverse()

    const gradientStyle: ViewStyle = {
        position: 'absolute',
        width: '100%',
        height: 60,
        top: position === "top" ? 0 : undefined,
        bottom: position === "bottom" ? 0 : undefined,
        zIndex: 1
    }

    return (
        <LinearGradient
            colors={bottomColors as any}
            style={[gradientStyle, style]}
        />
    )
}

export default CustomGradient