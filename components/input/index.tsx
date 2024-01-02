import React, { useRef, useState } from "react";
import { Controller, useController } from "react-hook-form";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
interface InputProps {
  label: string;
  name: string;
  errors: any;
  placeholder?: string;
  errorsOption?: any;
  classLabel: string;
  classInput: string;
  type: string;
  defaultValue?: string | number;
  control: any;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  errors,
  placeholder = "Loading ...",
  errorsOption,
  classLabel,
  classInput,
  defaultValue,
  type,
  control,
}) => {
  const keys = errorsOption ? Object.keys(errorsOption) : [];
  const textInputRef = useRef(null);
  const url = label.toLowerCase().indexOf("url") === 0;
  const [value, setValue] = useState("");
  const handleTextPress = () => {
    textInputRef.current.focus();
  };
  const handleChangeText = (
    text: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setValue(text.nativeEvent.text);
  };
  switch (type) {
    case "text":
      return (
        <>
          {url &&
            (value == "" ? (
              <Animated.View
                entering={FadeInDown.delay(200).duration(1000).springify()}
                className={`${
                  errors?.[name] ? "border border-red-600" : ""
                } bg-[#f7fbf4] border-4 border-[#e4cc74] rounded-2xl h-[200px] w-full mb-3`}
              >
                <View className="w-full h-full my-11">
                  <Image
                    className="bg-cover bg-no-repeat w-16 h-16 mx-auto"
                    source={require("../../public/images/add-images.png")}
                  />
                  <Text className="text-center text-lg font-semibold">
                    Add cover images
                  </Text>
                </View>
              </Animated.View>
            ) : (
              <Animated.View
                entering={FadeInDown.delay(200).duration(1000).springify()}
                className={`${
                  errors?.[name] ? "border border-red-600" : ""
                } bg-[#f7fbf4] border-4 border-[#e4cc74] rounded-2xl h-[200px] w-full mb-3`}
              >
                <View className="w-full h-full rounded-2xl">
                  <Image
                    className="bg-cover bg-no-repeat w-full h-full mx-auto rounded-2xl"
                    source={{
                      uri: `${value}`,
                    }}
                  />
                </View>
              </Animated.View>
            ))}
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className={`${
              errors?.[name] ? "border border-red-600" : ""
            } bg-[#f6f5fa] py-3 px-6 rounded-2xl w-full`}
          >
            <TouchableOpacity onPress={handleTextPress}>
              <Text className={classLabel}>{label}</Text>
            </TouchableOpacity>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  ref={textInputRef}
                  className={classInput}
                  placeholder={placeholder}
                  value={field.value}
                  onChangeText={field.onChange}
                  onChange={(text) => {
                    handleChangeText(text);
                  }}
                />
              )}
              name={name}
              rules={errorsOption}
              defaultValue={defaultValue}
            />
          </Animated.View>
          {keys.map((items) => (
            <View key={items}>
              {errors?.[name]?.type === items && (
                <Text className="text-red-600 mt-1 text-sm">
                  {errors?.[name]?.message}
                </Text>
              )}
            </View>
          ))}
        </>
      );
    case "number":
      return (
        <>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className={`${
              errors?.[name] ? "border border-red-600" : ""
            } bg-[#f6f5fa] py-3 px-6 rounded-2xl w-full`}
          >
            <TouchableOpacity onPress={handleTextPress}>
              <Text className={classLabel}>{label}</Text>
            </TouchableOpacity>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  keyboardType="numeric"
                  className={classInput}
                  placeholder={placeholder}
                  value={field.value}
                  onChangeText={field.onChange}
                />
              )}
              name={name}
              rules={errorsOption}
              defaultValue={defaultValue}
            />
          </Animated.View>
          {keys.map((items) => (
            <View key={items}>
              {errors?.[name]?.type === items && (
                <Text className="text-red-600 mt-1 text-sm">
                  {errors?.[name]?.message}
                </Text>
              )}
            </View>
          ))}
        </>
      );
  }
};

export default Input;
