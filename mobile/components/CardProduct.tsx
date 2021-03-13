import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export interface Props {
  id: String;
  name: String;
}

const CardProduct: React.FC<Props> = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("Product", { productId: props.id })}
    >
      <Text style={styles.cardText}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  cardContainer: {
    minHeight: 200,
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    justifyContent: "flex-end",
    backgroundColor: "blue",
  },
  cardText: {
    color: "white",
  },
});
