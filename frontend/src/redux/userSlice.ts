import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../services/base";

interface ILogin {
  email: string
  password: string
}

interface IUserState {
  user_id: string
  token: string
  isLogged: boolean
  status: string
  msg: string
}

const initialState: IUserState = {
  user_id: '',
  token: '',
  isLogged: false,
  status: 'idle' || 'loading' || 'succeeded' || 'failed',
  msg: ''
}

export const login = createAsyncThunk('login/',
  async (data: ILogin, {rejectWithValue}) => {
    try{
      const response = await api.post("/users/session", data)
      return response.data
    } catch (err) {
      return rejectWithValue('Email ou senha incorretos')
    }
  }
)

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state: any){
      return {...state, isLogged: false, user_id:'', token: ''}
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(login.pending, (state, action) => {
      state.isLogged = false
      state.status = 'loading'
    })
    .addCase(login.fulfilled, (state, action) => {
      state.user_id = action.payload.user_id
      state.token = action.payload.token
      state.isLogged = true
      state.status = 'succeeded'
      state.msg = "Logado com sucesso!"
    })
    .addCase(login.rejected, (state, action) => {
      state.isLogged = false
      state.status = 'failed'
      state.msg = "Email ou senha incorretos!"
    })
  },
})

export const {logout} = slice.actions
export const selectUser = (state: IUserState) => state
export default slice.reducer