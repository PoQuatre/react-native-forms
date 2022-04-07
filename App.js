import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Input } from "./Input";
import { Button } from "./Button";
import { useForm, Controller } from "react-hook-form";

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
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: {
            value: true,
            message: "The email is required!",
          },
          pattern: {
            value: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
            message: "A valid email must be entered!",
          },
        }}
        render={({ field: { value, onChange } }) => (
          <Input
            autoComplete="email"
            keyboardType="email-address"
            placeholder="Email"
            onChangeText={(text) => onChange(text)}
            value={value}
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{
          required: {
            value: true,
            message: "The password is required!",
          },
          minLength: {
            value: 8,
            message: "The password must be at least 8 characters long!",
          },
        }}
        render={({ field: { value, onChange } }) => (
          <Input
            autoComplete="password"
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => onChange(text)}
            value={value}
            error={errors.password?.message}
          />
        )}
      />

      <Button
        label="Login"
        onPress={handleSubmit(onSubmit)}
      />
    </SafeAreaView>
  );
}
