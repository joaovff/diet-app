import {
  Alert,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { FONT_SIZES } from "../../constants/FONT_SIZES";
import { COLORS } from "../../constants/COLORS";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Meal } from "../../@types/meal";
import DateTimePicker from "@react-native-community/datetimepicker";
import { createMeal } from "../../storage/meal/create";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Form = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [hour, setHour] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [showHourPicker, setShowHourPicker] = useState<boolean>(false);
  const [isOnDiet, setIsOnDiet] = useState<boolean>(true);

  const navigation = useNavigation<NavigationProp>();

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
    setShowHourPicker(false);
  };

  const pickerDateOnChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const toggleHourPicker = () => {
    setShowHourPicker(!showHourPicker);
    setShowDatePicker(false);
  };

  const pickerHourOnChange = (event: any, selectedHour?: Date) => {
    const currentHour = selectedHour || hour;
    setShowHourPicker(false);
    setHour(currentHour);
  };

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handleDescriptionChange = (value: string) => {
    setDescription(value);
  };

  const submitMeal = async () => {
    if (description.trim().length >= 1 && name.trim().length >= 1) {
      const newMeal: Meal = {
        id: Date.now(),
        name: name,
        description: description,
        date: date.toISOString().split("T")[0],
        hour: hour.toLocaleTimeString("pt-PT"),
        isDiet: isOnDiet,
      };
      await createMeal(newMeal);
      navigation.navigate("Confirmation", { isOnDiet: isOnDiet });
    } else {
      Alert.alert("Create Meal", "Please fill out all fields.");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Name</Text>
          <TextInput
            placeholder="Name"
            style={styles.inputText}
            value={name}
            onChangeText={handleNameChange}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Description</Text>
          <TextInput
            placeholder="Description"
            multiline={true}
            numberOfLines={3}
            blurOnSubmit={true}
            onSubmitEditing={() => Keyboard.dismiss()}
            style={styles.descriptionInput}
            value={description}
            onChangeText={handleDescriptionChange}
          />
        </View>
        <View style={[styles.dateContainer, styles.inputContainer]}>
          <View style={{ width: "50%" }}>
            <Text style={styles.inputTitle}>Date</Text>

            {Platform.OS === "android" ? (
              <TouchableOpacity onPress={toggleDatePicker}>
                <TextInput
                  style={styles.inputText}
                  value={date.toLocaleDateString("pt-PT")}
                  editable={false}
                />
              </TouchableOpacity>
            ) : (
              <TextInput
                style={styles.inputText}
                value={date.toLocaleDateString("pt-PT")}
                editable={false}
                onPress={toggleDatePicker}
              />
            )}

            {showDatePicker && (
              <DateTimePicker
                mode="date"
                display={Platform.OS === "ios" ? "inline" : "default"}
                value={date}
                onChange={pickerDateOnChange}
                style={{ width: "150%", zIndex: 2 }}
                maximumDate={new Date()}
              />
            )}
          </View>
          <View style={{ width: "45%", zIndex: -1 }}>
            <Text style={styles.inputTitle}>Hour</Text>
            {Platform.OS === "android" ? (
              <TouchableOpacity onPress={toggleHourPicker}>
                <TextInput
                  style={styles.inputText}
                  value={hour.toLocaleTimeString("pt-PT", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  editable={false}
                />
              </TouchableOpacity>
            ) : (
              <TextInput
                style={styles.inputText}
                value={hour.toLocaleTimeString("pt-PT", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                editable={false}
                onPressIn={toggleHourPicker}
              />
            )}

            {showHourPicker && (
              <DateTimePicker
                mode="time"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                value={hour}
                onChange={pickerHourOnChange}
              />
            )}
          </View>
        </View>

        <View style={[styles.radioContainer, styles.inputContainer]}>
          <Text style={styles.inputTitle}>Is on the diet?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.radioButton,
                isOnDiet === true ? styles.yesButtonSelected : {},
              ]}
              onPress={() => setIsOnDiet(true)}
            >
              <FontAwesome
                name="circle"
                size={10}
                color={COLORS.GREEN}
                style={styles.icon}
              />
              <Text style={styles.radioText}>Yes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.radioButton,
                isOnDiet === false ? styles.noButtonSelected : {},
              ]}
              onPress={() => setIsOnDiet(false)}
            >
              <FontAwesome
                name="circle"
                size={10}
                color={COLORS.RED}
                style={styles.icon}
              />
              <Text style={styles.radioText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={submitMeal}>
        <Text style={styles.submitText}>Register Meal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "space-between",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -30,
    zIndex: 1,
    backgroundColor: "white",
  },
  inputTitle: {
    fontSize: FONT_SIZES.MD,
    fontWeight: "600",
    marginBottom: 8,
  },
  inputText: {
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GRAY,
    padding: 10,
    borderRadius: 5,
    fontSize: FONT_SIZES.MD,
    color: COLORS.BLACK,
  },
  inputContainer: {
    marginBottom: 20,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GRAY,
    padding: 10,
    borderRadius: 5,
    fontSize: FONT_SIZES.MD,
    color: COLORS.BLACK,
    minHeight: 80,
  },

  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radioContainer: {
    marginTop: 20,
  },
  radioButton: {
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: "48%",
    backgroundColor: COLORS.LIGHT_GRAY_500,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  noButtonSelected: {
    backgroundColor: COLORS.LIGHT_RED,
    borderWidth: 1,
    borderColor: COLORS.RED,
  },
  yesButtonSelected: {
    backgroundColor: COLORS.LIGHT_GREEN,
    borderWidth: 1,
    borderColor: COLORS.GREEN,
  },
  radioText: {
    textAlign: "center",
    color: COLORS.BLACK,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  submitButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    justifyContent: "center",
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: COLORS.GRAY,
    color: COLORS.WHITE,
  },
  submitText: {
    color: COLORS.WHITE,
    marginLeft: 10,
    fontSize: FONT_SIZES.MD,
  },
  icon: {
    marginRight: 10,
  },
});
