import { View, Text } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { HOME_STATE } from "../home";

type Props = {
  homeState: HOME_STATE;
  setHomeState: React.Dispatch<React.SetStateAction<HOME_STATE>>;
  getTranslatedHomeState: (state: HOME_STATE) => string;
};

const Header = ({ homeState, setHomeState, getTranslatedHomeState }: Props) => {
  const { t } = useTranslation();

  return (
    <View className={`p-2 border bg-slate-500`}>
      <Text className="text-white font-bold text-xl">
        {getTranslatedHomeState(homeState)}
      </Text>
    </View>
  );
};

export default Header;
