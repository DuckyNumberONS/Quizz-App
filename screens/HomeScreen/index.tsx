import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Layout from "../../components/layout";
import WelcomeHome from "../../components/welcome-home-section";
import TopCollections from "../../components/top-collections-section";
import TopAutors from "../../components/top-autors-section";
import TopQiz from "../../components/top-quiz-section";

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <Layout>
      <WelcomeHome />
      <TopCollections />
      <TopAutors />
      <TopQiz />
    </Layout>
  );
};

export default HomeScreen;
