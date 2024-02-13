import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import allProducts from "../data/products.json";
import { colors } from "../global/colors.js";
 
const ItemDetail = ({ setCategorySelected, productDetailId, setProductDetailId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productFound = allProducts.find((product) => product.id === productDetailId);
    setProduct(productFound);
  }, [productDetailId]);

  
  const handleGoBack = () => {
    setProductDetailId(0);
  };

  return product ? (
    <View style={styles.headerContainer}>
      <Header 
        title={"RETRO GAMING"} 
        setCategorySelected={setCategorySelected}
        setProductDetailId={setProductDetailId}
      />
      <View style={styles.container}>
        <View style={styles.productContainer}>
          <Image source={{ uri: product.images[0] }} style={styles.image} />
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>Precio: ${product.price}</Text>
          <Text style={styles.discount}>Descuento: {product.discountPercentage}%</Text>
          <Text style={styles.rating}>Valoración: {product.rating}</Text>
          <Text style={styles.brand}>Marca: {product.brand}</Text>
          <Text style={styles.category}>Categoría: {product.category}</Text>
        </View>
        <Button 
          style={styles.goBack}  
          color={colors.mustard0} 
          title="Go Back!!" 
          onPress={handleGoBack} 
        />
      </View>
    </View>
  ) : (
    <Text>Loading...</Text>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.grayScale0,
  },

  container: {
    flex: 1,
    width: "80%",
    alignItems: "stretch",
    justifyContent: "space-evenly"

  },
  productContainer: {
    padding: 20,
    alignItems: "center",
    backgroundColor: colors.grayScale1,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: colors.mustard0
  },
  description: {
    marginBottom: 10,
    color: colors.mustard0
  },
  price: {
    marginBottom: 5,
    color: "white"
  },
  discount: {
    marginBottom: 5,
    color: "white"
  },
  rating: {
    marginBottom: 5,
    color: "white"
  },
  brand: {
    marginBottom: 5,
    color: "white"
  },
  category: {
    marginBottom: 5,
    color: "white"
  },
  goBack:{
    width: 100,
    height: 50,
    color: "white",
    borderRadius: 25
  }
});
