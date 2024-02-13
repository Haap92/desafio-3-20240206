import { Text, Pressable, View, StyleSheet } from "react-native";
import { colors } from "../global/colors";

function Header({ title, setCategorySelected, setProductDetailId }) {
  const handleTitlePress = () => {
    if (setCategorySelected) {
      setCategorySelected('');
    }
    if (setProductDetailId){
      setProductDetailId(0)
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleTitlePress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: "100%",
    backgroundColor: colors.grayScale1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: colors.mustard0,
    fontSize: 20,
    fontFamily: "sixtyfourRegular",
  },
});
