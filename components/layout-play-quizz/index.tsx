import React, { ReactNode } from "react";
import { ScrollView, View, Text } from "react-native";
import Header from "./header";
import Animated, {
  FadeIn,
  SlideInDown,
  SlideInUp,
  BounceInUp,
} from "react-native-reanimated";

interface Props {
  children: ReactNode;
  index: number;
  maxLenghthQuizz: number;
  notification?: string;
  poin?: number;
}

const LayoutPlayQuizz: React.FC<Props> = ({
  children,
  index,
  maxLenghthQuizz,
  notification,
  poin,
}) => {
  return (
    // className="absolute top-0 bg-[#3ed684] w-full h-[200px] z-10 rounded-b-3xl"
    <View className="flex-1 bg-white relative ">
      {notification == "TRUE" && (
        <Animated.View
          className="absolute top-0 bg-[#3ed684] w-full h-[200px] z-50 rounded-b-3xl"
          entering={BounceInUp.delay(400).duration(1400)}
        >
          <View className="mx-auto flex-row justify-center items-center w-full h-full">
            <View>
              <Text className="text-center text-3xl font-semibold text-white mt-3">
                Correct !
              </Text>
              <View className="mt-6 bg-white w-[190px] px-3 py-2 rounded-3xl">
                <Text className="font-bold text-base text-center">
                  +{poin ? poin : 0} Poin
                </Text>
              </View>
            </View>
          </View>
        </Animated.View>
      )}
      {notification == "FALSE" && (
        <Animated.View
          className="absolute top-0 bg-[#e35454] w-full h-[200px] z-50 rounded-b-3xl"
          entering={BounceInUp.delay(400).duration(1400)}
        >
          <View className="mx-auto flex-row justify-center items-center w-full h-full">
            <View>
              <Text className="text-center text-3xl font-semibold text-white mt-3">
                Incorrect !
              </Text>
              <View className="mt-6 bg-white w-[190px] px-3 py-2 rounded-3xl">
                <Text className="font-bold text-base text-center">+0 Poin</Text>
              </View>
            </View>
          </View>
        </Animated.View>
      )}
      <View className="flex-1 mt-10 relative mx-3">
        <Header index={index} maxLenghth={maxLenghthQuizz} />
        <View>{children}</View>
      </View>
    </View>
  );
};
export default LayoutPlayQuizz;
