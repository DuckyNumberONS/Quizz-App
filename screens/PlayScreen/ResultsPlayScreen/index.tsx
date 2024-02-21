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
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Layout from "../../../components/layout";
import {
  questionsResults,
  user,
} from "../../../src/lib/redux/selector/selector";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../../src/lib/modal/user";
import { getItemQuizz } from "../../../src/lib/api/quizz";
import { Quizz } from "../../../src/lib/modal/quizz";
import { clearquestionsResults } from "../../../src/lib/redux/user/questionResultsReducer";
import { postQuizzResult } from "../../../src/lib/api/quizzResult";
interface PropsPrams {
  quizzId?: string;
}

const ResultsPlayScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const resultsData = useSelector(questionsResults);
  const totalPointsUser = resultsData.reduce(
    (sum, result) => sum + result.point,
    0
  );

  const totalTimeUser = resultsData.reduce(
    (sum, result) => sum + result.time,
    0
  );
  const countTrueAnswersUser = resultsData.filter(
    (item) => item.rightAnswer === true
  ).length;
  const [quizz, setQuizz] = useState<Quizz>();
  const totalPointsQuizz = quizz?.question.reduce(
    (sum, question) => sum + question.point,
    0
  );
  const totalTimeQuizz = quizz?.question.reduce(
    (sum, question) => sum + question.time,
    0
  );
  const dataUser: User = useSelector(user);
  const router = useRoute();
  const { quizzId }: PropsPrams = router.params;

  useEffect(() => {
    const fetch = async () => {
      const res = await getItemQuizz(quizzId);
      setQuizz(res);
    };
    fetch();
  }, []);
  const onSubmit = async () => {
    try {
      const data = {
        idUser: dataUser._id,
        idQuizz: quizzId,
        rightAnswer: countTrueAnswersUser,
        completionTime: totalTimeUser,
        totalPoints: totalPointsUser,
      };
      const res = await postQuizzResult(data);
      if (res) {
        dispatch(clearquestionsResults());
        navigation.push("TopResultsPlay", { quizzId: quizz._id });
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error.message || error);
    }
  };

  return (
    <Layout backgroundColor="#6d5ff6">
      <View>
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
              height={140}
              source={{
                uri: "https://static.vinwonders.com/production/optimize_san-may-da-lat-01.jpeg.jpg",
              }}
            />
          </View>
          <View className="absolute bottom-[-40px] w-full flex-row items-center justify-center z-20">
            <View className="border-4 border-white rounded-full">
              <Image
                className="bg-cover bg-no-repeat mx-auto rounded-full"
                width={80}
                height={80}
                source={{
                  uri: `${dataUser.urlAvatar}`,
                }}
              />
            </View>
          </View>
        </View>
        <View className="bg-white rounded-lg mt-4 p-3 mx-3 border-b-4  border-[#b5b2c1]">
          <View className="w-full mt-5">
            <Text className="text-center text-[18px] font-bold">
              {dataUser.fullName}
            </Text>
            <Text className="text-center text-[#b7b4c3] mt-1 font-medium">
              @{dataUser.username}
            </Text>
          </View>
          <Text className="text-center mt-5 text-2xl font-semibold">
            Your Results
          </Text>
          <View className="w-full flex-row justify-around items-center mt-4">
            <View className="w-2/5 p-4 border bg-[#f6f5fa] border-b-4  border-[#b5b2c1] rounded-xl">
              <Text className="text-center text-base font-semibold">Point</Text>
              <Text className="text-base text-center">
                {totalPointsUser}/{totalPointsQuizz}
              </Text>
            </View>
            <View className="w-2/5 p-4 border bg-[#f6f5fa] border-b-4  border-[#b5b2c1] rounded-lg">
              <Text className="text-center text-base font-semibold">Time</Text>
              <Text className="text-base text-center">
                {totalTimeUser}s/{totalTimeQuizz}s
              </Text>
            </View>
          </View>
          <View className="w-full flex-row justify-around items-center mt-4">
            <View className="w-2/5 p-4 border bg-[#f6f5fa] border-b-4  border-[#b5b2c1] rounded-xl">
              <Text className="text-center text-base font-semibold">
                Answer
              </Text>
              <Text className="text-base text-center">
                {countTrueAnswersUser}/{quizz?.question.length}
              </Text>
            </View>
          </View>
        </View>
        <View className="mx-3">
          <TouchableOpacity className="w-full  bg-[#f6f5fa] border-b-4 border-r-4 border-[#b5b2c1] py-4 rounded-[40px] mt-10">
            <Text
              className="text-center font-medium text-base text-black"
              onPress={() => onSubmit()}
            >
              Check Top Results
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default ResultsPlayScreen;
