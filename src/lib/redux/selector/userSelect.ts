import { User } from "../../modal/user";

interface PropsUser {
  user: User;
}

const user = (state: PropsUser) => {
  return state.user;
};

export { user };
