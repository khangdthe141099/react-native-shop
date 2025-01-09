import {SafeAreaView, TouchableOpacity, View} from "react-native"
import React, {FC} from "react";
import {useAppDispatch, useAppSelector} from "@/states/hooks";
import {homeStyles} from "@/styles/homeStyles";
import {useSharedState} from "@/app/(tabs)/SharedContext";
import {interpolate, useAnimatedStyle} from "react-native-reanimated";
import Icon from "@/components/globals/Icon";
import {Colors} from "@/constants/Colors";
import {RFValue} from "react-native-responsive-fontsize";
import RollingContent from 'react-native-rolling-bar'
import searchBar from "react-native-screens/src/components/SearchBar";
import CustomText from "@/components/globals/CustomText";

type SearchBarProps = {}

const searchItems: string[] = ['Search "Cake"', 'Search "Ice cream"', 'Search "Pizza"', 'Search "Hamburger"']

const SearchBar: FC<SearchBarProps> = () => {
    const dispatch = useAppDispatch()
    const isVegMode = useAppSelector(state => state.user.isVegMode)
    const styles = homeStyles(true)
    const {scrollY, scrollYGlobal} = useSharedState()

    const textColorAnimation = useAnimatedStyle(() => {
        const textColor = interpolate(scrollYGlobal.value, [0, 80], [255, 0])

        return {
            color: `rbg(${textColor},${textColor},${textColor})`
        }
    })

    return (
        <>
            <SafeAreaView/>
            <View style={[styles.flexRowBetween, styles.padding]}>
                <TouchableOpacity style={styles.searchInputContainer} activeOpacity={0.8}>
                    <Icon
                        name="search"
                        color={isVegMode ? Colors.active : Colors.primary}
                        iconFamily="Ionicons"
                        size={RFValue(20)}/>
                    <RollingContent interval={3000} defaultStyle={false} customStyle={styles.textContainer}>
                        {
                            searchItems?.map((item, index) => {
                                return (
                                    <CustomText
                                        fontSize={12}
                                        fontFamily="OkraMedium"
                                        key={index}
                                        style={styles.rollingText}
                                    >
                                        {item}
                                    </CustomText>
                                )
                            })
                        }
                    </RollingContent>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default SearchBar