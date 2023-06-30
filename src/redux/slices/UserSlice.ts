import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  login: string;
}

interface UserState {
  persons: {
    status: string;
    isLoading: boolean;
    data: User[];
  };
}

const initialState: UserState = {
  persons: {
    status: "initial",
    isLoading: false,
    data: [],
  },
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addPerson: (
      state,
      action: PayloadAction<{ status: string, isLoading:boolean, data: [] }>
    ) => {
      state.persons = {
        status: action.payload.status,
        isLoading: action.payload.isLoading,
        data: [...action.payload.data],
      };
    },
  },
});

export default UserSlice.reducer;
export const { addPerson } = UserSlice.actions;
