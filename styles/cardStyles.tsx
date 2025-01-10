import {StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";
import {screenHeight, screenWidth} from "@/constants";

export const cardStyles = StyleSheet.create({
    recommendedContainer: {
        marginTop: 25,
        paddingLeft: 10
    },
    mainPadding: {
        padding: 10
    },
    regularFoodContainer: {
        marginVertical: 10,
    },
    listContainer: {
        paddingHorizontal: 15,
    },
    itemContainer: {
        marginTop: 15,
        marginLeft: 15,
        marginBottom: 15,
        width: screenWidth * 0.3,
        overflow: 'hidden',
    },
    regularFoodImage: {
        width: screenWidth * 0.28,
        height: screenWidth * 0.28,
        resizeMode: 'cover'
    },
    bookmarkIcon: {
        position: 'absolute',
        zIndex: 2,
        top: 5,
        right: 5,
    },
    bookmarkContainer: {
        position: 'absolute',
        top: 4,
        right: 4,
    },
    bookmarkIconImage: {
        width: 15,
        height: 18,
        resizeMode: 'contain'
    },
    itemImage: {
        width: '100%',
        height: 100,
    },
    discountContainer: {
        position: 'absolute',
        bottom: 8,
        left: 8,
        zIndex: 2
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    clockIcon: {
        width: 14,
        height: 14,
        resizeMode: 'contain'
    },
    itemInfo: {
        marginTop: 8,
    },
    imageContainer: {
        borderRadius: 12,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Colors.border
    },
    centerText: {
        textAlign: 'center',
        opacity: 0.4,
        marginVertical: 10,
    },
});