import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Quizz } from "../../../src/lib/modal/quizz";
import { deleteQuizz, getItemQuizz } from "../../../src/lib/api/quizz";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getUserById } from "../../../src/lib/api/user";
import { User } from "../../../src/lib/modal/user";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  SlideInDown,
  SlideInUp,
  SlideInRight,
  FadeInRight,
  BounceInRight,
} from "react-native-reanimated";
import { useSelector } from "react-redux";
import { user } from "../../../src/lib/redux/selector/selector";

interface PropsPrams {
  id?: string;
}
const QuizzDetailScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [quizz, setQuizz] = useState<Quizz>();
  const [users, setUser] = useState<User>();
  const [popup, setPopup] = useState(false);
  const route = useRoute();
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(false);

  const { id }: PropsPrams = route.params;
  const dataUser: User = useSelector(user);
  const handleBackScreen = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await getItemQuizz(id);
      setQuizz(res);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      if (quizz?.idUser) {
        const res = await getUserById(quizz?.idUser);
        setUser(res);
      }
    };
    fetch();
  }, [quizz]);

  useEffect(() => {
    if (popup) {
      const timer = setTimeout(() => {
        setLoading(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [popup]);

  const handleClick = () => {
    setPopup(!popup);
  };

  const handleStart = () => {
    navigation.push("Play", { quizzId: quizz._id });
  };

  const handleDelete = async (id: string) => {
    const res = await deleteQuizz(id);
    navigation.push("Profile");
  };

  return (
    <>
      <View className="mt-10 h-full mx-3">
        <View className="flex-row justify-between items-center mt-3">
          <TouchableOpacity className="mr-3" onPress={handleBackScreen}>
            <Image
              className="bg-cover bg-no-repeat w-5 h-5"
              source={require("../../../public/images/back.png")}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            className="bg-cover bg-no-repeat mx-auto w-full rounded-xl mt-7"
            height={200}
            source={{
              uri: `${quizz?.urlThumbnail}`,
            }}
          />
          <Text className="text-2xl font-semibold text-start mt-4">
            {quizz?.title}
          </Text>

          <View className="flex-row w-full mt-10 border-2 py-2 rounded-xl border-[#b5b2c1]">
            <View className="w-1/4 px-2 flex-col mx-auto">
              <Text className="text-center text-[#b7b4c3] text-lg font-semibold">
                Played
              </Text>
              <Text className="text-center text-lg font-bold">
                {quizz?.play}
              </Text>
            </View>
            <View className="w-1/4 px-2 flex-col mx-auto">
              <Text className="text-center text-[#b7b4c3] text-lg font-semibold">
                Share
              </Text>
              <Text className="text-center text-lg font-bold">
                {quizz?.share}
              </Text>
            </View>
            <View className="w-1/4 px-2 flex-col mx-auto">
              <Text className="text-center text-[#b7b4c3] text-lg font-semibold">
                Follower
              </Text>
              <Text className="text-center text-lg font-bold">1.999</Text>
            </View>
            <View className="w-1/4 px-2 flex-col mx-auto">
              <Text className="text-center text-[#b7b4c3] text-lg font-semibold">
                Question
              </Text>
              <Text className="text-center text-lg font-bold">
                {quizz?.question.length}
              </Text>
            </View>
          </View>
          <View className="mt-5 flex-row justify-between items-center">
            <View className="flex-row items-center">
              <Image
                className="bg-cover bg-no-repeat mx-auto rounded-full mr-4"
                width={70}
                height={70}
                source={{
                  uri: `${users?.urlAvatar}`,
                }}
              />
              <View>
                <Text className="text-lg font-semibold">{users?.fullName}</Text>
                <Text className="text-start text-[#b7b4c3] mt-1 font-medium">
                  @{users?.username}
                </Text>
              </View>
            </View>
            {dataUser._id === users?._id ? (
              <TouchableOpacity
                className="mr-3 rounded-xl p-3 border-2"
                onPress={() => handleDelete(id)}
              >
                <Image
                  className="bg-cover bg-no-repeat w-5 h-5"
                  source={require("../../../public/images/recycle.png")}
                />
              </TouchableOpacity>
            ) : (
              <View className="bg-black py-3 px-6 rounded-3xl">
                <Text className="text-white text-base text-center font-medium">
                  Follow
                </Text>
              </View>
            )}
          </View>
          <View className="mt-1 h-[200px]">
            <Text className="text-xl font-semibold">Description</Text>
            <ScrollView className="h-[100px]">
              <Text>{quizz?.description}</Text>
            </ScrollView>
          </View>
        </View>
        <View className="flex-row w-full items-center justify-between absolute bottom-12">
          <TouchableOpacity
            className="w-[48%] bg-black border-b-4 border-r-4 border-[#6d5ff6] py-5 rounded-3xl"
            // onPress={() => handleClick("TypeAccount")}
          >
            <Text className="text-center text-white font-medium text-lg">
              Play width friend
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-[48%] bg-[#f6f5fa] border-b-4 border-r-4 border-[#b5b2c1] py-5 rounded-3xl">
            <Text
              className="text-center font-medium text-lg"
              onPress={() => handleClick()}
            >
              Play solo
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {popup && (
        <Animated.View
          className="absolute inset-0 bg-white w-full h-full flex-row items-center justify-center"
          entering={
            popup
              ? SlideInUp.delay(400).duration(500).springify()
              : SlideInDown.delay(300).duration(500).springify()
          }
        >
          <View>
            <View className="flex justify-center items-center">
              <Image
                className="h-[200px] w-[200px]"
                source={require("../../../public/images/logo.png")}
              />
            </View>
            <Text
              className={`text-[40px] mb-3 font-bold text-black text-center`}
            >
              Duck Quizer
            </Text>
            {loading ? (
              <Animated.View
                entering={FadeIn.delay(400).duration(500).springify()}
                className="flex-row items-center justify-center"
              >
                <TouchableOpacity onPress={() => handleStart()}>
                  <Image
                    className="bg-cover bg-no-repeat h-[70px] w-[160px]"
                    source={require("../../../public/images/buttontStart.png")}
                  />
                </TouchableOpacity>
              </Animated.View>
            ) : (
              <ActivityIndicator size="large" color="#ffc700" />
            )}
          </View>
        </Animated.View>
      )}
    </>
  );
};
export default QuizzDetailScreen;
