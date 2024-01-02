import React from "react";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { user } from "../../../src/lib/redux/selector/selector";
import LayoutReg from "../../../components/layout/authenticator";
import { postUser } from "../../../src/lib/api/user";

const Welcome = () => {
  const data = useSelector(user);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    try {
      await postUser(data);
      navigation.push("Login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutReg
      title="Welcome to Quizer 😎"
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      description="You choose Personal plan."
      titleButton="Let's go"
      step={4}
    >
      <View className="my-16">
        <Image
          className="bg-cover bg-no-repeat w-[350px] h-[350px] "
          source={require("../../../public/images/welcome.png")}
        />
      </View>
    </LayoutReg>
  );
};
export default Welcome;
