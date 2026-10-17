import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './src/components/Button/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={{fontSize: 26, color: "white"}}>Conversor de moedas!</Text>
      <Text style={{fontSize: 14, color: "white"}}>Converta valores em diferentes moedas!</Text>

      <View style={styles.card}>
        <View style={{flexDirection: "row", justifyContent: "space-between",
         width: "53%",
         marginBottom: 10
         }}>
        <Text style={{color: "white",
          fontSize: 18}}>De:</Text>
        <Text style={{color: "white", fontSize: 18}}>Para:</Text>
          </View>

        <Button variant="primary" title="Converter"/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    alignItems: 'center',
    // justifyContent: 'center',
    width: "100vw",
    fontSize: 20,
    backgroundColor: '#0f172a',
    // backgroundColor: 'green',
    gap: 8,
  },
  card: {
    justifyContent: "center",
    backgroundColor: "#334155",
         width: "98%",
         padding: 22,

         marginTop: 10,

  }
});
