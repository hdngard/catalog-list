import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IMainSliceState} from "./mainSliceTypes";

const initialState: IMainSliceState = {
    robotsMetaIndex: true,
}

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {
        setRobotsMetaIndex: (state, action: PayloadAction<boolean>) => {
            state.robotsMetaIndex = action.payload
        },
    },
})

export const {setRobotsMetaIndex} = mainSlice.actions
export default mainSlice.reducer