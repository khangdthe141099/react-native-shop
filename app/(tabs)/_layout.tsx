import {Tabs} from 'expo-router';
import React from 'react';
import {HapticTab} from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import {Colors} from "@/constants/Colors";
import {DeliveryTabIcon, DiningTabIcon, LiveTabIcon, ReorderTabIcon} from "@/components/ui/TabIcon";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarHideOnKeyboard: true,
                // tabBarStyle: Platform.select({
                //     ios: {
                //         // Use a transparent background on iOS to show the blur effect
                //         position: 'absolute',
                //     },
                //     default: {},
                // }),
            }}>
            <Tabs.Screen
                name="delivery"
                options={{
                    title: 'Delivery',
                    tabBarIcon: ({color, focused}) => <DeliveryTabIcon focused={focused}/>,
                }}
            />
            <Tabs.Screen
                name="reorder"
                options={{
                    title: 'Reorder',
                    tabBarIcon: ({color, focused}) => <ReorderTabIcon focused={focused}/>,
                }}
            />
            <Tabs.Screen
                name="dining"
                options={{
                    title: 'Dining',
                    tabBarIcon: ({color, focused}) => <DiningTabIcon focused={focused}/>,
                }}
            />
            <Tabs.Screen
                name="live"
                options={{
                    title: 'Live',
                    tabBarIcon: ({color, focused}) => <LiveTabIcon focused={focused}/>,
                }}
            />
        </Tabs>
    );
}
