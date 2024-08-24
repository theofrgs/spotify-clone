import { View, Text } from "react-native";
import React from "react";

type Props = {
  lastReleased: {
    artist: string;
    title: string;
    cover: string;
  };
};

const LastReleased = ({ lastReleased }: Props) => {
  return (
    <View>
      <Text>LastReleased</Text>
    </View>
  );
};

export default LastReleased;
