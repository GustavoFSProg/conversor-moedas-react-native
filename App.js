import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './src/components/Button/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={{fontSize: 20, color: "white"}}>Conversor de moedas!</Text>
      <Text style={{fontSize: 16, color: "white"}}>Converta valores em diferentes moedas!</Text>

      <View style={{flexDirection: "row", justifyContent: "space-between",
         width: "53%",
         marginLeft: -100,

         marginTop: 10}}>
        <Text style={{color: "white",
          
          fontSize: 18}}>De:</Text>
        <Text style={{color: "white", fontSize: 18}}>Para:</Text>
        <Button />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100vw",
    fontSize: 20,
    backgroundColor: '#0f172a',
    gap: 8,
  },
});
