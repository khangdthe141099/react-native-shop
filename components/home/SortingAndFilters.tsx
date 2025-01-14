import {FC} from "react";
import CustomText from "@/components/globals/CustomText";
import {ScrollView, TouchableOpacity, View} from "react-native";
import {filterStyles} from "@/styles/filterStyles";
import Icon from "../globals/Icon";
import {Colors} from "@/constants/Colors";

type SortingAndFiltersProps = {
    menuTitle: string;
    options: string[]
}

const SortingAndFilters: FC<SortingAndFiltersProps> = ({menuTitle, options}) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={filterStyles.filterBar}
        >
            <TouchableOpacity style={filterStyles.filterItem}>
                <View style={{transform: [{rotate: '90deg'}]}}>
                    <Icon
                        name="tune-vertical-variant"
                        iconFamily="MaterialCommunityIcons"
                        size={16}
                        color={Colors.text}
                    />
                </View>
                <CustomText fontSize={11} fontFamily="OkraMedium">
                    {menuTitle}
                </CustomText>
                <Icon name="caret-down" iconFamily="Ionicons" size={16} color={Colors.text}/>
            </TouchableOpacity>

            {
                options?.map((i: string, index: number) => (
                    <TouchableOpacity key={index} style={filterStyles.filterItem}>
                        <CustomText fontSize={11} fontFamily="OkraMedium">{i}</CustomText>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )
}

export default SortingAndFilters