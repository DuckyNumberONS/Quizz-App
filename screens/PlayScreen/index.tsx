import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import LayoutPlayQuizz from "../../components/layout-play-quizz";
import { getItemQuizz } from "../../src/lib/api/quizz";
import { Quizz } from "../../src/lib/modal/quizz";
import { Anwsers } from "../../src/lib/modal/question";
interface PropsPrams {
  quizzId?: string;
}

const PlayScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const router = useRoute();
  const [quizz, setQuizz] = useState<Quizz>();
  const question = quizz ? quizz.question : [];
  const [notification, setNotification] = useState("");
  const correctAnswers = question[3]?.anwsers.map((item) => ({
    id: item._id,
    isCorrect: item.isCorrect,
  }));

  const [values, setValues] = useState<Anwsers[]>([]);
  const { quizzId }: PropsPrams = router.params;
  const selectedAnswer = values.filter(
    (value) => value !== undefined && value.isCorrect === true
  ).length;

  const lengthTrueAnswer = question[3]?.anwsers.filter(
    (items) => items.isCorrect === true
  ).length;

  const arrColor = [
    { backgroundColor: "#e35454", borderColor: "#bf2d49" },
    { backgroundColor: "#30b0c7", borderColor: "#0093ad" },
    { backgroundColor: "#ff9500", borderColor: "#c27810" },
    { backgroundColor: "#3ed684", borderColor: "#81ab8b" },
  ];

  useEffect(() => {
    const fetch = async () => {
      const res = await getItemQuizz(quizzId);
      setQuizz(res);
    };
    fetch();
  }, []);

  useEffect(() => {
    if (notification !== "") {
      const timer = setTimeout(() => {
        navigation.push("Play", { quizzId: quizz._id });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handlePress = (id: string, index: number, text: string) => {
    const newValues = [...values];
    const isSelected =
      (newValues[index] && newValues[index].isCorrect) || false;

    if (!isSelected && selectedAnswer < lengthTrueAnswer) {
      if (newValues[index] !== undefined) {
        newValues[index].isCorrect = !isSelected;
      } else {
        newValues[index] = {
          _id: id,
          number: index,
          text: text,
          isCorrect: true,
        };
      }
    }
    if (isSelected) {
      newValues[index].isCorrect = !isSelected;
    }
    setValues(newValues);
  };

  const onSubmit = () => {
    if (selectedAnswer === 0) {
      setNotification("ERROR");
    } else {
      const arr = values.filter((value) =>
        correctAnswers.some(
          (item) =>
            value !== undefined &&
            item.id === value._id &&
            item.isCorrect === value.isCorrect &&
            value.isCorrect === true
        )
      );

      if (arr.length === lengthTrueAnswer) {
        setNotification("TRUE");
      } else {
        setNotification("FALSE");
      }
    }
  };

  return (
    <>
      <LayoutPlayQuizz
        index={1}
        maxLenghthQuizz={question.length}
        notification={notification}
        poin={question[3]?.point}
      >
        <Image
          className="w-full h-[220px] rounded-2xl mt-5 z-10"
          source={{ uri: `${question[3]?.imgQuestion}` }}
          resizeMethod="auto"
        />
        <Text className="mt-6 text-2xl font-semibold h-20">
          {question[3]?.title}
        </Text>
        {/* Anwwsers */}
        <View className="w-full flex-row flex-wrap mt-4">
          {question[3]?.anwsers.map((items, index) => (
            <View
              className="w-1/2 border-r-[5px] border-white mb-3"
              key={items._id}
            >
              <TouchableOpacity
                className="border-r-4 border-b-4 py-3 px-6 rounded-2xl w-full h-[150px]"
                style={{
                  backgroundColor: arrColor[index].backgroundColor,
                  borderColor: arrColor[index].borderColor,
                }}
                onPress={() => handlePress(items._id, index, items.text)}
              >
                <TouchableOpacity
                  onPress={() => handlePress(items._id, index, items.text)}
                  className={`absolute z-10 border-[3px] border-white right-3 top-3 p-2 rounded-full`}
                  style={{
                    backgroundColor: values[index]?.isCorrect
                      ? "#4ade80"
                      : `${arrColor[index].backgroundColor}`,
                  }}
                >
                  <View>
                    {values[index]?.isCorrect ? (
                      <Image
                        className="bg-cover bg-no-repeat w-[17px] h-[17px]"
                        source={require("../../public/images/done.png")}
                      />
                    ) : (
                      <View className="w-[17px] h-[17px]" />
                    )}
                  </View>
                </TouchableOpacity>

                <Text className="text-white font-semibold text-[18px] text-center mt-12 relative">
                  {items.text}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View>
          <TouchableOpacity className="mt-2 w-full bg-black border-b-4 border-r-4 border-[#6d5ff6] py-4 rounded-[40px]">
            <Text
              className="text-center font-medium text-base text-white"
              onPress={() => onSubmit()}
            >
              Next Question
            </Text>
          </TouchableOpacity>
        </View>
      </LayoutPlayQuizz>
    </>
  );
};

export default PlayScreen;
