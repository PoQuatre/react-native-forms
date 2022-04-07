import { SafeAreaView, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import { Input } from "./Input";
import { Button } from "./Button";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#e5e7eb",
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Button label="Login" />
    </SafeAreaView>
  );
}
