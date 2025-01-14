import {FlatList, View} from "react-native"
import {FC} from "react";
import CustomText from "@/components/globals/CustomText";
import {cardStyles} from "@/styles/cardStyles";
import {restaurantItemsData} from "@/utils/dummyData";
import RestaurantCard from "./RestaurantCard";

type RestaurantListProps = {}

const RestaurantList: FC<RestaurantListProps> = () => {
    const renderItem = ({item}: any) => {
        return (
            <RestaurantCard item={item}/>
        )
    }

    return (
        <View>
            <CustomText style={cardStyles.centerText} fontFamily="OkraBold" fontSize={12}>
                1823 restaurants delivering to you
            </CustomText>

            <CustomText style={cardStyles.centerText} fontFamily="OkraMedium" fontSize={12}>
                FEATURE
            </CustomText>

            <FlatList
                data={restaurantItemsData}
                scrollEventThrottle={16}
                bounces={false}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(item) => item?.id?.toString()}
                contentContainerStyle={cardStyles.listContainer}
            />
        </View>
    )
}

export default RestaurantList