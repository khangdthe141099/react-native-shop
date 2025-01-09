import {View} from "react-native"
import {FC} from "react";
import {homeStyles} from "@/styles/homeStyles";
import CustomText from "@/components/globals/CustomText";

type ExploreSectionProps = {}

const ExploreSection: FC<ExploreSectionProps> = () => {
    const styles = homeStyles(true)

    return (
        <View>
            <CustomText>Explore section</CustomText>
        </View>
    )
}

export default ExploreSection