import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
// import QuestionScreen from "./screens/QuestionScreen";
import StartScreen from "./screens/StartScreen";
import CheckAccount from "./screens/StartScreen/Checking-Account";
import TypeAccount from "./screens/RegisterScreen/TypeAccountScreen";
import CreateStepOne from "./screens/RegisterScreen/CreateAccountScreen/StepOne";
import Welcome from "./screens/RegisterScreen/WelcomeScreen";
import { store, persistor } from "./src/lib/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import CreateLastStep from "./screens/RegisterScreen/CreateAccountScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PlayScreen from "./screens/PlayScreen";
import CreateQuizzScreen from "./screens/CreateQuizzScreen";
import CreateQuestionScreen from "./screens/CreateQuizzScreen/CreateQuestionScreen/index";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="StartScreen"
            screenOptions={{
              headerTintColor: "white",
              headerStyle: { backgroundColor: "#4378DB" },
            }}
          >
            <Stack.Screen
              name="StartScreen"
              component={StartScreen}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="CheckingAccount"
              component={CheckAccount}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="TypeAccount"
              component={TypeAccount}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="CreateStepOne"
              component={CreateStepOne}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="CreateLastStep"
              component={CreateLastStep}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="Play"
              component={PlayScreen}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="CreateQuizz"
              component={CreateQuizzScreen}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="CreateQuestion"
              component={CreateQuestionScreen}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            {/* <Stack.Screen name="Question" component={QuestionScreen} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
