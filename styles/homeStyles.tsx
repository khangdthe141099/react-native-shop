import {Platform, StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";
import {isBannerHeight, screenHeight, screenWidth} from "@/constants";
import {RFValue} from "react-native-responsive-fontsize";
import {defaultTheme} from "@/styles/unistyles";

export const homeStyles = (isActive: boolean) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
    topHidingContainer: {
        marginTop: isBannerHeight,
        backgroundColor: Colors.background,
    },
    topHeader: {
        zIndex: 1,
        alignSelf: 'center',
        paddingHorizontal: 10,
    },
    animatedText: {
        fontSize: RFValue(10.5),
        fontFamily: 'Okra-Bold'
    },
    animatedSubText: {
        fontSize: RFValue(7),
        lineHeight: 9,
        fontFamily: 'Okra-Bold'
    },
    exploreContainer: {
        marginVertical: 10,
    },
    lottieContainer: {
        width: screenWidth,
        backgroundColor: '#CC152D',
        height: Platform.OS === 'android' ? screenHeight * 0.54 : screenHeight * 0.6,
        position: "absolute",
        zIndex: -3,
    },
    lottie: {
        width: '100%',
        bottom: 117,
        height: screenHeight,
    },
    rollingText: {
        opacity: 0.6,
    },
    flexRowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 4
    },
    flexRowGap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    translation: {
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: defaultTheme.border.md,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: Colors.background
    },
    translationIcon: {
        resizeMode: 'contain',
        width: 32,
        height: 32
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: defaultTheme.border.full,
        resizeMode: 'contain'
    },
    goldenCircle: {
        width: 50,
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'center',
        height: 50,
        borderRadius: defaultTheme.border.full,
    },
    profileAvatar: {
        width: 40,
        marginHorizontal: 5,
        height: 40,
        borderRadius: defaultTheme.border.full,
        justifyContent: 'center',
        alignItems: 'center'
    },

    vegMode: {
        width: '15%',
        top: 3,
        justifyContent: "center",
        alignItems: 'center'
    },
    switch: {
        width: 35,
        height: 35,
        resizeMode: "contain",
        bottom: 2
    },
    searchInputContainer: {
        backgroundColor: '#F3F4F7',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.7,
        elevation: 5,
        shadowRadius: 6,
        shadowColor: Colors.background,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 12,
        width: '88%',
        borderWidth: 0.6,
        borderColor: Colors.tertiary,
        paddingHorizontal: 10,
    },
    textContainer: {
        width: '80%',
        paddingLeft: 10,
        height: 48
    },
    divider: {
        width: 1,
        height: 24,
        backgroundColor: '#ddd',
        marginHorizontal: 10
    },
    padding: {
        padding: 10
    },
    flexRowCenter: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    leftTab: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: isActive ? Colors.tertiary : Colors.background,
        borderWidth: 1,
        borderColor: isActive ? Colors.active : Colors.border,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    rightTab: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        padding: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: isActive ? Colors.tertiary : Colors.background,
        borderWidth: 1,
        borderColor: isActive ? Colors.active : Colors.border,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
})