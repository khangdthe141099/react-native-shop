import {View} from "react-native"
import {loginStyles} from "@/styles/authStyles";
import CustomText from "../globals/CustomText";

type BreakerTextProps = {
    text: string
}

const BreakerText: React.FC<BreakerTextProps> = ({text}) => {
    return (
        <View style={loginStyles.breakerContainer}>
            <View style={loginStyles.horizontalLine}/>
            <CustomText
                fontSize={12}
                fontFamily="OkraMedium"
                style={loginStyles.breakerText}
            >{text}</CustomText>
            <View style={loginStyles.horizontalLine}/>
        </View>
    )
}

export default BreakerText