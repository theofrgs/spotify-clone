import { SafeAreaView } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HOME_STATE } from "./enum";
import LastAlbums from "./components/LastAlbums";
import LastReleased from "./components/LastReleased";
import HomeHeader from "./components/HomeHeader";

const albums = [
  {
    title: "Radio Sunset Lover",
    cover: require("@/assets/profil_picture.jpg"),
  },
  {
    title: "Electro rooftop",
    cover: require("@/assets/profil_picture.jpg"),
  },
  {
    title: "Liked songs",
    cover: require("@/assets/profil_picture.jpg"),
  },
  {
    title: "Radio California dream",
    cover: require("@/assets/profil_picture.jpg"),
  },
  {
    title: "Radio Paper Plane",
    cover: require("@/assets/profil_picture.jpg"),
  },
  {
    title: "SummerVibes",
    cover: require("@/assets/profil_picture.jpg"),
  },
  {
    title: "Night Vibes",
    cover: require("@/assets/profil_picture.jpg"),
  },
  {
    title: "This is Shiloh dinasty",
    cover: require("@/assets/profil_picture.jpg"),
  },
];

const lastReleased = {
  artist: 'Central Cee',
  title: "Bolide Noir",
  cover: require("@/assets/profil_picture.jpg"),
};

const Home = () => {
  const { t } = useTranslation();
  const [homeState, setHomeState] = useState<HOME_STATE>(HOME_STATE.ALL);

  const getTranslatedHomeState = (state: HOME_STATE) => {
    switch (state) {
      case HOME_STATE.ALL:
        return t("all");
      case HOME_STATE.MUSIC:
        return t("music");
      case HOME_STATE.PODCAST:
        return t("podcast");
      default:
        return t("all");
    }
  };

  return (
    <SafeAreaView className="flex p-6 gap-4 mt-16">
      <HomeHeader
        homeState={homeState}
        setHomeState={setHomeState}
        getTranslatedHomeState={getTranslatedHomeState}
      />
      <LastAlbums albums={albums} />
      <LastReleased lastReleased={lastReleased}/>
    </SafeAreaView>
  );
};

export default Home;
