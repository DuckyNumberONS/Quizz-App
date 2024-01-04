import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import NavbarCategory from "../navbar-category";
import { topAutors, topQuiz } from "../../src/config/top";

const TopQiz = () => {
  return (
    <View className="mt-6">
      <NavbarCategory title="Top quiz" />
      <View className="flex-row items-center">
        <ScrollView horizontal>
          {topQuiz.map((items) => (
            <View key={items.id}>
              <View
                className="rounded-[20px] relative mr-2 border-b-[5px] border-r-[3px]"
                style={{ borderColor: items.color }}
              >
                <Image
                  className="w-[170px] h-[120px] rounded-2xl"
                  source={items.url}
                  resizeMethod="auto"
                />
                <View
                  className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl"
                  style={{ backgroundColor: items.color }}
                >
                  <Text className="text-white font-medium text-sm mx-1">
                    {items.totalQuestion} questions
                  </Text>
                </View>
              </View>
              <Text className="font-medium text-black text-base">Peter</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
export default TopQiz;
