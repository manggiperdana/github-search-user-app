import { useState } from "react";
import { ChevronDown, ChevronUp } from "../../icons";
import useSearch from "../../hooks/useSearch";
import RepoItem from "../RepoItem/RepoItem";
import Loading from "../Loading/Loading";

const UserItem = ({ user }: { user: any }) => {
  const [showRepo, setShowRepo] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [repos, setRepos] = useState<any>([]);
  const userSearch = useSearch();
  const handleShowRepo = async (show:boolean) => {
    setShowRepo(show);
    if(show){
      setIsLoading(true);
      const reposData = await userSearch.findRepo(user.login);
      if (reposData.length > 0) {
      }
      setRepos(reposData);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full px-3 mb-3">
      <div
        className="flex justify-between bg-[#F2F2F2] p-3 mb-3 cursor-pointer"
        onClick={()=>handleShowRepo(!showRepo)}
      >
        <p>{user.login}</p>
        {showRepo ? <ChevronUp /> : <ChevronDown />}
      </div>
      {isLoading ? <Loading /> : null}
      {showRepo ? (
        repos.length > 0 ? (
          repos.map((repo: any, i: any) => <RepoItem repo={repo} key={i} />)
        ) : (
          <RepoItem repo={null} />
        )
      ) : null}
    </div>
  );
};

export default UserItem;
