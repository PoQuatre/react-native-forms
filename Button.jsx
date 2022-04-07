import { Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    alignSelf: "stretch",
    borderRadius: 4,
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: "#16a34a",
  },
  label: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 28,
  },
});

export const Button = ({ label, ...props }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} {...props} style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};
