import React from "react";
import { View, Text, Image } from "react-native";

const Header = () => {
  return (
    <View className="flex-row items-center justify-between mx-4 pb-3">
      <View className="flex-row items-center">
        <Image
          className="bg-cover bg-no-repeat w-7 h-7 mr-3"
          source={require("../../../public/images/logo.png")}
        />
        <Text className="font-semibold">Duck Quizz</Text>
      </View>
      <View className="flex-row items-center">
        <Image
          className="bg-cover bg-no-repeat w-6 h-6 mr-3"
          source={require("../../../public/images/search.png")}
        />
        <Image
          className="bg-cover bg-no-repeat w-6 h-6"
          source={require("../../../public/images/notification.png")}
        />
      </View>
    </View>
  );
};

export default Header;
