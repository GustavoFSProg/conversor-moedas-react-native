import { Text, View } from "react-native";
import { TouchableOpacity, Alert } from "react-native";
import styles from "./styles";

function Button({ variant = "secondary" }) {
  return (
    <View style={{width: "100%"}}>
      <TouchableOpacity
        onPress={() => Alert.alert("Conversão realizada!")}
        style={styles.button}
      >
        <View style={{ color: "white"
        , justifyContent: "center", alignItems: "center",
          
          fontSize: 16 }}>
            <Text  style={{ color: "white"}}>
              Converter 
            </Text>
            
            </View>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
