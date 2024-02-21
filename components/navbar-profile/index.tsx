import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import ListItem from "../list-item";
import { User } from "../../src/lib/modal/user";
import { QuizzResult } from "../../src/lib/modal/quizzResult";

interface Props {
  keySelected: string;
  data: User;
  dataHistory: QuizzResult[];
}

const NavbarProfile: React.FC<Props> = ({ keySelected, data, dataHistory }) => {
  switch (keySelected) {
    case "Quizer":
      const [visibility, setVisibility] = useState("public");
      const handleClick = (keys: string) => {
        setVisibility(keys);
      };

      return (
        <>
          <View className="flex-row justify-between mt-4">
            <TouchableOpacity
              className={`w-5/12 py-1 rounded-3xl border-black border-2`}
              style={visibility === "public" && { backgroundColor: "black" }}
              onPress={() => handleClick("public")}
            >
              <Text
                className="font-semibold text-lg text-center"
                style={
                  visibility === "public"
                    ? { color: "white" }
                    : { color: "black" }
                }
              >
                Public
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`w-5/12 py-1 rounded-3xl border-black border-2`}
              style={visibility === "private" && { backgroundColor: "black" }}
              onPress={() => handleClick("private")}
            >
              <Text
                className="font-semibold text-lg text-center"
                style={
                  visibility === "private"
                    ? { color: "white" }
                    : { color: "black" }
                }
              >
                Private
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <ListItem />
          </View>
        </>
      );
    case "HistoryPlay":
      return (
        <View className="mx-2 mt-4">
          <ScrollView className="h-[250px] bg-[#f6f5fa] rounded-3xl">
            {dataHistory.map((items) => (
              <View
                className="flex-row items-center justify-between my-2"
                key={items._id}
              >
                <View className="mx-auto">
                  <Text>{items.createdAt.substring(0, 10)}</Text>
                </View>
                <View className="mx-auto">
                  <Text>{items.idQuizz.substring(0, 6)}</Text>
                </View>
                <View className="mx-auto">
                  <Text>{items.rightAnswer} answers</Text>
                </View>
                <View className="mx-auto">
                  <Text>{items.completionTime}s</Text>
                </View>
                <View className="mx-auto">
                  <Text>{items.totalPoints}P</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      );
    case "About":
      return (
        <View className="my-4 mx-3">
          <Text className="text-2xl font-bold">Abount {data.fullName}</Text>
          <View className="bg-white">
            <Text className="my-2 text-base text-black font-medium">
              Country: {data.country}
            </Text>
            <Text className="my-2 text-base text-black font-medium">
              Birday: {data.dateBirday}
            </Text>
            <Text className="my-2 text-base text-black font-medium">
              Email: {data.email}
            </Text>
            <Text className="my-2 text-base text-black font-medium">
              PhoneNumber: {data.phoneNumber}
            </Text>
            <Text className="my-2 text-base text-black font-medium">
              Created account at: {data.createdAt.substring(0, 10)}
            </Text>
          </View>
        </View>
      );
    default:
      break;
  }
};
export default NavbarProfile;
