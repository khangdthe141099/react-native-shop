import {RFValue} from "react-native-responsive-fontsize";
import {TextStyle, View, ViewStyle, Image} from "react-native";
import {Colors} from "@/constants/Colors";
import {FC, memo} from "react";
import CustomText from "@/components/globals/CustomText";
import DeliveryFocused from '@/assets/tabicons/delivery_focused.png'
import Delivery from '@/assets/tabicons/delivery.png'
import ReorderFocused from '@/assets/tabicons/reorder_focused.png'
import Reorder from '@/assets/tabicons/reorder.png'
import LiveFocused from '@/assets/tabicons/live_focused.png'
import Live from '@/assets/tabicons/live.png'
import DiningFocused from '@/assets/tabicons/dining_focused.png'
import Dining from '@/assets/tabicons/dining.png'
import {useAppSelector} from "@/states/hooks";

interface TabProps {
    name: string
}

interface IconProp {
    focused: boolean;
}

const styles = {
    width: RFValue(18),
    height: RFValue(18)
}

const tabStyles: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center'
}

const textStyleInActive: TextStyle = {
    textAlign: 'center',
    marginTop: 4,
    color: Colors.lightText,
    fontSize: RFValue(9.5)
}

const TabIcon: FC<TabProps> = memo(({name}) => {
    const getTabSource = () => {
        switch (name) {
            case 'Delivery':
                return Delivery
            case 'Dining':
                return Dining
            case 'Reorder':
                return Reorder
            case 'Live':
                return Live
            default:
                return Delivery
        }
    }

    return (
        <View style={tabStyles}>
            <Image
                source={getTabSource()}
                style={styles}
            />
        </View>
    )
})

const TabIconFocused: FC<TabProps> = memo(({name}) => {
    const getTabSource = () => {
        switch (name) {
            case 'Delivery':
                return DeliveryFocused
            case 'Dining':
                return DiningFocused
            case 'Reorder':
                return ReorderFocused
            case 'Live':
                return LiveFocused
            default:
                return DeliveryFocused
        }
    }

    const isVegMode = useAppSelector(state => state.user.isVegMode)

    return (
        <View style={tabStyles}>
            <Image
                source={getTabSource()}
                style={[styles, {tintColor: (name === "Live" ? undefined : isVegMode ? Colors.active : Colors.primary)}]}
            />
        </View>
    )
})

export const DeliveryTabIcon: FC<IconProp> = ({focused}) => {
    return focused ? <TabIconFocused name="Delivery"/> : <TabIcon name="Delivery"/>
}

export const DiningTabIcon: FC<IconProp> = ({focused}) => {
    return focused ? <TabIconFocused name="Dining"/> : <TabIcon name="Dining"/>
}

export const ReorderTabIcon: FC<IconProp> = ({focused}) => {
    return focused ? <TabIconFocused name="Reorder"/> : <TabIcon name="Reorder"/>
}

export const LiveTabIcon: FC<IconProp> = ({focused}) => {
    return focused ? <TabIconFocused name="Live"/> : <TabIcon name="Live"/>
}



