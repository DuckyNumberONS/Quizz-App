import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { getListQuizz } from "../../src/lib/api/quizz";
import { Quizz } from "../../src/lib/modal/quizz";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const ListItem = () => {
  const [data, setData] = useState<Quizz[]>([]);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useEffect(() => {
    const fetch = async () => {
      const res = await getListQuizz();
      setData(res);
    };
    fetch();
  }, []);

  const handleClick = (id: string) => {
    navigation.push(`QuizzDetailS`, { id: id });
  };
  return (
    <>
      <View className="mt-6">
        <Text className="text-2xl font-bold mb-3">{data.length} Quizer</Text>
        <View className="flex-row items-center relative">
          <View className="h-[300px] w-full">
            {data.map((items) => (
              <TouchableOpacity
                key={items._id}
                className="flex-row mr-2 rounded-r-[20px] rounded-b-[21px] relative border-b-[5px] border-r-[3px] my-2"
                onPress={() => handleClick(items._id)}
              >
                <View className="mr-3" style={{ borderColor: "black" }}>
                  <Image
                    className="w-[140px] h-[90px] rounded-2xl"
                    source={{
                      uri: `${items.urlThumbnail}`,
                    }}
                    resizeMethod="auto"
                  />
                </View>
                <View className="">
                  <Text className="text-black font-medium text-lg">
                    {items.title.length > 20
                      ? items.title.substring(0, 20) + "..."
                      : items.title}
                  </Text>
                  <View className="mt-5 flex-row items-center">
                    <Text className="text-[#b5b2c1] font-medium text-sm">
                      {items.createdAt.substring(0, 10)}
                    </Text>
                    <View className="bg-violet-500 px-6 py-1 rounded-lg ml-8">
                      <Text className="text-white font-medium text-sm">
                        {items.play} plays
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </>
  );
};
export default ListItem;
