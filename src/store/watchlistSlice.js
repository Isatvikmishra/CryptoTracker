import React from "react";
import { createSlice } from '@reduxjs/toolkit'


const watchlistSlice = createSlice({
    name: "watchlistSlice",
    initialState: [],
    reducers: {
        handleAddCoins(state, actions){
                const newState = [...state]
                newState.push(actions.payload);

                return newState
        },
        handleRemoveCoins(state, actions){
            const getIndex = (element, array) =>
                array.findIndex(
                  (obj) => JSON.stringify(obj) === JSON.stringify(element)
                );
              const indexOfRemovingCoin = getIndex(actions.payload, state);
              return state.slice(0, indexOfRemovingCoin);
        },
    }
})
export const {handleAddCoins, handleRemoveCoins} = watchlistSlice.actions
export default watchlistSlice.reducer;