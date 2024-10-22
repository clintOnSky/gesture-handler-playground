import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { RootStackParamList } from "./util/types/navigation";

export default function App() {
  return <RootLayout />;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
