import axios from "../utils/axios";
import { useAppDispatch } from "../redux/store";
import { addPerson } from "../redux/slices/UserSlice";
const useSearch = () => {
  const dispatch = useAppDispatch();
  const headers = {
    "Content-Type": "application/json",
  };
  const findUser = async (search: string | undefined) => {
    try {
      dispatch(addPerson({status:"initial", isLoading: true, data: []}));
      const result = await axios.get(`/search/users?q=${search}&per_page=5`, {
        headers,
      });
      dispatch(addPerson({status:result.data.total_count > 0 ? 'found':'notfound', isLoading: false, data: result.data.items}));
      // return result.data;
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
