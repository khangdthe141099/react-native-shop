import {Pressable, View, Image} from "react-native"
import {FC} from "react";
import {restaurantStyles} from "@/styles/restaurantStyles";
import {useRouter} from "expo-router";
import CustomText from "@/components/globals/CustomText";
import StarRating from "@/components/ui/StarRating";

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
                    <Image source={{uri: item?.imageUrl}} style={restaurantStyles.image}/>
                </View>
                <View style={restaurantStyles.info}>
                    <View style={restaurantStyles.textContainer}>
                        <View style={restaurantStyles.textPart}>
                            <CustomText
                                variant="h5"
                                style={restaurantStyles.name}
                                numberOfLines={1}
                                fontFamily="OkraBold"
                            >
                                {item?.name}
                            </CustomText>
                            <CustomText>
                                {item.time} • {item?.distance} • $150 for one
                            </CustomText>
                        </View>

                        <StarRating rating={item.rating}/>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default RestaurantCard