import { View, Image } from "react-native";
import {emptyStyles} from "@/styles/emptyStyles";

export default function Reorder() {
  return (
      <View style={emptyStyles.container}>
        <Image source={require("@/assets/images/coming_soon3.png")} style={emptyStyles.emptyImage}/>
      </View>
  )
}