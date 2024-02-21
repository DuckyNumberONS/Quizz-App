import React from "react";
import { View, Text } from "react-native";
import Animated, {
  BounceOutDown,
  FadeIn,
  FadeInLeft,
} from "react-native-reanimated";

interface PropsHeader {
  index: number;
  maxLenghth: number;
}

const Header: React.FC<PropsHeader> = ({ index, maxLenghth }) => {
  const step = (100 / maxLenghth) * index;
  return (
    <View className="flex-row items-center justify-between">
      <Text className="text-lg font-semibold">
        {index}/{maxLenghth}
      </Text>
      <View className="mx-auto flex-row items-center ">
        <View
          className={`flex-row bg-slate-400 w-[150px] rounded-xl mx-auto items-center h-2`}
        >
          <Animated.View
            className="bg-yellow-300 h-2 mr-1 rounded-xl"
            style={{ width: `${step}%` }}
            entering={FadeInLeft.delay(400).duration(1000)}
          />
        </View>
        {/* {step == 4 && (
            <Animated.View
              entering={BounceOutDown.delay(5000).duration(1000)}
              className="ml-2"
            >
              <Text>🎉</Text>
            </Animated.View>
          )} */}
      </View>
    </View>
  );
};
export default Header;
