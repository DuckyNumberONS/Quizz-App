import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import menu from "../../../src/config/menu";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, useRoute } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute();
  const currentScreen = route.name;

  const handerPushRouter = (link: string) => {
    navigation.push(link);
  };

  return (
    <View className="absolute bg-white bottom-0 w-full border-t-[0.5px] z-30">
      <View className="items-center flex-row justify-between py-1">
        {menu.map((items) => (
          <TouchableOpacity
            className={`py-2 px-4`}
            key={items.id}
            onPress={() => handerPushRouter(items.link)}
          >
            <Image
              className="bg-cover bg-no-repeat w-6 h-6 mx-auto"
              source={items.url}
            />
            <Text
              className={
                currentScreen == items.link
                  ? "text-blue-500 font-bold"
                  : "text-black"
              }
            >
              {items.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Footer;
