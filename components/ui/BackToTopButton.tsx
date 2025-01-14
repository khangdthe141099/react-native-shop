import {FC} from "react";
import {TouchableOpacity} from "react-native";
import Icon from "@/components/globals/Icon";
import {RFValue} from "react-native-responsive-fontsize";
import CustomText from "@/components/globals/CustomText";

type BackToTopButtonProps = {
    onPress: () => void
}

const BackToTopButton: FC<BackToTopButtonProps> = ({onPress}) => {

    return (
        <TouchableOpacity onPress={onPress} style={{flexDirection: "row", alignItems: "center", gap: 6}}>
            <Icon name="arrow-up-circle-outline" iconFamily="Ionicons" color="#fff" size={RFValue(12)}/>
            <CustomText variant="h6" style={{color: "#fff"}} fontFamily="OkraBold">Back to top</CustomText>
        </TouchableOpacity>
    )
}

export default BackToTopButton