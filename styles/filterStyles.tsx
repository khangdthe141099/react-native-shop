import {StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";

export const filtertyles = StyleSheet.create({
    filterBar: {
        paddingHorizontal: 10,
        paddingBottom:10,
        alignItems: 'center'
    },
    filterItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        gap: 5,
        padding: 5,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        elevation: 5,
        borderRadius: 8,
        shadowRadius: 1.5,
        shadowColor: Colors.lightText,
        borderColor: Colors.border,
        backgroundColor: Colors.background,
        borderWidth: 1,
        marginRight: 10
    }
})