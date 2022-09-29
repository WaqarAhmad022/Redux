
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddProduct from './src/views/AddProduct';
import ShowProducts from './src/views/ShowProducts';
import { Provider } from 'react-redux';
import Store from './src/Redux/store';



const Stack = createNativeStackNavigator();

const  App =()=> {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Add" component={AddProduct} />
        <Stack.Screen name="Show" component={ShowProducts} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;