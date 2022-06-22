import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './store';

const initialState = {
    wall_id: 1
}

export const selectedWall = createSlice({
    name: 'selected_wall',
    initialState,
    reducers: {
        selectedwall: (state, action: PayloadAction<number>) => {
            state.wall_id = action.payload;
        }
    }
});

export default selectedWall.reducer;

export const { selectedwall } = selectedWall.actions;

export const selectWallSelected = (state: RootState) =>  state.selectedwall.wall_id;