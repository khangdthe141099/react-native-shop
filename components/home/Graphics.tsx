import {Platform, View} from "react-native"
import {FC} from "react";
import {homeStyles} from "@/styles/homeStyles";
import LottieView from "lottie-react-native";

type GraphicsProps = {}

const Graphics: FC<GraphicsProps> = () => {
    const styles = homeStyles(true)

    return (
        <View style={styles.lottieContainer} pointerEvents="none">
            <LottieView
                style={styles.lottie}
                source={require('@/assets/animations/event.json')}
                autoPlay
                loop={Platform.OS !== "android"}
                hardwareAccelerationAndroid
            />
        </View>
    )
}

export default Graphics