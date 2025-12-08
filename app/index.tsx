import { Text, View } from "react-native";
import Nav  from "../components/Nav.js";
import Form  from "../components/Form.js";
import RenderData from "../components/RenderData.js" ;

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
      {/* <Form/> */}
      
      {<RenderData/>}
    </View>
  );
}
