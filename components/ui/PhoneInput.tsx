import {Pressable, TextInput, View} from "react-native"
import {phoneStyles} from "@/styles/phoneStyles";
import CustomText from "@/components/globals/CustomText";
import {Colors} from "@/constants/Colors";
import Icon from "@/components/globals/Icon";

type PhoneInputProps = {
    value: string;
    onChangeText: (text: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({onBlur, onFocus, value, onChangeText}) => {
    return (
        <View style={phoneStyles.container}>
            <Pressable style={phoneStyles.countryPickerContainer}>
                <CustomText variant="h2">🇻🇳</CustomText>
                <Icon iconFamily="Ionicons" name="caret-down-sharp" color={Colors.lightText} size={18}/>
            </Pressable>

            <View style={phoneStyles.phoneInputContainer}>
                <CustomText fontFamily="OkraBold">+84</CustomText>
                <TextInput
                    placeholder="Enter mobile number"
                    keyboardType="phone-pad"
                    value={value}
                    placeholderTextColor={Colors.lightText}
                    onChangeText={onChangeText}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    style={phoneStyles.input}
                />
            </View>
        </View>
    )
}

export default PhoneInput