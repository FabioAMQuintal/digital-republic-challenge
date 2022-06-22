import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store';
import { IPayload } from '../../types/index';

const initialState = {
    walls: [
        {
        totalArea: 0,
        id: 1,
        height: 0,
        width: 0,
        windows: 0,
        doors: 0
        },
        {
        totalArea: 0,
        id: 2,
        height: 0,
        width: 0,
        windows: 0,
        doors: 0
        },
        {
        totalArea: 0,
        id: 3,
        height: 0,
        width: 0,
        windows: 0,
        doors: 0
        },
        {
        totalArea: 0,
        id: 4,
        height: 0,
        width: 0,
        windows: 0,
        doors: 0
        }
    ]
}


export const wallSlice = createSlice({
    name: 'wall',
    initialState,
    reducers: {
        toSetHeight: (state, action: PayloadAction<IPayload>) => {
            const wall = state.walls.findIndex(x => x.id === action.payload.id);
            state.walls[wall] = { ...state.walls[wall], height: action.payload.content};
        },
        toSetWidth: (state, action: PayloadAction<IPayload>) => {
            const wall = state.walls.findIndex(x => x.id === action.payload.id);
            state.walls[wall] = { ...state.walls[wall], width: action.payload.content};
        },
        toSetArea: (state, action: PayloadAction<IPayload>) => {
            const wall = state.walls.findIndex(x => x.id === action.payload.id);
            state.walls[wall] = { ...state.walls[wall], totalArea: action.payload.content};
        },
        toSetDoor: (state, action: PayloadAction<IPayload>) => {
            const wall = state.walls.findIndex(x => x.id === action.payload.id);
            state.walls[wall] = { ...state.walls[wall], doors: action.payload.content };
        },
        toSetWindow: (state, action: PayloadAction<IPayload>) => {
            const wall = state.walls.findIndex(x => x.id === action.payload.id);
            state.walls[wall] = { ...state.walls[wall], windows: action.payload.content};
        }
    }
});

export default wallSlice.reducer;

export const { toSetHeight, toSetWidth, toSetArea, toSetDoor, toSetWindow } = wallSlice.actions;

export const selectAllWalls = (state: RootState) => state.wall.walls;
