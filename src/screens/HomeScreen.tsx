import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../../util/types/navigation";

type Props = RootStackScreenProps<"Home">;

const HomeScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
