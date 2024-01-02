import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useForm } from "react-hook-form";
import Input from "../../../../components/input";
import Select from "../../../../components/select";
import countries from "../../../../src/config/countries";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../src/lib/redux/action/user";
import LayoutReg from "../../../../components/layout/authenticator";

const CreateStepOne = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispath = useDispatch();
  const arr = countries.map((items) => ({ ...items, value: items.name }));

  const onSubmit = (data: any) => {
    dispath(setUser(data));
    navigation.push("CreateLastStep");
  };
  return (
    <LayoutReg
      title="Create an account"
      description="Please complere your profile."
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      titleButton="Continue"
      step={2}
    >
      <View className="mt-5">
        <Input
          label="Full name"
          name="fullName"
          type="text"
          errors={errors}
          placeholder="Enter your name here"
          errorsOption={{
            required: { value: true, message: "Full name is empty" },
            maxLength: {
              value: 50,
              message: "Full name cannot exceed 50 characters",
            },
            minLength: {
              value: 5,
              message: "Full name must not be less than 5 characters",
            },
          }}
          classLabel="block text-[13px] font-medium text-gray-900 text-[#B5B2C1]"
          classInput="text-black bg-gray-50rounded-lg block w-full text-sm"
          control={control}
        />
      </View>
      <View className="mt-4">
        <Input
          label="Date of birth"
          name="dateBirday"
          type="text"
          errors={errors}
          placeholder="MM/DD/YYYY"
          errorsOption={{
            required: { value: true, message: "Date of birth is empty" },
            maxLength: {
              value: 50,
              message: "Date of birth cannot exceed 50 characters",
            },
            minLength: {
              value: 5,
              message: "Date of birth must not be less than 5 characters",
            },
          }}
          classLabel="block text-[13px] font-medium text-gray-900 text-[#B5B2C1]"
          classInput="text-black bg-gray-50rounded-lg block w-full text-sm"
          control={control}
        />
      </View>
      <View className="mt-4">
        <Input
          label="Phone number"
          name="phoneNumber"
          type="number"
          errors={errors}
          placeholder="+(84) XXX - XXXXX"
          errorsOption={{
            required: { value: true, message: "Phone number is empty" },
            maxLength: {
              value: 13,
              message: "Phone number cannot exceed 13 number",
            },
            minLength: {
              value: 5,
              message: "Phone number must not be less than 5 number",
            },
          }}
          classLabel="block text-[13px] font-medium text-gray-900 text-[#B5B2C1]"
          classInput="text-black bg-gray-50rounded-lg block w-full text-sm"
          control={control}
        />
      </View>
      <View className="mt-4">
        <Select
          options={arr}
          placeholder="Choose country"
          name="country"
          errors={errors}
          errorsOption={{
            required: { value: true, message: "Country is empty" },
          }}
          classSelect="text-black bg-gray-50rounded-lg block w-full text-sm"
          control={control}
        />
      </View>
    </LayoutReg>
  );
};

export default CreateStepOne;
