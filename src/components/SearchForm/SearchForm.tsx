import React, { useState, useRef, FormEvent } from "react";
import useSearch from "../../hooks/useSearch";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { addPerson } from "../../redux/slices/UserSlice";

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.person.persons);
  const user = useSearch();
  const [searchResult, setSearchResult] = useState<any>("");
  const [error, setError] = useState<boolean>(false);
  const searchInput = useRef<HTMLInputElement>(null);
  const onChangeInput = () => {
    setError(false)
    setSearchResult("");
    dispatch(addPerson({ status: "initial", isLoading: false, data: [] }))
  };
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if(searchInput.current?.value !== ""){
      setSearchResult(searchInput.current?.value);
      dispatch(addPerson({status:"initial", isLoading: true, data: []}));
      const data = await user.findUser(searchInput.current?.value);
      dispatch(addPerson({status:data.total_count > 0 ? 'found':'notfound', isLoading: false, data: data.items}));
    }else{
      setError(true)
    }
  };
  return (
    <div className="w-full h-auto p-3">
      <form className="mb-3" onSubmit={onSubmit}>
        <input
          ref={searchInput}
          onChange={onChangeInput}
          className="bg-gray-100 w-full h-12 px-2 border border-[#E0E1E1] text-[#383838] mb-3"
          type="text"
          name="username"
          placeholder="Enter username"
        />
         {error ? <p className="text-center text-xs mb-3 text-red-700">Username cannot be empty</p> : null}
        <input
          className="bg-[#2C9CDB] text-white w-full h-12 cursor-pointer"
          type="submit"
          value="Search"
        />
      </form>
      {searchResult !== "" && userState.status === "found" ? (
        <div className="text-[#686868]">Showing user for {searchResult}</div>
      ) : null}
    </div>
  );
};

export default SearchForm;
