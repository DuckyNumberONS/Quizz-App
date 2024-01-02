import axios, { AxiosRequestHeaders } from "axios";
import { API } from "../lib/constants";
import { store } from "../lib/redux/store";
import useGetAsyncStorage from "../lib/hook/useGetAsyncStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
// interface CustomAxiosRequestHeaders extends AxiosRequestHeaders {
//   authorization: string;
// }

const instance = axios.create({
  // DÙng ở nhà
  // baseURL: "http://192.168.1.7:8004",
  // DÙng ở trường
  // baseURL: "http://172.16.234.181:8004",
  baseURL: "http://192.168.0.5:8004",
  timeout: 5000,
});

export default instance;

const setTokenHeader = async () => {
  try {
    const storedData = await useGetAsyncStorage("root");
    const selectedToken = storedData?.token;
    if (selectedToken) {
      instance.interceptors.request.use(
        function (config: any) {
          config.headers = {
            token: `Bearer ${selectedToken}`,
          };
          return config;
        },
        function (error) {
          return Promise.reject(error);
        }
      );
    } else {
      console.error("Không tìm thấy token trong AsyncStorage.");
    }
  } catch (error) {
    console.error("Lỗi khi lấy giá trị từ AsyncStorage:", error);
  }
};

setTokenHeader();
