import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { useQuery, gql } from "@apollo/client";
import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID } from "../graphql/queries";
import CardProduct from "../components/CardProduct";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation }: any) => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  const Stack = createStackNavigator();

  return (
    <ScrollView>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.container}>
          {/* <Text>{JSON.stringify(data)}</Text> */}
          {data.products.map((product: any) => (
            <CardProduct key={product.id} id={product.id} name={product.name} />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const ProductScreen = ({ route, navigation }: any) => {
  const { productId } = route.params;
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id: productId },
  });
  const product = data?.products[0];

  return (
    <ScrollView>
      {loading ? <Text>Loading...</Text> : <Text>{product?.name}</Text>}
    </ScrollView>
  );
};

const HomeStackScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
