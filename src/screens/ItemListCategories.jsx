import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text, Pressable } from "react-native";
import Header from "../components/Header";
import allProducts from "../data/products.json";
import ProductItem from "../components/ProductItem";
import Searchbar from "../components/Searchbar";
import { colors } from "../global/colors.js"

function ItemListCategories({ category, setCategorySelected, setProductDetailId }) {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const lowercaseKeyword = keyword.toLowerCase();
    if (category) {
      const products = allProducts.filter((product) => product.category === category);
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(lowercaseKeyword)
      );
      setProducts(filteredProducts);
    } else {
      const filteredProducts = allProducts.filter((product) =>
        product.title.toLowerCase().includes(lowercaseKeyword)
      );
      setProducts(filteredProducts);
    }
  }, [category, keyword]);

  return (
    <View style={styles.headerContainer}>
      <Header 
        title={"RETRO GAMING"} 
        setCategorySelected={setCategorySelected}
        setProductDetailId={setProductDetailId}
      />
      <Searchbar onSearch={setKeyword} />
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductItem
              product={item}
              setProductDetailId={setProductDetailId}
              setCategorySelected={setCategorySelected}
              containerStyle={styles.productContainer}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flatList}
        />
      </View>
    </View>
  );
}

export default ItemListCategories;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.grayScale0
  },
  searchbar:{
    alignItems: "center",
    backgroundColor: colors.grayScale1
  },
  container: {
    flex: 1,
    width: "80%",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  flatList: {
    flexGrow: 1,
    width: '100%',
  },
  productContainer: {
    width: '80%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "space-between",
    alignItems: "center"
  },
});
