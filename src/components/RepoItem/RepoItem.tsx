import { Star } from "../../icons";
const RepoItem = ({ repo }: { repo: any }) => {
  return (
    <>
      {repo === null ? (
        <div className="flex bg-[#DFE0E0] p-3 ml-3 h-28 mb-3">
          <div className="w-[90%] overflow-auto">
            <p className="font-bold">&nbsp;</p>
            <p>No repo available</p>
          </div>
          <div className="flex">
            <span className="font-bold p-0">&nbsp;</span>
            &nbsp;
          </div>
        </div>
      ) : (
        <div className="flex bg-[#DFE0E0] p-3 ml-3 h-28 mb-3">
          <div className="w-[90%] overflow-auto">
            <p className="font-bold">{repo.name}</p>
            <p>{repo.description ? repo.description : "No description"}</p>
          </div>
          <div className="flex">
            <span className="font-bold p-0">{repo.stargazers_count}</span>
            <Star />
          </div>
        </div>
      )}
    </>
  );
};

export default RepoItem;
