import { SafeAreaView, ScrollView, View } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HOME_STATE } from "./enum";
import LastAlbums from "./components/LastAlbums";
import LastReleased from "./components/LastReleased";
import HomeHeader from "./components/HomeHeader";
import RecentListen from "./components/RecentListen";

const albums = [
  {
    title: "Ocean Drive",
    cover: require("@/assets/album_ocean_drive.jpeg"),
  },
  {
    title: "Chill Beats",
    cover: require("@/assets/album_chill_beats.jpeg"),
  },
  {
    title: "Acoustic Evening",
    cover: require("@/assets/album_acoustic_evening.jpeg"),
  },
  {
    title: "Morning Motivation",
    cover: require("@/assets/album_morning_motivation.jpeg"),
  },
  {
    title: "Rock Classics",
    cover: require("@/assets/album_rock_classics.jpeg"),
  },
  {
    title: "Jazz Vibes",
    cover: require("@/assets/album_jazz_vibes.jpeg"),
  },
  {
    title: "Pop Essentials",
    cover: require("@/assets/album_pop_essentials.jpeg"),
  },
  {
    title: "Late Night Lounge",
    cover: require("@/assets/album_late_night_lounge.jpg"),
  },
];

const lastReleased = {
  artist: "The Weeknd",
  title: "After Hours",
  cover: require("@/assets/album_after_hours.jpeg"),
};

const lastListens = [
  {
    artist: "Drake",
    title: "Certified Lover Boy",
    cover: require("@/assets/album_certified_lover_boy.jpeg"),
  },
  {
    artist: "Adele",
    title: "30",
    cover: require("@/assets/album_30.jpeg"),
  },
  {
    artist: "Billie Eilish",
    title: "Happier Than Ever",
    cover: require("@/assets/album_happier_than_ever.jpeg"),
  },
  {
    artist: "Ed Sheeran",
    title: "= (Equals)",
    cover: require("@/assets/album_equals.jpeg"),
  },
  {
    artist: "Taylor Swift",
    title: "Folklore",
    cover: require("@/assets/album_folklore.jpeg"),
  },
];

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
    <ScrollView>
      <View className="flex mt-16 gap-4">
        <View className="flex gap-4 p-6 pb-0">
          <HomeHeader
            homeState={homeState}
            setHomeState={setHomeState}
            getTranslatedHomeState={getTranslatedHomeState}
          />
          <LastAlbums albums={albums} />
          <LastReleased lastReleased={lastReleased} />
        </View>
        <RecentListen lastListens={lastListens} />
      </View>
    </ScrollView>
  );
};

export default Home;
