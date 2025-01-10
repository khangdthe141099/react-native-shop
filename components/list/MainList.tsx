import {NativeScrollEvent, NativeSyntheticEvent, SectionList, View, ViewToken} from "react-native"
import {FC, useRef, useState} from "react";
import React from "react";
import ExploreSection from "@/components/home/ExploreSection";
import RestaurantList from "@/components/list/RestaurantList";
import {restaurantStyles} from "@/styles/restaurantStyles";
import {useSharedState} from "@/app/(tabs)/SharedContext";
import {useAnimatedStyle, withTiming} from "react-native-reanimated";
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
        const currentScrollY = event?.nativeEvent?.contentOffset?.y
        const isScrollingDown = currentScrollY > prevScrollY.current
        scrollY.value = isScrollingDown ? withTiming(1, {duration: 300}) : withTiming(0, {duration: 300})
        scrollYGlobal.value = currentScrollY
        prevScrollY.current = currentScrollY

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
            <SectionList
                sections={sectionedData}
                overScrollMode="always"
                onScroll={handleScroll}
                scrollEventThrottle={16}
                bounces={false}
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