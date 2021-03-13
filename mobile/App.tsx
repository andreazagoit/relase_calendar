import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./screen/HomeScreen";
import SettingsScreen from "./screen/SettingsScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import HomeStackScreen from "./screen/HomeScreen";

const client = new ApolloClient({
  uri: "http://192.168.1.204:4000/graphql",
  cache: new InMemoryCache(),
});

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator shifting={true}>
            <Tab.Screen
              name="HomeStack"
              component={HomeStackScreen}
              options={{
                tabBarColor: "blue",
                tabBarLabel: "Home",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                tabBarColor: "green",
                tabBarLabel: "Home",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="cog" color={color} size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
