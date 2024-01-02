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
  BounceIn,
  FadeIn,
  FadeInDown,
  FadeInUp,
  ZoomIn,
} from "react-native-reanimated";

interface InputCheckBoxProps {
  name: string;
  errors: any;
  placeholder?: string;
  errorsOption?: any;
  classInput: string;
  backgroundColor: string;
  borderShadowColor: string;
  defaultValue?: string | number;
  control: any;
}
const InputCheckBoxAnswer: React.FC<InputCheckBoxProps> = ({
  name,
  errors,
  placeholder = "Loading ...",
  errorsOption,
  classInput,
  defaultValue,
  control,
  backgroundColor = "#f6f5fa",
  borderShadowColor = "#f6f5fa",
}) => {
  const keys = errorsOption ? Object.keys(errorsOption) : [];
  const [checkbox, setCheckbox] = useState(false);

  const onSubmit = async (data: any) => {
    if (data) {
      // setPopup(true);
    }
  };

  //   const [value, setValue] = useState("");
  //   const handleChangeText = (
  //     text: NativeSyntheticEvent<TextInputChangeEventData>
  //   ) => {
  //     setValue(text.nativeEvent.text);
  //   };
  return (
    <>
      {checkbox ? (
        <Animated.View className="absolute z-10 bg-green-400 border-[3px] border-white right-3 top-3 p-2 rounded-full">
          <TouchableOpacity onPress={() => setCheckbox(false)}>
            <Image
              className="bg-cover bg-no-repeat w-[17px] h-[17px]"
              source={require("../../../public/images/done.png")}
            />
          </TouchableOpacity>
        </Animated.View>
      ) : (
        <Animated.View
          entering={FadeInDown.delay(200).duration(1000).springify()}
          className="absolute z-10 border-[3px] border-white right-3 top-3 p-2 rounded-full"
          style={{ backgroundColor: `${backgroundColor}` }}
        >
          <TouchableOpacity onPress={() => setCheckbox(true)}>
            <View className="w-[17px] h-[17px]" />
          </TouchableOpacity>
        </Animated.View>
      )}

      <Animated.View
        entering={FadeInDown.delay(200).duration(1000).springify()}
        className={`${
          errors?.[name] ? "border-4 border-red-600" : "border-r-4 border-b-4"
        } py-3 px-6 rounded-2xl w-full h-[150px]`}
        style={{
          backgroundColor: `${backgroundColor}`,
          borderColor: borderShadowColor,
        }}
      >
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              className={classInput}
              placeholder={placeholder}
              placeholderTextColor="white"
              value={field.value}
              onChangeText={field.onChange}
              //   onChange={(text) => {
              //     handleChangeText(text);
              //   }}
            />
          )}
          name={name}
          rules={errorsOption}
          defaultValue={defaultValue}
        />
        {keys.map((items) => (
          <View key={items}>
            {errors?.[name]?.type === items && (
              <Text className="text-red-600 mt-1 text-sm">
                {errors?.[name]?.message}
              </Text>
            )}
          </View>
        ))}
      </Animated.View>
    </>
  );
};
export default InputCheckBoxAnswer;
