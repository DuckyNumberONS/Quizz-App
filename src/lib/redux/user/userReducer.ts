const INITIAL_STATE = {
  fullName: "",
  username: "",
  typeAccount: "",
  dateBirday: "",
  phoneNumber: "",
  country: "",
  urlAvatar: "",
  email: "",
  password: "",
  admin: false,
  // createdAt: "",
  // updatedAt: "",
};

const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
