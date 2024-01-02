import AsyncStorage from "@react-native-async-storage/async-storage";

const useGetAsyncStorage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    const parsedData = JSON.parse(value);
    if (parsedData !== null) {
      console.log("Giá trị đã lấy từ AsyncStorage:", parsedData);
      return parsedData;
    } else {
      console.log("Không có giá trị được lưu trữ với key này.");
      return null;
    }
  } catch (error) {
    console.error("Lỗi khi lấy giá trị từ AsyncStorage:", error);
    return null;
  }
};

export default useGetAsyncStorage;
