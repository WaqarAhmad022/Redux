import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../Redux/store/reducers/AddDelSlice'

export default AddProduct = ({navigation}) => {
   
    const [productName, setProductName] = useState("")
    const dispatch = useDispatch();

    const add =()=>{
        dispatch(addProduct(productName))
        setProductName("")
    }

    return (
        <View>
            <TextInput
                placeholder='add product'
                style={{borderWidth:1,marginTop:20}}
                value={productName}
                onChangeText={(val)=>setProductName(val)}
            />
            <Text>{productName}</Text>
            <TouchableOpacity style={{borderWidth:1,marginTop:30}} onPress={add}>
                <Text style={{textAlign:'center'}}>
                    Add
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{borderWidth:1,marginTop:30}} onPress={()=> navigation.navigate("Show")}>
                <Text style={{textAlign:'center'}}>
                    Show Products
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})