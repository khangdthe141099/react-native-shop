import {Platform, StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";
import {RFValue} from "react-native-responsive-fontsize";

export const modelStyles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.background,
        shadowOffset: {width: 1, height: 3},
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 2,
        zIndex: 1,
        shadowColor: Colors.text,
        padding: 10
    },
    vegIcon: {
        width: 15,
        height: 15,
        top: 3,
        resizeMode: "contain"
    },
    noShadowHeaderContainer: {
        borderBottomWidth: 1,
        borderColor: Colors.border,
        backgroundColor: Colors.background,
        zIndex: 1,
        padding: 15
    },
    flexRowGap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4
    },
    flexRowItemBaseline: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingVertical: 10,
        borderBottomColor: Colors.border
    },
    flexRowGapBaseline: {
        flexDirection: 'row',
        width: "70%",
        alignItems: 'flex-start',
        gap: 10,
    },
    icon: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: Colors.background,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.2,
        elevation: 5,
        shadowRadius: 3,
        borderRadius: 100,
        shadowColor: Colors.text,
    },
    headerImage: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
        borderRadius: 12
    },
    scrollContainer: {
        backgroundColor: Colors.background_light,
        padding: 10,
    },
    scrollContainerWhiteBackground: {
        backgroundColor: Colors.background,
        padding: 10,
    },
    subContainer: {
        backgroundColor: Colors.background,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.background,
        shadowOffset: {width: 1, height: -3},
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 2,
        zIndex: 2,
        shadowColor: Colors.text,
        padding: 10,
        paddingBottom: Platform.OS === 'ios' ? 30 : 10
    },
    noShadowFooterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.background,
        padding: 15,
        paddingBottom: Platform.OS === 'ios' ? 30 : 10
    },
    selectedContainer: {
        height: 45,
        width: '30%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: Colors.active,
        borderRadius: 12,
        backgroundColor: Colors.active_light
    },
    animatedCount: {
        fontSize: RFValue(16),
        color: Colors.text,
        fontFamily: 'Okra-Bold',
        margin: 0,
    },
    addButtonContainer: {
        backgroundColor: Colors.active,
        borderRadius: 10,
        width: '65%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45
    },
    selectedOptions: {
        opacity: 0.6,
        marginTop: 2
    },
    cartOperationContainer: {
        width: '25%',
        alignItems: "flex-end",
        justifyContent: 'flex-end'
    },
    miniAddButtonContainer: {
        backgroundColor: Colors.active_light,
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: "row",
        borderColor: Colors.border,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 30
    },
    miniAnimatedCount: {
        fontSize: RFValue(12),
        color: Colors.text,
        fontFamily: 'Okra-Bold',
        marginHorizontal: 12,
        marginLeft: 14,
    },
})