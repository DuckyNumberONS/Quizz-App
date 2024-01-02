import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import NavbarCategory from "../navbar-category";
import { topCollections } from "../../src/config/top";

const TopCollections = () => {
  return (
    <View className="mt-6">
      <NavbarCategory title="Top collections" />
      <View className="flex-row items-center relative">
        <ScrollView horizontal>
          {topCollections.map((items) => (
            <View
              className="rounded-r-[20px] rounded-b-[21px] relative mr-2 border-b-[5px] border-r-[3px]"
              style={{ borderColor: items.color }}
              key={items.id}
            >
              <Image
                className="w-[170px] h-[120px] rounded-2xl"
                source={items.url}
                resizeMethod="auto"
              />
              <Text className="absolute bottom-3 left-3 font-medium text-white text-xl">
                {items.title}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
export default TopCollections;
