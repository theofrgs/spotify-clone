import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  lastReleased: {
    artist: string;
    title: string;
    cover: string;
  };
};

const LastReleased = ({ lastReleased }: Props) => {
  const { t } = useTranslation();
  return (
    <View className={`flex flex-wrap flex-row p-1`}>
      <Text
        numberOfLines={2}
        className={`text-xl font-bold text-white px-1`}
        ellipsizeMode="tail"
      >
        {t("foryou")}
      </Text>
      <View className={`flex-row w-full h-44 bg-zinc-800 mt-2 gap-2 rounded`}>
        <Image
          source={lastReleased.cover as ImageSourcePropType}
          style={{
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
          }}
          className={`w-44 h-44 rounded-tl-md rounded-bl-md`}
          resizeMode="cover"
        />
        <View className={`pt-4 px-2 flex flex-col flex-1`}>
          <Text
            numberOfLines={2}
            className={`text-lg text-white`}
            ellipsizeMode="tail"
          >
            {lastReleased.title}
          </Text>
          <Text
            numberOfLines={2}
            className={`text-base text-white/40 flex-1`}
            ellipsizeMode="tail"
          >
            {lastReleased.artist}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LastReleased;
