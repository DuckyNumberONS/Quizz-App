import axios from "../../utils/index";

export const verifyLogin = async (data: any) => {
  try {
    const response = await axios.post("/authen/login", data);
    const users = await response.data;
    return users;
  } catch (error) {
    console.error(error);
  }
};
