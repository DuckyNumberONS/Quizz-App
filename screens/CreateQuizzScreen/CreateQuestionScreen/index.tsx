import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Layout from "../../../components/layout";
import { useForm } from "react-hook-form";
import Input from "../../../components/input";
import FormCreateQuesion from "../../../components/form/formt-create-questions";
import Select from "../../../components/select";
import visibility from "../../../src/config/visibility";
import point from "../../../src/config/point";
import timeQuestion from "../../../src/config/timeQuestion";
import CardAnswer from "../../../components/input/input-checkbox-answer/card-answer";
import { useDispatch, useSelector } from "react-redux";
import { anwsers } from "../../../src/lib/redux/selector/anwsersSelect";
import { setQuestion } from "../../../src/lib/redux/user/questionsReducer";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { addQuestion, updateItemQuizz } from "../../../src/lib/api/quizz";
import { useRoute } from "@react-navigation/native";

interface PropsData {
  isCorrect: boolean;
  text: string;
  number: number;
}
interface PropsPrams {
  id?: string;
}

interface PropsDataAnwers {
  title: string;
  imgQuestion: string;
  point: number;
  time: number;
  anwsers: Array<PropsData>;
}

const CreateQuestionScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const dataAnwers: Array<PropsData> = useSelector(anwsers);
  const dispatch = useDispatch();
  const route = useRoute();
  const { id }: PropsPrams = route.params;

  function areTextValuesUnique(array) {
    const textValues = new Set();
    for (const item of array) {
      if (textValues.has(item.text)) {
        return false;
      }
      textValues.add(item.text);
    }
    return true;
  }

  const onSubmit = async (data: PropsDataAnwers) => {
    const validateText = areTextValuesUnique(dataAnwers);
    if (validateText && dataAnwers.length > 0 && data) {
      const question = {
        anwsers: dataAnwers,
        ...data,
      };
      const res = await addQuestion(question, id);
      if (res) {
        navigation.push("CreateQuestion", { id: id });
      }
    } else if (!validateText) {
      setError("existext", {
        type: "required",
        message: "Text anwsers exis !",
      });
    }
  };

  return (
    <Layout>
      <TextInput defaultValue="https://png.pngtree.com/background/20230610/original/pngtree-roosters-with-a-long-red-beak-and-wings-standing-up-picture-image_3024314.jpg" />
      <FormCreateQuesion
        title="Create Question"
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        titleButton="Add question"
        // theme={popup ? "#4d4d4d" : "white"}
      >
        <View className="mt-3">
          <Input
            label="urlQuestion"
            name="imgQuestion"
            type="text"
            errors={errors}
            placeholder="example urlQuestion"
            errorsOption={{
              required: { value: true, message: "urlQuestion is empty" },
            }}
            classLabel="block text-[13px] font-medium text-gray-900 text-[#B5B2C1]"
            classInput="text-black bg-gray-50rounded-lg block w-full text-sm"
            control={control}
          />
        </View>
        <View className="mt-6 flex-row ">
          <View className="w-1/2 border-r-[5px] border-white">
            <Select
              options={timeQuestion}
              placeholder="Choose Time"
              name="time"
              errors={errors}
              errorsOption={{
                required: { value: true, message: "Time questions is empty" },
              }}
              classSelect="text-black bg-gray-50 rounded-lg block w-full text-sm"
              control={control}
            />
          </View>
          <View className="w-1/2 border-l-[5px] border-white">
            <Select
              options={point}
              placeholder="Choose Point"
              name="point"
              errors={errors}
              errorsOption={{
                required: { value: true, message: "Point is empty" },
              }}
              classSelect="text-black bg-gray-50 rounded-lg block w-full text-sm"
              control={control}
            />
          </View>
        </View>
        <View className="mt-6">
          <Input
            label="Title"
            name="title"
            type="text"
            errors={errors}
            placeholder="example title"
            errorsOption={{
              required: { value: true, message: "Title is empty" },
              maxLength: {
                value: 50,
                message: "Title cannot exceed 50 number",
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
        {/* Anwwsers */}
        <View className="w-full flex-row flex-wrap mt-12">
          {/* Box 1 */}
          <View className="w-1/2 border-r-[5px] border-white mb-3">
            <CardAnswer
              number={1}
              placeholder="Add"
              errorsOptionInput={{
                required: { value: true, message: "Text is empty" },
              }}
              classInput="text-white font-semibold text-[18px] text-center mt-12 relative"
              backgroundColor="#e35454"
              borderShadowColor="#bf2d49"
            />
          </View>
          {/* Box 2 */}
          <View className="w-1/2 border-l-[5px] border-white b-3">
            <CardAnswer
              number={2}
              placeholder="Add"
              errorsOptionInput={{
                required: { value: true, message: "Text is empty" },
              }}
              classInput="text-white font-semibold text-[18px] text-center mt-12 relative"
              backgroundColor="#30b0c7"
              borderShadowColor="#0093ad"
            />
          </View>
          {/* Box 3 */}
          <View className="w-1/2 border-r-[5px] border-white b-3">
            <CardAnswer
              number={3}
              placeholder="Add"
              errorsOptionInput={{
                required: { value: true, message: "Text is empty" },
              }}
              classInput="text-white font-semibold text-[18px] text-center mt-12 relative"
              backgroundColor="#ff9500"
              borderShadowColor="#c27810"
            />
          </View>
          {/* Box 4 */}
          <View className="w-1/2 border-l-[5px] border-white b-3">
            <CardAnswer
              number={4}
              placeholder="Add"
              errorsOptionInput={{
                required: { value: true, message: "Text is empty" },
              }}
              classInput="text-white font-semibold text-[18px] text-center mt-12 relative"
              backgroundColor="#3ed684"
              borderShadowColor="#81ab8b"
            />
          </View>
        </View>
      </FormCreateQuesion>
    </Layout>
  );
};
export default CreateQuestionScreen;
