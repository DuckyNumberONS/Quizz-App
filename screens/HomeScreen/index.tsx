import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Layout from "../../components/layout";
import WelcomeHome from "../../components/welcome-home-section";
import TopCollections from "../../components/top-collections-section";
import TopAutors from "../../components/top-autors-section";
import TopQuiz from "../../components/top-quiz-section";
import { useSelector } from "react-redux";
import { Quizz } from "../../src/lib/modal/quizz";
import { getListQuizz } from "../../src/lib/api/quizz";

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [data, setData] = useState<Quizz[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <Layout>
      <WelcomeHome />
      <TopCollections />
      <TopAutors />
      <TopQuiz />
    </Layout>
  );
};

export default HomeScreen;
