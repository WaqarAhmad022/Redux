import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeProduct } from '../Redux/store/reducers/AddDelSlice'


const ShowProducts = () => {
    const Data = useSelector((state) =>state.addDelproduct.productList)
    console.log(Data)

    const dispatch = useDispatch();

  

    const renderView = (element) => {

        const del = () =>{
            dispatch(removeProduct(element.index))
        }
        return(
             <View style={{flexDirection:'row'}}>
                <Text>{element.index+1} ) </Text>
                <Text>{element.item}  </Text>
                <TouchableOpacity onPress={del}>
                    <Text>
                        Delete
                    </Text>
                </TouchableOpacity>
             </View>
        )
    }
  return (
    <View>
      <FlatList
       data={Data}
       renderItem={renderView}

      />
    </View>
  )
}

export default ShowProducts

const styles = StyleSheet.create({})