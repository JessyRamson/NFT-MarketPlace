import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
    >
      <Image source={imgUrl} resizeMode="contain" style={styles.image} />
    </TouchableOpacity>
  );
};
export const RectButton = ({ minWidth, handlePress, fontSize }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  //   cirButCont: {
  //     width: 40,
  //     height: 40,
  //     backgroundColor: COLORS.white,
  //     position: "absolute",
  //     borderRadius: SIZES.extraLarge,
  //     alignItems: "center",
  //     justifyContent: "center",
  //     ...SHADOWS.light,
  //     ...props
  //   },
  image: {
    width: 24,
    height: 24,
  },
});
