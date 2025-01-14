import {Pressable, View, Image} from "react-native"
import {FC} from "react";
import {restaurantStyles} from "@/styles/restaurantStyles";
import {useRouter} from "expo-router";

type RestaurantCardProps = {
    item: any;
}

const RestaurantCard: FC<RestaurantCardProps> = ({item}) => {
    const router = useRouter();

    return (
        <Pressable onPress={() => {
            router.push('/restaurants');
        }}>
            <View style={restaurantStyles.card}>
                <View>
                    <Image source={{uri: item?.image}}/>
                </View>
            </View>
        </Pressable>
    )
}

export default RestaurantCard