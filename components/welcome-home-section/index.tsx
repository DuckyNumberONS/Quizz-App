import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

const WelcomeHome = () => {
  return (
    <View className="mt-5">
      <Text className="text-[30px] font-bold mb-5">Welcome home 👋</Text>
      <View className="bg-[#fff7ef] rounded-xl py-7 h-[340px] relative border border-[#ddceb5] ">
        <Text className="text-[24px] font-semibold text-[#8f6234] text-center">
          Play quiz together with your friends now!
        </Text>
        <View className="mx-auto">
          <Image
            className="max-h-[250px] max-w-[250px]"
            source={require("../../public/images/background-welcome-home1.png")}
            resizeMethod="auto"
          />
        </View>
        <View className="absolute bottom-4 w-full z-50">
          <TouchableOpacity className="bg-black rounded-[28px] mx-5">
            <Text className="text-white text-center py-5 font-semibold text-sm">
              Find friends
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default WelcomeHome;
