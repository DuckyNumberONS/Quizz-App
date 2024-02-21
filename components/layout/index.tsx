import React, { ReactNode } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Footer from "./footer";
import Header from "./header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
interface Props {
  children: ReactNode;
  backgroundColor?: string;
}

const Layout: React.FC<Props> = ({ children, backgroundColor = "white" }) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const route = useRoute();
  const currentScreen = route.name;

  const checkPath = () => {
    switch (currentScreen) {
      case "Profile":
        return false;
      case "Play":
        return false;
      case "CreateQuizz":
        return false;
      case "CreateQuestion":
        return false;
      case "ResultsPlay":
        return false;
      case "TopResultsPlay":
        return false;
      default:
        return true;
    }
  };
  return (
    <View
      className="flex-1 relative"
      style={{ backgroundColor: backgroundColor }}
    >
      <View className="flex-1 mt-10 relative">
        {checkPath() && <Header />}
        <ScrollView
          className={checkPath() && "mx-3"}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <View>{children}</View>
        </ScrollView>
        <Footer />
      </View>
    </View>
  );
};
export default Layout;
