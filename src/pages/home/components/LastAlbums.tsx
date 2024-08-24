import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";

type Props = {
  albums: { title: string; cover: string }[];
};

const LastAlbums = ({ albums }: Props) => {
  return (
    <View className="flex flex-wrap flex-row">
      {albums.map((album, index) => (
        <View
          key={index}
          className="flex-row w-[48%] h-16 bg-slate-700 m-1 gap-2 rounded items-center"
        >
          <View>
            <Image
                source={album.cover as ImageSourcePropType}
              className="w-16 h-16 border-l-4 overflow-hidden"
              resizeMode="cover"
              style={{
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
              }}
            />
          </View>
          <Text
            numberOfLines={2}
            className="line-clamp-2 text-lg text-white flex-1 px-1"
            ellipsizeMode="tail"
          >
            {album.title}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default LastAlbums;
