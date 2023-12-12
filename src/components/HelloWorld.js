import { Text, View } from "react-native";

export default function HelloWorld() {
  return (
    <View testID="top">
      <Text>Hello</Text>
      <View testID="world-container">
        <Text>World</Text>
      </View>
    </View>
  );
}
