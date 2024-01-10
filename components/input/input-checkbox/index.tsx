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
  handleChange?: Function;
  name: string;
  control: any;
  children?: ReactNode;
  classCheckBox: string;
  errorsOption?: any;
  backgroundColor: string;
  checkTrueAnwsers: number;
  checkData: boolean;
  lengthTrueDataAnwers: number;
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
  lengthTrueDataAnwers,
}) => {
  const handlePress = (onChange: Function, value: boolean) => {
    if (
      checkTrueAnwsers >= 2 &&
      ((value && checkData) || lengthTrueDataAnwers <= 2)
      //Kiem tra cau trả lời trê >=2 câu hỏi thì kiểm tra tiếp xem một trong
      //2 giá trị a = value && checkData hoặc Nếu như trong kho dữ liệu nếu isCorrect trong bộ dữ liệu <=2(3)
      //thì là đúng và cho thay đổi giá trị
    ) {
      onChange(!value);
    }
    if (handleChange) {
      handleChange();
    }
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
