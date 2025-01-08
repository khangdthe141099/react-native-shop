import {StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";
import {screenHeight, screenWidth} from "@/constants";

export const emptyStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background
    },
    live_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#000'
    },
    emptyImage: {
        width: screenWidth * 0.9,
        height: screenHeight * 0.4,
        resizeMode:'contain'
    }
})