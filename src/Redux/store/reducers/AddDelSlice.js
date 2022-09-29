import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productList:[]
}

export const AddDelSlice = createSlice ({
    name:'addDel',
    initialState,

    reducers:{

        addProduct:(state, action) => {
             state.productList.push(action.payload)
             console.log("Products in store ==>",state.productList)
        },

        removeProduct:(state, action) => {
            state.productList.splice(action.payload,1)

        }
    }
})

export const {addProduct,removeProduct} = AddDelSlice.actions;
export default AddDelSlice.reducer;

