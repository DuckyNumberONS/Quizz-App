import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Layout from "../../components/layout";
import { useSelector } from "react-redux";
import { user } from "../../src/lib/redux/selector/selector";
import { User } from "../../src/lib/modal/user";
import NavbarProfile from "../../components/navbar-profile";

const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const data: User = useSelector(user);
  const [keys, setKeys] = useState("Quizer");
  const handleClick = (key: string) => {
    setKeys(key);
  };

  return (
    <Layout>
      <View className="relative">
        <View
          className="rounded-b-lg"
          style={{
            overflow: "hidden",
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        >
          <Image
            className="bg-cover bg-no-repeat mx-auto"
            width={500}
            height={130}
            source={{
              uri: "https://static.vinwonders.com/production/optimize_san-may-da-lat-01.jpeg.jpg",
            }}
          />
        </View>
        <View className="absolute bottom-[-40px] w-full flex-row items-center justify-center">
          <View className="border-4 border-white rounded-full">
            <Image
              className="bg-cover bg-no-repeat mx-auto rounded-full"
              width={80}
              height={80}
              source={{
                uri: `${data.urlAvatar}`,
              }}
            />
          </View>
        </View>
      </View>
      <View className="mt-14 mx-2">
        <View className="w-full">
          <Text className="text-center text-[18px] font-bold">
            {data.fullName}
          </Text>
          <Text className="text-center text-[#b7b4c3] mt-1 font-medium">
            @{data.username}
          </Text>
        </View>
        <View className="flex-row w-full mt-10">
          <View className="w-1/4 px-2 flex-col mx-auto">
            <Text className="text-center text-[#b7b4c3] text-[20px] font-semibold">
              Quizer
            </Text>
            <Text className="text-center text-[20px] font-bold">34</Text>
          </View>
          <View className="w-1/4 px-2 flex-col mx-auto">
            <Text className="text-center text-[#b7b4c3] text-[20px] font-semibold">
              Follower
            </Text>
            <Text className="text-center text-[20px] font-bold">1.999</Text>
          </View>
          <View className="w-1/4 px-2 flex-col mx-auto">
            <Text className="text-center text-[#b7b4c3] text-[20px] font-semibold">
              Plays
            </Text>
            <Text className="text-center text-[20px] font-bold">300</Text>
          </View>
          <View className="w-1/4 px-2 flex-col mx-auto">
            <Text className="text-center text-[#b7b4c3] text-[20px] font-semibold">
              Players
            </Text>
            <Text className="text-center text-[20px] font-bold">40</Text>
          </View>
        </View>
        {/* <View className="mt-8">
          <TouchableOpacity className="bg-black py-3 rounded-3xl">
            <Text className="text-[18px] text-center font-medium text-[#fbfbfb]">
              Edit profile
            </Text>
          </TouchableOpacity>
        </View> */}
        <View className="bg-[#edf0da] flex-row items-center w-full mt-6 rounded-3xl">
          <TouchableOpacity
            onPress={() => handleClick("Quizer")}
            className="w-1/3 py-2 rounded-3xl border-[4px] border-[#edf0da]"
            style={keys === "Quizer" && { backgroundColor: "white" }}
          >
            <Text className="text-center text-[19px] font-medium">Quizer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleClick("Collections")}
            className="w-1/3 py-2 rounded-3xl border-[4px] border-[#edf0da]"
            style={keys === "Collections" && { backgroundColor: "white" }}
          >
            <Text className="text-center text-[19px] font-medium">
              Collections
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleClick("About")}
            className="w-1/3 py-2 rounded-3xl border-[4px] border-[#edf0da]"
            style={
              keys === "About" && {
                backgroundColor: "white",
              }
            }
          >
            <Text className="text-center text-[19px] font-medium">About</Text>
          </TouchableOpacity>
        </View>
        <NavbarProfile keySelected={keys} />
      </View>
    </Layout>
  );
};

export default ProfileScreen;
