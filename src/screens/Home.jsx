import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";
import { colors } from "../global/colors.js";

function Home({ setCategorySelected }) {
  return (
    <View style={styles.headerContainer}>
      <Header title={"RETRO GAMING"} setCategorySelected={setCategorySelected} />
      <View style={styles.container}>
        <Categories setCategorySelected={setCategorySelected} />
      </View>
    </View>
  );
}

export default Home;

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
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
