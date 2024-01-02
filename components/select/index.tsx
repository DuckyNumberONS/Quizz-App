import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
interface OptionProps {
  value: any;
  [key: string]: any;
}
import { Picker } from "@react-native-picker/picker";

interface SelectProps {
  label?: string;
  name: string;
  errors: any;
  errorsOption?: any;
  classLabel?: string;
  classSelect: string;
  options: Array<OptionProps>;
  defaultValue?: any;
  control: any;
  placeholder: string;
}

const Select: React.FC<SelectProps> = ({
  name,
  label,
  errors,
  errorsOption,
  options,
  classLabel,
  defaultValue,
  placeholder = "Loading",
  control,
}) => {
  const keys = errorsOption ? Object.keys(errorsOption) : [];
  const [isPickerOpen, setisPickerOpen] = useState(true);
  const handleFocus = () => {
    setisPickerOpen(false);
  };
  return (
    <>
      <Animated.View
        entering={FadeInDown.delay(400).duration(1000).springify()}
        className={`${
          errors?.[name] ? "border border-red-600" : ""
        } bg-[#f6f5fa] py-3 px-6 rounded-2xl h-[70px] w-full`}
      >
        {label && <Text className={classLabel}>{label}</Text>}
        <Controller
          control={control}
          render={({ field }) => (
            <Picker
              selectedValue={field.value}
              onValueChange={field.onChange}
              onFocus={handleFocus}
              mode="dropdown"
              style={{
                marginLeft: -12,
                marginRight: -12,
              }}
            >
              <Picker.Item
                style={{
                  fontSize: 13,
                }}
                label={placeholder}
                value={null}
              />
              {options.map((items) => (
                <Picker.Item
                  key={items.value}
                  label={items.name}
                  value={items.value}
                  style={{
                    fontSize: 13,
                  }}
                />
              ))}
            </Picker>
          )}
          name={name}
          rules={errorsOption}
          defaultValue={defaultValue}
        />
      </Animated.View>
      {keys.map((items) => (
        <View key={items}>
          {errors?.[name]?.type === items && (
            <Text className="text-red-600 mt-3">{errors?.[name]?.message}</Text>
          )}
        </View>
      ))}
    </>
  );
};
export default Select;
