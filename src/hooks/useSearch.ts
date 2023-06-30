import axios from "../utils/axios";
const useSearch = () => {
  const headers = {
    "Content-Type": "application/json",
  };
  const findUser = async (search: string | undefined) => {
    try {
      const result = await axios.get(`/search/users?q=${search}&per_page=5`, {
        headers,
      });
      return result.data;
    } catch (err: any) {
      return { status: "error", message: err.message };
    }
  };

  const findRepo = async (username: string) => {
    try {
      const result = await axios.get(`/users/${username}/repos`, {
        headers,
      });
      return result.data;
    } catch (err: any) {
      return { status: "error", message: err.message };
    }
  };

  return {
    findUser,
    findRepo,
  };
};
export default useSearch;
