import { SafeAreaView, Text } from "react-native";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Home from "./src/pages/home";

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <SafeAreaView className="flex-1 items-center justify-center bg-black">
        <Home />
      </SafeAreaView>
    </I18nextProvider>
  );
}
