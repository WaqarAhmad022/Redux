import { configureStore } from '@reduxjs/toolkit'
import { StyleSheet, Text, View } from 'react-native'
import AddDelSlice from './reducers/AddDelSlice'


const Store = configureStore ({

    reducer:{
        addDelproduct : AddDelSlice,
    }

})

export default Store

