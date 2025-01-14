import {FC} from "react";
import {StyleSheet, View} from "react-native";
import CustomText from "@/components/globals/CustomText";
import Icon from "../globals/Icon";

type StarRatingProps = {
    rating: number;
}

const getStarRatingColor = (rating: number) => {
    if (rating >= 4) {
        return "#1C653C"
    } else if (rating >= 3) {
        return "#128145"
    } else if (rating >= 2) {
        return "#e67e22"
    } else if (rating >= 1) {
        return "#953"
    } else {
        return "#ccc"
    }
}

const StarRating: FC<StarRatingProps> = ({rating}) => {
    const backgroundColor = getStarRatingColor(rating)

    return (
        <View style={[styles.container, {backgroundColor}]}>
            <CustomText color="#fff" fontSize={12} fontFamily="OkraBold">{rating || "0"}</CustomText>
            <Icon name="star" iconFamily="MaterialIcons" color="#fff" size={16}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        borderRadius: 10,
        gap: 5,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center"
    }
})

export default StarRating