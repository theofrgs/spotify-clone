import { View, Image } from "react-native";
import React from "react";
import { HOME_STATE } from "../home";
import { Button, ButtonText } from "@/components/ui/button";

type Props = {
  homeState: HOME_STATE;
  setHomeState: React.Dispatch<React.SetStateAction<HOME_STATE>>;
  getTranslatedHomeState: (state: HOME_STATE) => string;
};

const Header = ({ homeState, setHomeState, getTranslatedHomeState }: Props) => {
  return (
    <View className="p-2 flex-row gap-2">
      <Button
        size="sm"
        variant="solid"
        action="primary"
        className="rounded-full"
        onPress={() => console.log("navigate to linkedin")}
      >
        <Image
          source={require("@/assets/favicon.png")}
          className="w-6 h-6 object-contain"
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
            <ButtonText className="font-bold text-xl">
              {getTranslatedHomeState(state as HOME_STATE)}
            </ButtonText>
          </Button>
        ))}
    </View>
  );
};

export default Header;
