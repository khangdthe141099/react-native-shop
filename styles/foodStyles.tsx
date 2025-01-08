import {StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";

export const foodStyles = (isAdded: boolean) => StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: "space-between",
        paddingVertical: 10,
        marginHorizontal: 10,
        marginVertical: 5
    },
    vegIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        marginBottom: 10
    },
    animatedCount: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Okra-Bold',
        margin: 0,
    },
    lowOpacity: {
        opacity: 0.5,
        marginTop: 2,
        marginBottom: 10
    },
    infoContainer: {
        width: '57%',
        overflow: 'hidden'
    },
    imageContainer: {
        width: "40%"
    },
    addToCollectionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.border,
        padding: 5,
        alignSelf: 'flex-start',
        marginTop: 20
    },
    image: {
        width: "100%",
        height: 130,
        borderRadius: 15
    },
    foodImage: {
        width: "100%",
        height: '100%',
        resizeMode: "cover",
        borderRadius: 15
    },

    customizeText: {
        textAlign: 'center',
        opacity: 0.6,
        marginTop: 5,
        bottom: -10,
    },
    addButtonContainer: {
        width: 120,
        borderWidth: 0.7,
        borderRadius: 10,
        bottom: -12,
        position: "absolute",
        justifyContent: 'center',
        alignSelf: 'center',
        height: 40,
        borderColor: Colors.primary_light,
        backgroundColor: isAdded ? Colors.primary_light : '#FFF5F6',
    },
    noSelectionContainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    plusSmallIcon: {
        position: "absolute",
        top: -1,
        right: 8
    },
    selectedContainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
    }
})