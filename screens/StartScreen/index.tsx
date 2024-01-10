import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
  ActivityIndicator,
} from "react-native";
const StartScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.push("CheckingAccount");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <View className="bg-white h-screen py-[300px]">
        <View className="flex justify-center items-center">
          <Image
            className="h-[200px] w-[200px]"
            source={require("../../public/images/logo.png")}
          />
        </View>
        <Text className={`text-[40px] font-bold text-black text-center`}>
          Duck Quizer
        </Text>
        {/* <View className="flex justify-center items-center">
          <View className="py-2 w-[200px] border-2 border-black rounded-xl mt-4" />
        </View> */}
        <ActivityIndicator size="large" color="#ffc700" />
      </View>
    </>
  );
};
export default StartScreen;
