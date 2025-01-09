import {NativeScrollEvent, NativeSyntheticEvent, SectionList, View} from "react-native"
import {FC, useRef} from "react";
import React from "react";
import ExploreSection from "@/components/home/ExploreSection";
import RestaurantList from "@/components/list/RestaurantList";
import {restaurantStyles} from "@/styles/restaurantStyles";
import {useSharedState} from "@/app/(tabs)/SharedContext";

type MainListProps = {}

const sectionedData = [
    {title: "Explore", data: [{}], renderItem: () => <ExploreSection/>},
    {title: "Restaurants", data: [{}], renderItem: () => <RestaurantList/>},
]

const MainList: FC<MainListProps> = () => {
    const { scrollY, scrollYGlobal, scrollToTop } = useSharedState()
    const previousScrollYTopButton = useRef<number>(0)
    const previousScrollY = useRef(0)
    const sectionListRef = useRef<SectionList>(null)

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
         
    }

    return (
        <>
            <SectionList
                sections={sectionedData}
                overScrollMode="always"
                // onScroll={handleScroll}
                scrollEventThrottle={16}
                bounces={false}
                nestedScrollEnabled
                showsVerticalScrollIndicator={false}
                keyExtractor={(item: any, index) => item.id ? item?.id?.toString() : index.toString()}
                contentContainerStyle={restaurantStyles.listContainer}
            />
        </>
    )
}

export default MainList