import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface PropsNav {
  title: string;
}

const NavbarCategory: React.FC<PropsNav> = ({ title }) => {
  return (
    <View className="flex-row justify-between items-center mb-4">
      <Text className="text-[20px] font-bold">{title}</Text>
      <Text className="text-base font-semibold">Show all</Text>
    </View>
  );
};
export default NavbarCategory;
