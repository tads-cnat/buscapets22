import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/userSlice'
import publicationReducer from '../redux/publicationSlice'
import mapReducer from '../redux/mapSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    publication: publicationReducer,
    map: mapReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store