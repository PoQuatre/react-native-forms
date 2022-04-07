import { Text, TextInput, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "stretch",
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderWidth: 1,
    alignSelf: "stretch",
    padding: 8,
    borderColor: "#6b7280",
    borderRadius: 4,
    fontSize: 16,
    color: "#374151",
    lineHeight: 24,
  },
  error: {
    color: "#ef4444",
    marginTop: 4,
  },
});

export const Input = ({ error, style, ...props }) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={[styles.input, error && { borderColor: "#ef4444" }, style]}
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
