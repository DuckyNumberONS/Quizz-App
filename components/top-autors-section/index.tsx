import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import NavbarCategory from "../navbar-category";
import { topAutors } from "../../src/config/top";
import { Quizz } from "../../src/lib/modal/quizz";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { getListUser } from "../../src/lib/api/user";
import { User } from "../../src/lib/modal/user";

const TopAutors = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const res = await getListUser();
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
      <NavbarCategory title="Top autors" />
      <View className="flex-row items-center">
        <ScrollView horizontal>
          {data &&
            data.map((items) => (
              <TouchableOpacity
                key={items._id}
                onPress={() => handleClick(items._id)}
              >
                <View
                  className="rounded-full relative mr-3"
                  // style={{ backgroundColor: ""}}
                >
                  <Image
                    className="w-[80px] h-[80px] rounded-full"
                    source={{
                      uri: `${items.urlAvatar}`,
                    }}
                    resizeMethod="auto"
                  />
                </View>
                <Text className="font-bold text-black text-[10px] text-center mt-2">
                  {items.username.length > 15
                    ? items.username.substring(0, 15) + "..."
                    : items.username}
                </Text>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};
export default TopAutors;
