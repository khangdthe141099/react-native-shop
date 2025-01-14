import {FlatList, Pressable, ScrollView, Image} from "react-native"
import {FC} from "react";
import {cardStyles} from "@/styles/cardStyles";
import {recommendedListData, regularFoodData} from "@/utils/dummyData";

type RestaurantListProps = {}

const RegularFoodList: FC<RestaurantListProps> = () => {

    const renderItem = ({item}: any) => {
        return (
            <Pressable style={cardStyles.itemContainer}>
                <Image source={{uri: item?.imageUrl}} style={cardStyles.regularFoodImage}/>
            </Pressable>
        )
    }

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FlatList
                numColumns={Math.ceil(regularFoodData?.length / 2)}
                data={regularFoodData}
                renderItem={renderItem}
                scrollEnabled={false}
                keyExtractor={item => item?.id?.toString()}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={cardStyles.listContainer}
            />
        </ScrollView>
    )
}

export default RegularFoodList