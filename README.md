# Diet-App

A simple and efficient mobile application built with **React Native** to help users track their daily meals, monitor whether they are on a diet, and visualize meal statistics. This app provides a user-friendly interface for creating meals, editing, and viewing detailed statistics of the user’s meal habits. The app is compatible with both Android and iOS devices.

## Features

- **Track Meals**: Add meals with specific details like time, date, and whether they follow the user's diet plan.
- **Edit and Delete Meals**: Easily edit or remove meals from the list.
- **Meal Statistics**: View helpful statistics such as the percentage of meals that are on the diet and streaks of meals within the diet.
- **Detailed Meal View**: Click on any meal to view detailed information.
- **General Data Screen**: Overview of total meals and diet-related statistics.
- **Cross-Platform Support**: Available for both Android and iOS.

## Installation

To run this project locally, follow the instructions below:

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [React Native](https://reactnative.dev/docs/environment-setup)

### Steps

1. **Clone the repository:**

```bash
git clone https://github.com/joaovff/diet-app
```

2. **Navigate to the project directory:**

```bash
cd diet-app
```

3. **Install dependencies:**

```bash
npm install
```

4. **Run the app:**

```bash
npx expo start
```

5. **Scan the QR code with the Expo Go app on your iOS or Android device, or run the app on an emulator.**

## Technologies Used

- React Native: For building the mobile app.
- Expo: For developing and deploying the app.
- TypeScript: Ensuring type safety.
- React Navigation: For navigating between screens.
- AsyncStorage: To store meal data persistently on the device.
- Expo Vector Icons: Icons used throughout the app.

## Folder Structure

.
├── @types                 # Type definitions for meals, general data, etc.
├── assets                 # App assets (images)
├── components             # Reusable UI components (e.g., MealsList, MealsCard, Buttons,)
├── constants              # Theme constants (colors, font sizes)
├── navigation             # Navigation setup using React Navigation
├── screens                # App screens (Home, Details, CreateMeal, Edit, etc.)
├── storage                # Logic to persist and retrieve meal data (AsyncStorage)
├── utils                  # Utility functions (e.g., date and hour formatting)
├── App.tsx                # Root component of the app
└── ...


## Core Functionality

### 1. **Home Screen**
   - Displays an overview of meals and their status (on diet or not).
   - Access meal statistics and track streaks of on-diet meals.
   - Add a new meal or navigate to edit an existing meal.

### 2. **Create Meal Screen**
   - Allows the user to add a new meal with name, time, date, and diet status.

### 3. **Confirmation Meal Screen**
   - Provides feedback to the user after the creation of the new meal.

### 4. **Meal Details Screen**
   - View detailed information about a specific meal.
   - Edit or delete meals from this screen.

### 5. **Edit Meal Screen**
   - Allows the user to edit a meal that has already been created.

### 6. **General Data Screen**
   - Provides a detailed summary of total meals, meals on and off diet, and diet percentages.

## AsyncStorage

The app uses `AsyncStorage` to store meals persistently on the device. All meals added are stored locally and are automatically retrieved when the app is reopened.

## How to Customize

- **Colors**: You can modify the theme colors in the `constants/COLORS.ts` file.
- **Fonts and Sizes**: Adjust font sizes and styles in the `constants/FONT_SIZES.ts` file.
- **Icons**: The app uses [Expo Vector Icons](https://docs.expo.dev/guides/icons/). You can easily change the icons by using any icon from the Expo vector icon library.

## Known Issues

- **Ellipsis Not Working on iOS**: When rendering meal names that are too long, ellipsizing the text may not work properly on some devices. Check `Text` properties and maxWidth settings to ensure proper behavior.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
