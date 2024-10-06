import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback } from "react";
import { FONT_SIZES } from "../../constants/FONT_SIZES";
import AntDesign from "@expo/vector-icons/AntDesign";
import { COLORS } from "../../constants/COLORS";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { useNavigation } from "@react-navigation/native";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CreateMeal = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CreateMeal")}
      >
        <AntDesign name="plus" size={24} color={COLORS.WHITE} />
        <Text style={styles.buttonText}>New meal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateMeal;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: -40,
  },
  text: {
    fontSize: FONT_SIZES.MD,
    marginTop: 5,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    justifyContent: "center",
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: COLORS.GRAY,
    color: COLORS.WHITE,
  },
  buttonText: {
    color: COLORS.WHITE,
    marginLeft: 10,
    fontSize: FONT_SIZES.SM,
  },
});
