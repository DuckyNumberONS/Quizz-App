import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import NavbarCategory from "../navbar-category";
import { topAutors, topQuiz } from "../../src/config/top";
import { useNavigation } from "@react-navigation/native";
import { Quizz } from "../../src/lib/modal/quizz";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getListQuizz } from "../../src/lib/api/quizz";

const TopQuiz = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [data, setData] = useState<Quizz[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const res = await getListQuizz();
      if (res) {
        setLoading(true);
      }
      setData(res);
    };
    fetch();
  }, []);

  const handleClick = (id: string) => {
    navigation.push(`QuizzDetailS`, { id: id });
  };
  return (
    <View className="mt-6">
      <NavbarCategory title="Top quiz" />
      <View className="flex-row items-center">
        <ScrollView horizontal>
          {data.map((items) => (
            <TouchableOpacity
              key={items._id}
              onPress={() => handleClick(items._id)}
            >
              <View
                className="rounded-[20px] relative mr-2 border-b-[5px] border-r-[3px]"
                style={{ borderColor: "black" }}
              >
                <Image
                  className="w-[170px] h-[120px] rounded-2xl"
                  source={{
                    uri: `${items.urlThumbnail}`,
                  }}
                  resizeMethod="auto"
                />
                <View
                  className="absolute top-0 right-0 rounded-xl "
                  style={{ backgroundColor: "black" }}
                >
                  <Text className="text-white font-medium text-sm mx-1">
                    {items.question.length} questions
                  </Text>
                </View>
              </View>
              <View className="w-full rounded-b-xl">
                <View className="bg-white w-4/7 mx-auto rounded-2xl">
                  <Text className="font-medium text-black text-sm">
                    {items.title}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
export default TopQuiz;
