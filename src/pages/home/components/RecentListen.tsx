import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  lastListens: {
    artist: string;
    title: string;
    cover: string;
  }[];
};

const RecentListen = ({ lastListens }: Props) => {
  const { t } = useTranslation();

  const RecentListenCard = ({
    song,
  }: {
    song: {
      artist: string;
      title: string;
      cover: string;
    };
  }) => (
    <View className={`flex-col w-52 mt-2 rounded`}>
      <Image
        source={song.cover as ImageSourcePropType}
        className={`w-52 h-52 rounded-md`}
        resizeMode="cover"
      />
      <View className={`px-2 flex mt-2`}>
        <Text
          numberOfLines={2}
          className={`text-lg text-white`}
          ellipsizeMode="tail"
        >
          {song.title}
        </Text>
      </View>
    </View>
  );

  return (
    <View className={`flex`}>
      <Text
        numberOfLines={2}
        className={`text-xl font-bold text-white px-1 pl-6`}
        ellipsizeMode="tail"
      >
        {t("recentListen")}
      </Text>
      <ScrollView
        horizontal={true}
        // onScroll={handleScroll}
      >
        <View className="gap-4 flex-row pl-6">
          {lastListens.map((song, key) =>
            key === 0 ? (
              <View className="-pl-4" key={key} >
                <RecentListenCard song={song} />
              </View>
            ) : (
              <RecentListenCard  key={key} song={song} />
            )
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default RecentListen;
