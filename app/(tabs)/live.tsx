import { View, Image } from "react-native";
import {emptyStyles} from "@/styles/emptyStyles";

export default function Live() {
    return (
        <View style={emptyStyles.live_container}>
            <Image source={require("@/assets/images/coming_soon2.jpg")} style={emptyStyles.emptyImage}/>
        </View>
    )
}