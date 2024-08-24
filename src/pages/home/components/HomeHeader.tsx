import { View, Image, Linking } from "react-native";
import React from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { HOME_STATE } from "../enum";

type Props = {
  homeState: HOME_STATE;
  setHomeState: React.Dispatch<React.SetStateAction<HOME_STATE>>;
  getTranslatedHomeState: (state: HOME_STATE) => string;
};

const HomeHeader = ({ homeState, setHomeState, getTranslatedHomeState }: Props) => {
  return (
    <View className="flex-row gap-2">
      <Button
        size="sm"
        variant="solid"
        action="primary"
        className="rounded-full p-0 w-9"
        onPress={() =>
          Linking.openURL("https://www.linkedin.com/in/theo-fargeas-127046197/")
        }
      >
        <Image
          source={require("@/assets/profil_picture.jpg")}
          className="rounded-full w-full h-full"
          resizeMode="cover"
        />
      </Button>
      {Object.values(HOME_STATE)
        .filter((key) => !isNaN(Number(key)))
        .map((state) => (
          <Button
            key={state}
            size="sm"
            variant="solid"
            action="primary"
            className={`rounded-full ${homeState === state ? "bg-green-400" : "bg-slate-700"}`}
            onPress={() => setHomeState(state as HOME_STATE)}
          >
            <ButtonText>
              {getTranslatedHomeState(state as HOME_STATE)}
            </ButtonText>
          </Button>
        ))}
    </View>
  );
};

export default HomeHeader;
