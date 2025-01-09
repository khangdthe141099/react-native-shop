import {View} from "react-native"
import {FC} from "react";
import LocationHeader from "@/components/home/LocationHeader";
import SearchBar from "@/components/home/SearchBar";

type HeaderSectionProps = {}

const HeaderSection: FC<HeaderSectionProps> = () => {
    return (
        <View>
            <LocationHeader/>
            <SearchBar/>
        </View>
    )
}

export default HeaderSection