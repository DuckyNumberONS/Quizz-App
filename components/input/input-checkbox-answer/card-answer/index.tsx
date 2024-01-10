import React, { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import CheckBox from "../../input-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { setAnwser } from "../../../../src/lib/redux/user/anwsersReducer";
import { anwsers } from "../../../../src/lib/redux/selector/selector";

interface InputCheckBoxProps {
  placeholder?: string;
  errorsOptionCheckBox?: any;
  errorsOptionInput?: any;
  classInput: string;
  backgroundColor: string;
  borderShadowColor: string;
  defaultValue?: string | number;
  number: number;
}

interface PropsData {
  isCorrect: boolean;
  text: string;
  number: number;
}

const CardAnswer: React.FC<InputCheckBoxProps> = ({
  placeholder = "Loading ...",
  errorsOptionCheckBox,
  errorsOptionInput,
  classInput,
  defaultValue,
  backgroundColor = "#f6f5fa",
  borderShadowColor = "#f6f5fa",
  number = 0,
}) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const dispatch = useDispatch();
  const [data, setData] = useState<PropsData>();
  const [count, setCount] = useState(0);
  const check = Object.keys(errors).length == 0 ? true : false;
  const dataAnwers: Array<PropsData> = useSelector(anwsers);
  const countTrueDataAnwers = dataAnwers.filter(
    (items) => items.isCorrect
  ).length;

  useEffect(() => {
    if (check) {
      setCount((items) => items + 1);
    }
  }, [errors]);

  const onSubmit = async (data: PropsData) => {
    if (data) {
      const successData = { ...data, number: number };
      setData(successData);
      dispatch(setAnwser(successData));
    }
  };

  return (
    <>
      <Animated.View
        entering={FadeInDown.delay(200).duration(1000).springify()}
        className={`    
         border-r-4 border-b-4 py-3 px-6 rounded-2xl w-full h-[150px]`}
        style={{
          backgroundColor: `${backgroundColor}`,
          borderColor: borderShadowColor,
        }}
      >
        <CheckBox
          lengthTrueDataAnwers={countTrueDataAnwers}
          checkData={data?.isCorrect}
          handleChange={() => handleSubmit(onSubmit)()}
          name="isCorrect"
          control={control}
          classCheckBox={`
               absolute z-10 border-[3px] border-white right-3 top-3 p-2 rounded-full
          `}
          errorsOption={errorsOptionCheckBox}
          backgroundColor={backgroundColor}
          checkTrueAnwsers={count}
        />
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              className={classInput}
              placeholder={placeholder}
              placeholderTextColor="white"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={handleSubmit(onSubmit)}
            />
          )}
          name="text"
          rules={errorsOptionInput}
          defaultValue={defaultValue}
        />
      </Animated.View>
    </>
  );
};
export default CardAnswer;
