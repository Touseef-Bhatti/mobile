import { Text, View } from "react-native";
import Nav  from "../components/Nav.js";
import Form  from "../components/Form.js";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello React Native</Text>
      {/* <Nav/> */}
      <Form/>
    </View>
  );
}
