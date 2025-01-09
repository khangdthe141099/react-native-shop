import {View} from "react-native"
import {FC} from "react";
import CustomText from "@/components/globals/CustomText";

type RestaurantListProps = {}

const RestaurantList: FC<RestaurantListProps> = () => {
    return (
        <View>
            <CustomText>Restaurant section</CustomText>
        </View>
    )
}

export default RestaurantList