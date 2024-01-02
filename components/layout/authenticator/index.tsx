import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { ReactNode, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Animated, {
  BounceOutDown,
  FadeIn,
  FadeInLeft,
} from "react-native-reanimated";

interface Props {
  children: ReactNode;
  handleSubmit?: any;
  onSubmit?: any;
  title: string;
  description?: string;
  titleButton: string;
  step?: number;
}

const LayoutReg: React.FC<Props> = ({
  children,
  handleSubmit,
  onSubmit,
  title = "Loading...",
  description,
  titleButton = "Loading...",
  step = 0,
}) => {
  const index = step * 25;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const handleBackScreen = () => {
    navigation.goBack();
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View className="relative flex-row mt-10 items-center mx-4">
        <TouchableOpacity
          className={` absolute z-20`}
          onPress={handleBackScreen}
        >
          <Image
            className="bg-cover bg-no-repeat w-5 h-5 "
            source={require("../../../public/images/back.png")}
          />
        </TouchableOpacity>
        <View className="mx-auto flex-row items-center ">
          <View
            className={
              step == 0
                ? "hidden"
                : `flex-row bg-slate-400 w-[150px] rounded-xl mx-auto items-center h-2`
            }
          >
            <Animated.View
              className="bg-yellow-300 h-2 mr-1 rounded-xl"
              style={{ width: `${index}%` }}
              entering={FadeInLeft.delay(400).duration(1000)}
            />
          </View>
          {step == 4 && (
            <Animated.View
              entering={BounceOutDown.delay(5000).duration(1000)}
              className="ml-2"
            >
              <Text>🎉</Text>
            </Animated.View>
          )}
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View className="mt-10 mx-4 h-full bg-white">
          <Text className="text-[34px] font-bold">{title}</Text>
          {description && (
            <Text className="text-[20px] mt-2 font-semibold">
              {description}
            </Text>
          )}
          <View className="h-[550px]">{children}</View>
          {handleSubmit && (
            <Animated.View
              className="w-full relative"
              entering={FadeIn.delay(400).duration(2000).springify()}
            >
              <TouchableOpacity
                className="w-full bg-black border-b-4 border-r-4 border-[#6d5ff6] py-5 rounded-3xl"
                onPress={handleSubmit(onSubmit)}
              >
                <Text className="text-sm font-bold text-white text-center">
                  {titleButton}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          )}
        </View>
      </View>
    </View>
  );
};

export default React.memo(LayoutReg);
