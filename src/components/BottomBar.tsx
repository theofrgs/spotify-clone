import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

enum HOME_PAGE {
  HOME,
  SEARCH,
  LIBRARY,
}

const BottomBar = () => {
  const { t } = useTranslation();
  const [selectedMenu, setSelectedMenu] = useState<HOME_PAGE>(HOME_PAGE.HOME);

  const menus = [
    {
      page: HOME_PAGE.HOME,
      icon: (
        <MaterialIcons
          name={"home-filled"}
          size={20}
          color={`${selectedMenu === HOME_PAGE.HOME ? "white" : "#FFFFFF66"}`}
        />
      ),
      title: t("menu.home"),
    },
    {
      page: HOME_PAGE.SEARCH,
      icon: (
        <Ionicons
          name={"search-outline"}
          size={20}
          color={`${selectedMenu === HOME_PAGE.SEARCH ? "white" : "#FFFFFF66"}`}
        />
      ),
      title: t("menu.search"),
    },
    {
      page: HOME_PAGE.LIBRARY,
      icon: (
        <Ionicons
          name={"library"}
          size={20}
          color={`${selectedMenu === HOME_PAGE.LIBRARY ? "white" : "#FFFFFF66"}`}
        />
      ),
      title: t("menu.library"),
    },
  ];

  return (
    <View className="fixed bottom-0 left-0 h-16 p-4 flex-row justify-between">
      <View />
      {menus.map((menu, key) => (
        <TouchableOpacity
          key={key}
          className="flex justify-center items-center gap-1"
          onPress={() => setSelectedMenu(menu.page)}
        >
          {menu.icon}
          <Text
            className={`${selectedMenu === menu.page ? "text-white" : "text-white/40"}`}
          >
            {menu.title}
          </Text>
        </TouchableOpacity>
      ))}
      <View />
    </View>
  );
};

export default BottomBar;
