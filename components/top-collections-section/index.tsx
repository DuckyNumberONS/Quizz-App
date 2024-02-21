import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import NavbarCategory from "../navbar-category";
import { topCollections } from "../../src/config/top";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Quizz } from "../../src/lib/modal/quizz";
import { Collection } from "../../src/lib/modal/collection";
import { getListCollection } from "../../src/lib/api/collection";

const TopCollections = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [data, setData] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const res = await getListCollection();
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
      <NavbarCategory title="Top collections" />
      <View className="flex-row items-center relative">
        <ScrollView horizontal>
          {data &&
            data.map((items) => (
              <TouchableOpacity
                className="rounded-[20px] relative mr-2 border-[3px]"
                style={{ borderColor: "black" }}
                key={items._id}
                onPress={() => handleClick(items._id)}
              >
                <Image
                  className="w-[170px] h-[120px] rounded-2xl"
                  source={{
                    uri: `${items.imgThumbnail}`,
                  }}
                  resizeMethod="auto"
                />
                <View className="absolute bottom-3 left-3 bg-[#ffffff] rounded-xl py-1 px-4">
                  <Text className="font-bold text-black text-xs">
                    {items.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};
export default TopCollections;
