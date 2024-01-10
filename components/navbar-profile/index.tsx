import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { getListQuizz } from "../../src/lib/api/quizz";
import { Quizz } from "../../src/lib/modal/quizz";
import ListItem from "../list-item";

interface Props {
  keySelected: string;
}

const NavbarProfile: React.FC<Props> = ({ keySelected }) => {
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
    case "Collections":
      return (
        <View>
          <View></View>
        </View>
      );
    case "About":
      return (
        <View>
          <View></View>
        </View>
      );
    default:
      break;
  }
};
export default NavbarProfile;
