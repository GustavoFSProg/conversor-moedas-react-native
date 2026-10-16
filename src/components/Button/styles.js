import { colors } from "../../styles/colors";
import {StyleSheet} from 'react-native'


 const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.inputBackground,
        paddingHorizontal: 16,
        paddingVertical: 8,
        margin: 4,
        borderRadius: 8,
        width: "100vw",
       
    },
    buttonText: {
        color: colors.text,
        fontWeight: "500",
    },
    buttonPrimary: {
        backgroundColor: colors.primary,
    },
     buttonSecondary: {
        backgroundColor: colors.secondary,
    }
 })

 export default styles;