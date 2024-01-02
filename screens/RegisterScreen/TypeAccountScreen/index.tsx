import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { typeAccount } from "../../../src/config/typeAccount";
import LayoutReg from "../../../components/layout/authenticator";
import { useDispatch } from "react-redux";
import { setUser } from "../../../src/lib/redux/action/user";

const TypeAccount = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useDispatch();
  const handleSubmit = (id: string) => {
    dispatch(setUser({ typeAccount: id }));
    navigation.push("CreateStepOne");
  };
  return (
    <LayoutReg
      title="What type of account will you open?"
      description="What type of account will you open?"
      titleButton="Continue"
      step={1}
    >
      <View className="mt-5">
        {typeAccount.map((items) => (
          <TouchableOpacity
            key={items.id}
            className="flex-row  w-full mb-3 bg-[#f6f5fa] py-5 rounded-3xl shadow-md items-center"
            onPress={() => handleSubmit(items.id)}
          >
            <View
              className={`w-[50px] h-[50px] rounded-full items-center flex justify-center ml-3 mr-5`}
              style={{ backgroundColor: items.color }}
            >
              <Image
                className="bg-cover bg-no-repeat w-7 h-7"
                source={items.icon}
              />
            </View>
            <Text className="text-center bg-gre font-medium text-lg">
              {items.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </LayoutReg>
  );
};

export default TypeAccount;
