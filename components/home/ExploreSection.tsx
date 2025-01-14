import {Pressable, View} from "react-native"
import {FC, useState} from "react";
import {homeStyles} from "@/styles/homeStyles";
import CustomText from "@/components/globals/CustomText";
import {Colors} from "@/constants/Colors";
import Icon from "../globals/Icon";
import RecommendedList from "@/components/list/RecommendedList";
import BreakerText from "@/components/ui/BreakerText";
import RegularFoodList from "../list/RegularFoodList";

type ExploreSectionProps = {}

const ExploreSection: FC<ExploreSectionProps> = () => {
    const styles = homeStyles(true)
    const getStylesActive = (isActive: boolean) => {
        return homeStyles(isActive)
    }
    const [tabSelected, setTabSelected] = useState(1)

    return (
        <View style={styles.topHidingContainer}>
            <View style={styles.flexRowCenter}>
                <Pressable style={getStylesActive(tabSelected == 1).leftTab} onPress={() => setTabSelected(1)}>
                    <CustomText
                        color={tabSelected == 1 ? Colors.text : Colors.lightText}
                        fontFamily="OkraMedium">
                        Recommended
                    </CustomText>
                </Pressable>

                <Pressable style={getStylesActive(tabSelected == 2).rightTab} onPress={() => setTabSelected(2)}>
                    <Icon name="bookmark-outline" iconFamily="Ionicons"
                          color={tabSelected == 2 ? Colors.text : Colors.lightText} size={14}/>
                    <CustomText
                        color={tabSelected == 2 ? Colors.text : Colors.lightText}
                        fontFamily="OkraMedium">
                        Collection
                    </CustomText>
                </Pressable>
            </View>

            <RecommendedList/>
            <BreakerText text="WHAT'S ON YOUR MIND"/>
            <RegularFoodList/>
            <BreakerText text="ALL RESTAURENTS"/>
        </View>
    )
}

export default ExploreSection