import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from '../store/store';


export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {uid:"", photoUrl: "",displayName: "",email:"",isLogin:false}
  },
  reducers: {
    login: (state,action)=> {
      //payload=user情報
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = {uid:"", photoUrl: "",displayName: "",email:"",isLogin:false}
    }
  }
})

//分割代入
export const {login, logout} = userSlice.actions;

//useSelecterからuser情報を返す関数を作成
export const selectUser = (state: RootState) =>state.user.user;

export default userSlice.reducer;



