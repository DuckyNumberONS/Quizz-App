import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const CheckAccount = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const texts = [
    {
      title: "Everythink is here to enjoy quiz !",
      description: "Quiz as a group or individually! Expand your circle!",
      image: require("../../../public/images/thumbnail.png"),
    },
    // {
    //   title: "Test your knowledge, Quiz Master",
    //   description: "Challenge yourself with a variety of quizzes!",
    //   image: require("../public/images/thumbnail3.png"),
    // },
    {
      title: "Elevate your quiz experience!",
      description: "Unleash your trivia prowess with Quizer Pro",
      image: require("../../../public/images/thumbnail2.png"),
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClick = (link: string) => {
    navigation.push(link);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View className="mt-10 mx-4 h-full bg-white">
        <Text className="text-[40px] font-bold">{texts[index].title}</Text>
        <Text className="text-[20px] mt-2 font-bold">
          {texts[index].description}
        </Text>
        <View className="flex justify-center items-center max-h-[450px] max-w-[400px]">
          <Image
            className="bg-cover bg-no-repeat"
            width={400}
            height={400}
            source={texts[index].image}
          />
        </View>
        <View>
          <TouchableOpacity className="w-full mb-3 bg-[#f6f5fa] border-b-4 border-r-4 border-[#b5b2c1] py-5 rounded-3xl shadow-md">
            <Text
              className="text-center font-medium text-lg"
              onPress={() => handleClick("Login")}
            >
              I have an account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-full bg-black border-b-4 border-r-4 border-[#6d5ff6] py-5 rounded-3xl"
            onPress={() => handleClick("TypeAccount")}
          >
            <Text className="text-center text-white font-medium text-lg">
              Get started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CheckAccount;
