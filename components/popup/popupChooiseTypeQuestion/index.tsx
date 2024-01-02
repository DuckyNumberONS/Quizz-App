import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { Dispatch, SetStateAction, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  SlideInDown,
  SlideInUp,
} from "react-native-reanimated";
interface Props {
  popups: boolean;
  setPopups: Dispatch<SetStateAction<boolean>>;
}

const ChooiseTypeQuestion: React.FC<Props> = ({ popups, setPopups }) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const closePopup = useCallback(() => {
    setPopups(false);
  }, []);

  const handlePushRouter = (link: string) => {
    navigation.push(`${link}`);
  };
  const quizzType = [
    {
      id: 1,
      title: "Quiz",
      color: "#ff2d55",
      urlThumbnail:
        "https://www.shutterstock.com/shutterstock/photos/2052894734/display_1500/stock-vector-quiz-and-question-marks-trivia-night-quiz-symbol-neon-sign-night-online-game-with-questions-2052894734.jpg",
      link: "CreateQuestion",
      icon: require("../../../public/images/quizzes-question.png"),
    },
    {
      id: 2,
      title: "Puzz",
      color: "#86a884",
      urlThumbnail:
        "https://www.ikea.com/sg/en/images/products/aftonsparv-puzzle__1242247_pe920114_s5.jpg",
      link: "CreateQuestion",
      icon: require("../../../public/images/puzzle.png"),
    },
    {
      id: 3,
      title: "True or False",
      color: "#30b0c7",
      urlThumbnail:
        "https://play-lh.googleusercontent.com/OF0KkqC26u-3q0-nFV3jdBNtJYtdvOjYsHYC-N0B2VscdmlM1yUodqf20lHxWyyC65c",
      link: "CreateQuestion",
      icon: require("../../../public/images/trueoffalse.png"),
    },
    {
      id: 4,
      title: "Audio",
      color: "#af52de",
      urlThumbnail:
        "https://images.unsplash.com/photo-1519874179391-3ebc752241dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ",
      link: "CreateQuestion",
      icon: require("../../../public/images/audio.png"),
    },
    {
      id: 5,
      title: "Poll",
      color: "#ff9500",
      urlThumbnail:
        "https://www.voxco.com/wp-content/uploads/2021/09/Opinion-Polls1.png",
      link: "CreateQuestion",
      icon: require("../../../public/images/poll.png"),
    },
    {
      id: 6,
      title: "Word",
      color: "#ffcc00",
      urlThumbnail:
        "https://galined.com/wp-content/uploads/2017/02/Research-paper-Writing.jpg",
      link: "CreateQuestion",
      icon: require("../../../public/images/notepad.png"),
    },
  ];
  return (
    <TouchableOpacity
      className="absolute z-100 w-full h-full bottom-0"
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      onPress={closePopup}
    >
      <Animated.View
        entering={
          popups
            ? SlideInDown.delay(200).duration(500).springify()
            : SlideInUp.delay(300).duration(500).springify()
        }
        className="bg-white absolute bottom-0 w-full h-[500px] rounded-t-2xl p-5"
      >
        <TouchableOpacity
          className="bg-[#8f8e93] w-11 h-1 rounded-r-xl mx-auto"
          onPress={closePopup}
        />
        <View className="h-full w-full my-6 flex-row flex-wrap">
          {quizzType.map((items) => (
            <TouchableOpacity
              key={items.id}
              className="w-1/2 h-1/3 border-4 border-white rounded-2xl relative"
              onPress={() => handlePushRouter(items.link)}
            >
              <View
                className="border-b-4 border-r-4 rounded-3xl"
                style={{ borderColor: `${items.color}` }}
              >
                <Image
                  className="w-full h-full flex items-center rounded-2xl"
                  source={{ uri: items.urlThumbnail }}
                />
                <View className=" absolute inset-0 h-full w-full flex-row items-center">
                  <View
                    className="absolute z-100 w-full h-full bottom-0 rounded-2xl"
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                  />
                  <Image
                    className="bg-cover bg-no-repeat mx-auto w-10 h-10"
                    source={items.icon}
                  />
                </View>
                <View className="absolute bottom-3 w-full ">
                  <View
                    className="w-4/6 mx-auto px-2 rounded-lg"
                    style={{ backgroundColor: `${items.color}` }}
                  >
                    <Text className="text-white font-semibold text-[14px] text-center">
                      {items.title}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};
export default React.memo(ChooiseTypeQuestion);
