import {FlatList, Pressable, ScrollView, View, Image, TouchableOpacity} from "react-native"
import {FC} from "react";
import CustomText from "@/components/globals/CustomText";
import {recommendedListData} from "@/utils/dummyData";
import {cardStyles} from "@/styles/cardStyles";
import {useRouter} from "expo-router";
import {Colors} from "@/constants/Colors";
import CustomGradient from "@/components/globals/CustomGradient";

type RecommendedListProps = {}

const RecommendedList: FC<RecommendedListProps> = () => {
    const router = useRouter();

    const renderItem = ({item}: any) => {
        return (
            <Pressable
                onPress={() => {
                    router.push('/restaurant');
                }}
                style={cardStyles.itemContainer}>
                <View style={cardStyles.imageContainer}>
                    <Image source={{uri: item.imageUrl}} style={cardStyles.itemImage}/>
                    {
                        item?.discount && (
                            <View style={cardStyles.discountContainer}>
                                <CustomText color={Colors.background} fontSize={12} fontFamily="OkraBold">
                                    {item?.discount}
                                </CustomText>
                                {
                                    item?.discountAmount && (
                                        <CustomText style={{lineHeight: 11}} color={Colors.background} fontSize={8}
                                                    fontFamily="OkraMedium">
                                            {item?.discountAmount}
                                        </CustomText>
                                    )
                                }
                            </View>
                        )
                    }

                    <TouchableOpacity style={cardStyles.bookmarkContainer}>
                        <Image style={cardStyles.bookmarkIconImage} source={require("@/assets/icons/bookmark.png")}/>
                    </TouchableOpacity>

                    <CustomGradient position={"bottom"}/>
                </View>

                <View style={cardStyles.itemInfo}>
                    <CustomText fontSize={10} color={Colors.text} fontFamily="OkraMedium" numberOfLines={1}>
                        {item?.name}
                    </CustomText>
                    <View style={cardStyles.flexRow}>
                        <Image source={require('@/assets/icons/clock.png')} style={cardStyles.clockIcon}/>
                        <CustomText fontFamily="OkraMedium" color={Colors.lightText} fontSize={9} numberOfLines={1}>
                            {`${item.time} • ${item?.distance}`}
                        </CustomText>
                    </View>
                </View>
            </Pressable>
        )
    }

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FlatList
                numColumns={Math.ceil(recommendedListData?.length / 2)}
                data={recommendedListData}
                renderItem={renderItem}
                scrollEnabled={false}
                keyExtractor={item => item?.id?.toString()}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={cardStyles.listContainer}
            />
        </ScrollView>
    )
}

export default RecommendedList