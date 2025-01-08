import { View, Image } from "react-native";
import {emptyStyles} from "@/styles/emptyStyles";

export default function Dining() {
    return (
        <View style={emptyStyles.container}>
            <Image source={require("@/assets/images/coming_soon.jpg")} style={emptyStyles.emptyImage}/>
        </View>
    )
}