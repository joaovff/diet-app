import { StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { useNavigation } from "@react-navigation/native";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface GoBackProps {
  color?: string;
}

const GoBack = ({ color = "black" }: GoBackProps) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Ionicons
      name="arrow-back"
      size={26}
      color={color}
      style={styles.icon}
      onPress={() => navigation.goBack()}
      suppressHighlighting={true}
    />
  );
};

export default GoBack;

const styles = StyleSheet.create({
  icon: {
    zIndex: 3,
    marginLeft: 15,
    padding: 10,
    backgroundColor: "transparent",
  },
});
