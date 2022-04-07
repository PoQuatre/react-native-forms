import { SafeAreaView } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <SafeAreaView style={{ paddingTop: Constants.statusBarHeight }}>
      <Text>Hello</Text>
    </SafeAreaView>
  );
}
