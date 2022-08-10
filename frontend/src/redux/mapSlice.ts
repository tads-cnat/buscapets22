import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IMapClickState {
  lng: number
  lat: number
  cursorIcon?: boolean
}

interface ICursosState {
  cursorIcon: boolean
}

const initialState: IMapClickState = {
  lng: 0,
  lat: 0,
  cursorIcon: false
}

export const slice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    attCoordinates(state: IMapClickState, action: PayloadAction<IMapClickState>) {
      state.lat = action.payload.lat
      state.lng = action.payload.lng
    },
    attCursorIcon(state: IMapClickState, action: PayloadAction<ICursosState>) {
      state.cursorIcon = action.payload.cursorIcon
    },
  },
})

export const {attCoordinates, attCursorIcon} = slice.actions
export const selectMap = (state: IMapClickState) => state
export default slice.reducer