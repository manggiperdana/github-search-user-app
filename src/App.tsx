import "./App.css";
import Loading from "./components/Loading/Loading";
import SearchForm from "./components/SearchForm/SearchForm";
import UserItem from "./components/UserItem/UserItem";
import { useAppSelector } from "./redux/store";

function App() {
  const users = useAppSelector((state) => state.person.persons);
  return (
    <div className="flex justify-center bg-[#E5E4E5]">
      <div className="w-full 2xl:w-1/4 xl:w-1/4 lg:w-4/12 md:w-5/12 sm:w-1/2 xs:w-4/5 h-screen bg-white">
        <div className="max-h-screen overflow-auto">
          <SearchForm />
          {users.isLoading ? <Loading /> : null}
          {users.status !== "initial" ? (
            users.status === "found" ? (
              users.data.map((user, i) => <UserItem user={user} key={i} />)
            ) : (
              <p className="text-center">User not found</p>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
