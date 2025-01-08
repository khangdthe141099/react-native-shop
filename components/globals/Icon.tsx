import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from "react";

type IconProps = {
    color?: string;
    size: number;
    name: string;
    iconFamily: "Ionicons" | "MaterialCommunityIcons" | "MaterialIcons"
}

const Icon: React.FC<IconProps> = ({color, iconFamily, name, size}) => {
    return (
        <>
            {iconFamily === "Ionicons" && <IonIcons name={name} size={size} color={color}/>}
            {iconFamily === "MaterialIcons" && <MaterialIcons name={name} size={size} color={color}/>}
            {iconFamily === "MaterialCommunityIcons" && <MaterialCommunityIcons name={name} size={size} color={color}/>}
        </>
    )
}

export default Icon