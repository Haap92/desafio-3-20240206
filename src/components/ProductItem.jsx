import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";

const ProductItem = ({ product, setProductDetailId, containerStyle }) => {
  return (
    <Pressable onPress={() => setProductDetailId(product.id)}>
      <ProductCard style={containerStyle}>
        <Image
          style={styles.image}
          source={{ uri: product.images[0] }}
          resizeMode="cover"
        />
        <Text style={styles.text}>{product.title}</Text>
      </ProductCard>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    width: "100%",
    color: "white",
    textAlign: "center",
    fontFamily: "oswaldRegular",
  },
  image: {
    width: 200,
    height: 200,
  },
});