import { SafeAreaView, Text } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/header";

export enum HOME_STATE {
  ALL,
  MUSIC,
  PODCAST,
}

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
    <SafeAreaView className="p-4">
      {/* <Text className="text-white font-bold text-xl">
        {t("home.welcome")} {"{{username}}"}
      </Text> */}
      <Header
        homeState={homeState}
        setHomeState={setHomeState}
        getTranslatedHomeState={getTranslatedHomeState}
      />
    </SafeAreaView>
  );
};

export default Home;
