import React, { ReactNode } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
  titleButton: string;
  theme?: string;
}

const FormCreateQuizz: React.FC<Props> = ({
  children,
  handleSubmit,
  onSubmit,
  title,
  titleButton,
  theme = "white",
}) => {
  return (
    <View className="mt-3 h-full mx-3" style={{ backgroundColor: `${theme}` }}>
      <Text className="text-[20px] font-bold">{title}</Text>
      <View className="mt-4 mb-9">{children}</View>
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
    </View>
  );
};
export default FormCreateQuizz;
