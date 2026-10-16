import { Text } from "react-native";
import { TouchableOpacity, Alert } from "react-native";

function Button() {
  return (
    <>
      <TouchableOpacity
        onPress={() => Alert.alert("Conversão realizada!")}
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: 10,
          borderRadius: 5,
          marginTop: 40,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Converter</Text>
      </TouchableOpacity>
    </>
  );
}

export default Button;
