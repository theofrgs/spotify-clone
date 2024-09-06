import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { SafeAreaView } from "react-native";
import i18n from "./i18n";
import Home from "./src/pages/home/home";
import BottomBar from "./src/components/BottomBar";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <I18nextProvider i18n={i18n}>
        <SafeAreaView className="flex-1 bg-black b">
          <Home />
          <BottomBar />
        </SafeAreaView>
      </I18nextProvider>
    </GluestackUIProvider>
  );
}
