import {NativeScrollEvent, NativeSyntheticEvent, SectionList, ViewToken} from "react-native"
import React, {FC, useRef, useState} from "react";
import ExploreSection from "@/components/home/ExploreSection";
import RestaurantList from "@/components/list/RestaurantList";
import {restaurantStyles} from "@/styles/restaurantStyles";
import {useSharedState} from "@/app/(tabs)/SharedContext";
import Animated, {useAnimatedStyle, withTiming} from "react-native-reanimated";
import BackToTopButton from "@/components/ui/BackToTopButton";
import {filtersOption} from "@/utils/dummyData";
import SortingAndFilters from "../home/SortingAndFilters";
import CustomText from "@/components/globals/CustomText";

type MainListProps = {}

const sectionedData = [
    {title: "Explore", data: [{}], renderItem: () => <ExploreSection/>},
    {title: "Restaurants", data: [{}], renderItem: () => <RestaurantList/>},
]

const MainList: FC<MainListProps> = () => {
    const {scrollY, scrollYGlobal, scrollToTop} = useSharedState()
    const previousScrollYTopButton = useRef<number>(0)
    const prevScrollY = useRef(0)
    const sectionListRef = useRef<SectionList>(null)

    const [isRestaurantsVisible, setIsRestaurantsVisible] = useState(false)
    const [isNearEnd, setIsNearEnd] = useState(false)

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        //IMPORTANT:
        const currentScrollY = event?.nativeEvent?.contentOffset?.y
        scrollYGlobal.value = currentScrollY //KEY FOR HANDLE SCROLL TO TOP

        const isScrollingDown = currentScrollY > prevScrollY.current
        scrollY.value = isScrollingDown ? withTiming(1, {duration: 300}) : withTiming(0, {duration: 300})
        prevScrollY.current = currentScrollY


        //NOT IMPORTANT:
        const containerHeight = event?.nativeEvent?.contentSize?.height
        const layoutHeight = event?.nativeEvent?.layoutMeasurement?.height
        const offset = event?.nativeEvent?.contentOffset?.y
        setIsNearEnd(offset + layoutHeight >= containerHeight - 500)
    }

    const handleScrollToTop = async () => {
        scrollToTop()
        sectionListRef.current?.scrollToLocation({
            sectionIndex: 0,
            itemIndex: 0,
            animated: true,
            viewPosition: 0
        })
    }

    const backToTopStyle = useAnimatedStyle(() => {
        const isScrollingUp = scrollYGlobal?.value < previousScrollYTopButton.current && scrollYGlobal.value > 180
        const opacity = withTiming(isScrollingUp && (isRestaurantsVisible || isNearEnd) ? 1 : 0, {duration: 300})
        const translateY = withTiming(isScrollingUp && (isRestaurantsVisible || isNearEnd) ? 0 : 10, {duration: 300})

        previousScrollYTopButton.current = scrollYGlobal.value

        return {
            opacity,
            transform: [{translateY}]
        }
    })

    const viewabilityConfig = {
        viewAreaCoveragePercentThreshold: 80
    }

    const onViewableItemsChanged = ({viewableItems}: { viewableItems: Array<ViewToken> }) => {
        const restaurantVisible = viewableItems.some((item: any) => item?.section?.title === "Restaurants" && item?.isViewable)

        setIsRestaurantsVisible(restaurantVisible)
    }


    return (
        <>
            <Animated.View style={[restaurantStyles.backToTopButton, backToTopStyle]}>
                <BackToTopButton onPress={handleScrollToTop}/>
            </Animated.View>
            <SectionList
                ref={sectionListRef}
                sections={sectionedData}
                overScrollMode="always"
                onScroll={handleScroll}
                scrollEventThrottle={16}
                bounces={false}
                renderSectionHeader={({section}) => {
                    if (section.title !== "Restaurants") {
                        return null
                    }
                    return (
                        <Animated.View
                            style={[isRestaurantsVisible || isNearEnd ? restaurantStyles.shadowBottom : null]}>
                            <SortingAndFilters menuTitle="Sort" options={filtersOption}/>
                        </Animated.View>
                    )
                }}
                nestedScrollEnabled
                showsVerticalScrollIndicator={false}
                keyExtractor={(item: any, index) => item.id ? item?.id?.toString() : index.toString()}
                contentContainerStyle={restaurantStyles.listContainer}
                stickySectionHeadersEnabled={true}
                viewabilityConfig={viewabilityConfig}
                onViewableItemsChanged={onViewableItemsChanged}
            />
        </>
    )
}

export default MainList