import {StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";
import {screenHeight, screenWidth} from "@/constants";
import {BOTTOM_TAB_HEIGHT} from "@/unistyles/Constants";
import {RFValue} from "react-native-responsive-fontsize";

export const tabStyles = StyleSheet.create({
    tabContainer: {
        width: screenWidth* 0.82,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15
    },
    tabBarContainer: {
        width: '100%',
        position: 'absolute',
        height: BOTTOM_TAB_HEIGHT,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 11,
        shadowColor: '#000',
        bottom: 0,
        zIndex: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    verticalLine: {
        marginHorizontal: 10,
        height: '60%',
        width: 1,
        position: "absolute",
        left: '55%',
        borderRadius: 20,
        opacity: 0.2,
        backgroundColor: Colors.lightText
    },
    tabItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    focusedTabItem: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary,
    },
    slidingIndicator: {
        position: 'absolute',
        top: 0,
        height: 3,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        width: '15%',
    },
    blinkitLogoContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '12%',
        overflow: 'hidden',
        backgroundColor: '#F7CB46',
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6
    },
    blinkitLogo: {
        width: '100%',
        height: 26,
        resizeMode: 'contain',
    },
    tabLabel: {
        fontFamily: 'OkraMedium',
        fontSize: RFValue(10),
        color: '#B3B3B3',
    },
    focusedTabLabel: {
        color: '#fff',
    },
})