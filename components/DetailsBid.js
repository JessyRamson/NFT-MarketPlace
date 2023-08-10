import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { EthPrice } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

export const DetailsBid = ({ bid }) => {
  return (
    <View style={styles.screen}>
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />

      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid placed by {bid.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          Bid placed by {bid.date}
        </Text>
      </View>

      <EthPrice price={bid.price} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.base * 2,
  },
});
