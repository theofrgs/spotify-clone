import { Text, SafeAreaView } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-black">
      <Text className="text-white font-bold text-xl">
        {t("home.welcome")} {"{{username}}"}
      </Text>
    </SafeAreaView>
  );
};

export default Home;
