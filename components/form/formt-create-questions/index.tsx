import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { ReactNode } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { clearAnwsers } from "../../../src/lib/redux/user/anwsersReducer";
import { question } from "../../../src/lib/redux/selector/selector";
interface Props {
  children: ReactNode;
  handleSubmit?: any;
  onSubmit?: any;
  title: string;
  titleButton: string;
  theme?: string;
}

const FormCreateQuesion: React.FC<Props> = ({
  children,
  handleSubmit,
  onSubmit,
  title,
  titleButton,
  theme = "white",
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute();
  const currentScreen = route.name;
  const dispatch = useDispatch();
  const handleBackScreen = () => {
    switch (currentScreen) {
      case "CreateQuestion":
        dispatch(clearAnwsers());
        navigation.goBack();
        break;
      default:
        navigation.goBack();
    }
  };

  const dataArrQuestion = useSelector(question);
  const handleReomoveQuestion = (id: any) => {};
  return (
    <View className="mt-3 h-full mx-3" style={{ backgroundColor: `${theme}` }}>
      <View className="flex-row items-center">
        <TouchableOpacity className="mr-3" onPress={handleBackScreen}>
          <Image
            className="bg-cover bg-no-repeat w-5 h-5 "
            source={require("../../../public/images/back.png")}
          />
        </TouchableOpacity>
        <Text className="text-[20px] font-bold">{title}</Text>
      </View>
      <View className="mt-4 mb-9">{children}</View>
      <View className="border-t border-[#bebcc9]">
        <View className="flex-row items-center relative mt-4">
          <ScrollView horizontal>
            {dataArrQuestion.map((items, index) => (
              <View key={index} className="relative mr-2">
                <View className="absolute z-100 w-full h-full bottom-0 rounded-2xl" />
                <Image
                  style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                  className="bg-cover w-[150px] h-[90px] rounded-2xl"
                  source={items.backgroundQuestion}
                  resizeMethod="auto"
                />
                <View className="absolute bottom-6 flex-row items-center justify-between w-full px-2">
                  <View className="bg-blue-600 px-3 py-1 rounded-full">
                    <Text className="font-medium text-white text-lg">
                      {index + 1}
                    </Text>
                  </View>
                  <TouchableOpacity
                    className="bg-[#e35454] px-1 py-1 rounded-xl"
                    onPress={() => handleReomoveQuestion(items)}
                  >
                    <Image
                      className="w-[26px] h-[26px] rounded-2xl"
                      source={require("../../../public/images/trash-can.png")}
                      resizeMethod="auto"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            <Animated.View
              className="h-full flex-row items-center ml-5"
              entering={FadeIn.delay(400).duration(2000).springify()}
            >
              <TouchableOpacity
                className="bg-blue-600 border-2 border-white h-[45px] rounded-full"
                onPress={handleSubmit(onSubmit)}
              >
                <Image
                  className="w-5 h-5 p-5 rounded-2xl"
                  source={require("../../../public/images/plusNew.png")}
                  resizeMethod="auto"
                />
              </TouchableOpacity>
            </Animated.View>
          </ScrollView>
        </View>
      </View>
      {/* <Animated.View
        className="w-full relative mt-4"
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
      </Animated.View> */}
    </View>
  );
};
export default FormCreateQuesion;
