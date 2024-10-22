import { ImageSourcePropType, StyleSheet, View } from "react-native";
import React from "react";
import Animated, {
  SharedValue,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType | SharedValue<ImageSourcePropType>;
};

const EmojiSticker = ({ imageSize, stickerSource }: Props) => {
  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = imageSize * 2;
        console.log(scaleImage.value);
      } else {
        scaleImage.value = Math.round(scaleImage.value / 2);
        console.log(scaleImage.value);
      }
    });

  const imageStyle = useAnimatedStyle(() => ({
    width: withTiming(scaleImage.value),
    height: withTiming(scaleImage.value),
  }));

  const drag = Gesture.Pan().onChange((e) => {
    console.log(e.changeX, e.translationX);
    translateX.value += e.changeX;
    translateY.value += e.changeY;
  });

  const containerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value * 0.9 },
      { translateY: translateY.value * 0.9 },
    ],
  }));

  return (
    <GestureDetector gesture={drag}>
      <Animated.View
        style={[
          containerStyle,
          { backgroundColor: "red", alignSelf: "center" },
        ]}
      >
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={stickerSource}
            resizeMode="contain"
            style={imageStyle}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
};

export default EmojiSticker;

const styles = StyleSheet.create({});
