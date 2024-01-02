import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import NavbarCategory from "../navbar-category";
import { topAutors } from "../../src/config/top";

const TopAutors = () => {
  return (
    <View className="mt-6">
      <NavbarCategory title="Top autors" />
      <View className="flex-row items-center">
        <ScrollView horizontal>
          {topAutors.map((items) => (
            <View key={items.id}>
              <View
                className="rounded-full relative mr-3"
                style={{ backgroundColor: items.color }}
              >
                <Image
                  className="w-[80px] h-[80px] rounded-2xl"
                  source={require("../../public/images/aurous.png")}
                  resizeMethod="auto"
                />
              </View>
              <Text className="font-bold text-black text-lg text-center">
                Peter
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
export default TopAutors;
