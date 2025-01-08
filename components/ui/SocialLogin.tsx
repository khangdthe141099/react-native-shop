import {Image, TouchableOpacity, View} from "react-native"
import {phoneStyles} from "@/styles/phoneStyles";
import Icon from "@/components/globals/Icon";
import {RFValue} from "react-native-responsive-fontsize";

type SocialLoginProps = {}

const SocialLogin: React.FC<SocialLoginProps> = () => {
    return (
        <View style={phoneStyles.socialContainer}>
            <TouchableOpacity style={phoneStyles.iconContainer}>
                <Image source={require("@/assets/icons/google.png")} style={phoneStyles.gimg}/>
            </TouchableOpacity>
            <TouchableOpacity style={phoneStyles.iconContainer}>
                <Icon name="logo-apple" iconFamily="Ionicons" color="#222" size={RFValue(18)}/>
            </TouchableOpacity>
            <TouchableOpacity style={phoneStyles.iconContainer}>
                <Icon name="ellipsis-horizontal-sharp" iconFamily="Ionicons" color="#222" size={RFValue(18)}/>
            </TouchableOpacity>
        </View>
    )
}

export default SocialLogin