import React, { ReactNode, useEffect, useState } from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import { Controller, FieldError } from "react-hook-form";
import { useSelector } from "react-redux";
import { anwsers } from "../../../src/lib/redux/selector/anwsersSelect";

interface PropsData {
  isCorrect: boolean;
  text: string;
  number: number;
}

interface PropsCheckBox {
  handleChange: Function;
  name: string;
  control: any;
  children?: ReactNode;
  classCheckBox: string;
  errorsOption?: any;
  backgroundColor: string;
  checkTrueAnwsers: number;
  checkData: PropsData;
}

const CheckBox: React.FC<PropsCheckBox> = ({
  handleChange,
  name,
  control,
  classCheckBox,
  errorsOption,
  backgroundColor,
  checkTrueAnwsers,
  checkData,
}) => {
  const dataAnwers: Array<PropsData> = useSelector(anwsers);
  const countTrueDataAnwers = dataAnwers.filter(
    (items) => items.isCorrect
  ).length;

  const handlePress = (onChange: Function, value: boolean) => {
    if (
      checkTrueAnwsers >= 2 &&
      ((value && checkData?.isCorrect) || countTrueDataAnwers <= 2)
    ) {
      onChange(!value);
    }
    handleChange();
  };

  return (
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <TouchableOpacity
          onPress={() => handlePress(onChange, value)}
          className={classCheckBox}
          style={{
            backgroundColor: value ? "#4ade80" : `${backgroundColor}`,
          }}
        >
          <View>
            {value ? (
              <Image
                className="bg-cover bg-no-repeat w-[17px] h-[17px]"
                source={require("../../../public/images/done.png")}
              />
            ) : (
              <View className="w-[17px] h-[17px]" />
            )}
          </View>
        </TouchableOpacity>
      )}
      name={name}
      rules={errorsOption}
      defaultValue={false}
    />
  );
};

export default CheckBox;
