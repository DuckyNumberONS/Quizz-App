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
import {
  getItemQuizzResultByQuizz,
  postQuizzResult,
} from "../../../src/lib/api/quizzResult";
import { QuizzResult } from "../../../src/lib/modal/quizzResult";
interface PropsPrams {
  quizzId?: string;
}

const TopResultsPlayScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dataUser: User = useSelector(user);
  const router = useRoute();
  const { quizzId }: PropsPrams = router.params;
  const [quizzResults, setQuizzResults] = useState<QuizzResult[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await getItemQuizzResultByQuizz(quizzId);
      const sortedResults = res.sort((a, b) => b.totalPoints - a.totalPoints);
      setQuizzResults(sortedResults);
    };
    fetch();
  }, []);

  const onSubmit = async () => {
    try {
    } catch (error) {
      console.error("An unexpected error occurred:", error.message || error);
    }
  };

  return (
    <Layout backgroundColor="#6d5ff6">
      <View className="mx-3">
        <View className="mx-auto mb-20">
          <View className="border-4 border-white rounded-2xl p-4">
            <Text className="text-white text-[35px] font-semibold">
              Top Result
            </Text>
          </View>
        </View>
        <View className="flex-row mt-20 mx-auto h-[300px] relative w-full">
          <View className="w-1/3 h-full">
            <View className="w-full">
              <View className="w-full absolute z-30 top-[-10px]">
                <View className="w-3/6 bg-white rounded-2xl mx-auto">
                  <Text className="text-center text-base font-semibold">
                    {quizzResults.length > 1 ? quizzResults[1]?.totalPoints : 0}
                    P
                  </Text>
                </View>
              </View>
              <Image
                className="bg-cover bg-no-repeat mx-auto rounded-full"
                width={80}
                height={80}
                source={{
                  uri: `${"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}`,
                }}
              />
              <View className="absolute bottom-[-20px]">
                <Text className="text-center text-base font-semibold text-white">
                  {quizzResults.length > 1
                    ? quizzResults[1]?._id.substring(10, 15)
                    : ""}
                </Text>
              </View>
            </View>
            <View className="bg-[#9c9c9c] h-2/3 w-full mt-auto flex-row justify-center items-center">
              <Text className="text-[40px] text-white font-semibold">2</Text>
            </View>
          </View>
          <View className="w-1/3 h-full">
            <View className="w-full mt-[-110px]">
              <View className="w-full absolute z-30 top-[-10px]">
                <View className="w-3/6 bg-white rounded-2xl mx-auto">
                  <Text className="text-center text-base font-semibold">
                    {quizzResults[0]?.totalPoints}P
                  </Text>
                </View>
              </View>
              <Image
                className="bg-cover bg-no-repeat mx-auto rounded-full"
                width={80}
                height={80}
                source={{
                  uri: `${"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}`,
                }}
              />
              <View className="absolute bottom-[-20px]">
                <Text className="text-center text-base font-semibold text-white">
                  {quizzResults[0]?._id.substring(10, 15)}
                </Text>
              </View>
            </View>
            <View className="bg-[#c9ba6e] h-full w-full mt-auto flex-row justify-center items-center">
              <Text className="text-[40px] text-white font-semibold">1</Text>
            </View>
          </View>
          <View className="w-1/3 h-full">
            <View className="w-full mt-[95px]">
              <View className="w-full absolute z-30 top-[-10px]">
                <View className="w-3/6 bg-white rounded-2xl mx-auto">
                  <Text className="text-center text-base font-semibold">
                    {quizzResults.length > 2 ? quizzResults[2]?.totalPoints : 0}
                    P
                  </Text>
                </View>
              </View>
              <Image
                className="bg-cover bg-no-repeat mx-auto rounded-full"
                width={80}
                height={80}
                source={{
                  uri: `${"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}`,
                }}
              />
              <View className="absolute bottom-[-20px]">
                <Text className="text-center text-base font-semibold text-white">
                  {quizzResults.length > 2
                    ? quizzResults[2]?._id.substring(10, 15)
                    : ""}
                </Text>
              </View>
            </View>
            <View className="bg-[#d19048] h-1/3 w-full mt-auto flex-row justify-center items-center">
              <Text className="text-[40px] text-white font-semibold">3</Text>
            </View>
          </View>
        </View>
        <View className="h-[150px] w-full bg-[#8a7ff8] p-4">
          <ScrollView>
            {quizzResults.length > 3 &&
              quizzResults.slice(2).map((item, index) => (
                <View
                  key={item._id}
                  className="flex-row justify-between items-center"
                >
                  <View className="flex-row items-center">
                    <View className="bg-[#4c40bf] rounded-full px-2 py-1 mr-2">
                      <Text className="text-base text-white font-semibold">
                        {index + 4}
                      </Text>
                    </View>
                    <Image
                      className="bg-cover bg-no-repeat my-3 rounded-full"
                      width={50}
                      height={50}
                      source={{
                        uri: `${"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}`,
                      }}
                    />
                    <Text className="ml-2 text-sm font-semibold text-white">
                      {item._id}
                    </Text>
                  </View>
                  <View className="flex-row items-center">
                    <Text className="text-sm font-semibold text-white">
                      {item.totalPoints}P
                    </Text>
                  </View>
                </View>
              ))}
          </ScrollView>
        </View>
      </View>
    </Layout>
  );
};

export default TopResultsPlayScreen;
