import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignSelf: "stretch",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16a34a",
  },
  label: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 28,
    marginVertical: 12,
  },
  indicator: {
    marginLeft: 12,
  },
});

export const Button = ({ label, isLoading, ...props }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} {...props} style={styles.button}>
      <Text style={styles.label}>{label}</Text>
      {isLoading && (
        <ActivityIndicator color="#fff" size="large" style={styles.indicator} />
      )}
    </TouchableOpacity>
  );
};
