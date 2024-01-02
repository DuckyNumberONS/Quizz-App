import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../src/lib/redux/action/user";
import Input from "../../../components/input";
import LayoutReg from "../../../components/layout/authenticator";
import { checkEmail } from "../../../src/lib/api/user";

const CreateLastStep = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispath = useDispatch();

  const onSubmit = async (data: any) => {
    const checkExisEmail = await checkEmail(data);
    if (checkExisEmail === true) {
      setError("email", {
        type: "manual",
        message: "This email is already registered",
      });
    } else {
      dispath(setUser(data));
      navigation.push("Welcome");
    }
  };

  return (
    <LayoutReg
      title="Is's almost done"
      description="Please complere your profile."
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      titleButton="Sign up"
      step={3}
    >
      <View className="mt-4">
        <Input
          label="Username"
          name="username"
          type="text"
          errors={errors}
          placeholder="example user"
          errorsOption={{
            required: { value: true, message: "Username is empty" },
            maxLength: {
              value: 20,
              message: "Username cannot exceed 20 number",
            },
            minLength: {
              value: 5,
              message: "Username must not be less than 5 char",
            },
          }}
          classLabel="block text-[13px] font-medium text-gray-900 text-[#B5B2C1]"
          classInput="text-black bg-gray-50rounded-lg block w-full text-sm"
          control={control}
        />
      </View>
      <View className="mt-4">
        <Input
          label="Email"
          name="email"
          type="text"
          errors={errors}
          placeholder="someone@example.com"
          errorsOption={{
            required: { value: true, message: "Email is empty" },
            maxLength: {
              value: 256,
              message: "Email cannot exceed 256 char",
            },
            minLength: {
              value: 8,
              message: "Email must not be less than 8 char",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          classLabel="block text-[13px] font-medium text-gray-900 text-[#B5B2C1]"
          classInput="text-black bg-gray-50rounded-lg block w-full text-sm"
          control={control}
        />
      </View>
      <View className="mt-4">
        <Input
          label="Password"
          name="password"
          type="text"
          errors={errors}
          placeholder="••••••••"
          errorsOption={{
            required: { value: true, message: "Password is empty" },
            maxLength: {
              value: 128,
              message: "Password cannot exceed 128 char",
            },
            minLength: {
              value: 8,
              message: "Password must not be less than 8 char",
            },
          }}
          classLabel="block text-[13px] font-medium text-gray-900 text-[#B5B2C1]"
          classInput="text-black bg-gray-50rounded-lg block w-full text-sm"
          control={control}
        />
      </View>
    </LayoutReg>
  );
};

export default CreateLastStep;
