import axios from "axios";

interface UserInfo {
  username: string;
  password: string;
}

const userUser = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getUserToken = async (userInfo: UserInfo): Promise<string> => {
    const {
      data: { token },
    } = await axios.post<{ token: string }>(`${apiUrl} login`, userInfo);

    return token;
  };
  return { getUserToken };
};
export default userUser;
