import { Text, View } from "react-native";
import { TouchableOpacity, Alert } from "react-native";
import styles from "./styles";
import { colors } from "../../styles/colors";

function Button({ variant = "primary", onPress, title }) {
  return (
    <View style={{width: "100%"}}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary]}
      >
        <View style={{ color: "white"
        , justifyContent: "center", alignItems: "center",
          
          fontSize: 16 }}>
            <Text  style={{ color: "white"}}>
              {title}
            </Text>
            
            </View>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
