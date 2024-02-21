import { View, Text } from "react-native";
import { CheckBox } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useForm } from "react-hook-form";
import LayoutReg from "../../components/layout/authenticator";
import Input from "../../components/input";
import { verifyLogin } from "../../src/lib/api/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../src/lib/redux/action/user";
import { setToken } from "../../src/lib/redux/action/token";
// import axios from "../../src/utils/index";

interface Auth {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onSubmit = async (data: Auth) => {
    const res = await verifyLogin(data);
    if (res != undefined) {
      dispatch(setUser(res.userFilter));
      dispatch(setToken(res.accessToken));
      navigation.push("Home");
    } else {
      console.error("false");
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClick = () => {
    // coming soon
  };
  return (
    <LayoutReg
      title="Hello threre 👋"
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      titleButton="Sign up"
    >
      <View className="mt-5">
        <Input
          label="Email"
          name="email"
          type="text"
          errors={errors}
          placeholder="someone@example.com"
          errorsOption={{
            required: { value: true, message: "Email is empty" },
            maxLength: {
              value: 256,
              message: "Email cannot exceed 256 char",
            },
            minLength: {
              value: 8,
              message: "Email must not be less than 8 char",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          classLabel="block text-[13px] font-medium text-gray-900 text-[#B5B2C1]"
          classInput="text-black bg-gray-50rounded-lg block w-full text-sm"
          control={control}
        />
      </View>
      <View className="mt-4">
        <Input
          label="Password"
          name="password"
          type="text"
          errors={errors}
          placeholder="••••••••"
          errorsOption={{
            required: { value: true, message: "Password is empty" },
            maxLength: {
              value: 128,
              message: "Password cannot exceed 128 char",
            },
            minLength: {
              value: 8,
              message: "Password must not be less than 8 char",
            },
          }}
          classLabel="block text-[13px] font-medium text-gray-900 text-[#B5B2C1]"
          classInput="text-black bg-gray-50rounded-lg block w-full text-sm"
          control={control}
        />
      </View>
      <View className="mt-4 flex-row items-center justify-between">
        <CheckBox
          title="Remember me"
          className="bg-white"
          onPress={handleClick}
        />
        <Text
          className="text-[#036be5] font-semibold text-center"
          onPress={() => navigation.push("ForgotPassword")}
        >
          Forgot Password?
        </Text>
      </View>
    </LayoutReg>
  );
}
