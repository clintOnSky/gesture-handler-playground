import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../../util/types/navigation";
import EmojiSticker from "../components/EmojiSticker";

type Props = RootStackScreenProps<"Home">;

const HomeScreen = ({ navigation, route }: Props) => {
  return (
    <View style={styles.container}>
      <EmojiSticker
        stickerSource={require("@/assets/favicon.png")}
        imageSize={50}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
